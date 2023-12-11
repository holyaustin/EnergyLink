import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { CommunityFactory, Community } from "../../typechain/contracts"
import { deployments, ethers, network } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { assert, expect } from "chai"
import { NAME, EPICENTER_LAT, EPICENTER_LON } from "../../constants/community"
import { ADDRESS_ZERO } from "../../constants/governance"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Community Factory", async () => {
          let communityFactory: CommunityFactory
          let community: Community
          let deployer: SignerWithAddress
          let creator: SignerWithAddress
          let accounts: SignerWithAddress[]

          before(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              creator = accounts[1]
              await deployments.fixture(["crowdlendingFactory", "communityFactory"])

              communityFactory = await ethers.getContract("CommunityFactory", deployer.address)
          })

          describe("constructor", function () {
              it("initializes the communityFactory correctly", async () => {
                  const allCommunities = await communityFactory.getAllCommunities()
                  assert.equal(allCommunities.length, 0)
              })
          })

          describe("createCommunity", function () {
              it("emits event on community creation", async () => {
                  const transactionResponse = await communityFactory
                      .connect(creator)
                      .createCommunity(NAME, EPICENTER_LAT, EPICENTER_LON)

                  expect(transactionResponse).to.emit(communityFactory, "NewCommunity")

                  const transactionReceipt = await transactionResponse.wait()

                  const eventsLength = transactionReceipt.events!.length
                  const communityAddress =
                      transactionReceipt.events![eventsLength - 1].args!.community

                  const Community = await ethers.getContractFactory("Community")
                  community = Community.attach(communityAddress) as Community
              })

              it("initializes the community correctly", async () => {
                  const epicenter = await community.getEpicenter()
                  const name = await community.getName()
                  assert.equal(epicenter[0].toString(), EPICENTER_LAT.toString())
                  assert.equal(epicenter[1].toString(), EPICENTER_LON.toString())
                  assert.equal(name, NAME)
              })

              it("community has a crowdlending factory", async () => {
                  const crowdlendingFactoryAddress = await community.getCrowdlendingFactory()
                  assert(ethers.utils.isAddress(crowdlendingFactoryAddress))
              })

              it("community has an items contract", async () => {
                  const communityItemsAddress = await community.getCommunityItems()
                  assert(ethers.utils.isAddress(communityItemsAddress))
              })

              it("community does not have a governance contract", async () => {
                  const governanceAddress = await community.getGovernance()
                  assert.equal(governanceAddress, ADDRESS_ZERO)
              })

              it("community does not have a timelock contract", async () => {
                  const timelockAddress = await community.getTimelock()
                  assert.equal(timelockAddress, ADDRESS_ZERO)
              })
          })
      })
