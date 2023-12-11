const fs = require("fs")
const path = require("path")

require("@chainlink/env-enc").config()

const SOURCE_CODE = path.resolve(__dirname, "functions-perform-market-clearing.js")
console.log(SOURCE_CODE)
const Location = {
    Inline: 0,
    Remote: 1,
}

const CodeLanguage = {
    JavaScript: 0,
}

const ReturnType = {
    uint: "uint256",
    uint256: "uint256",
    int: "int256",
    int256: "int256",
    string: "string",
    bytes: "Buffer",
    Buffer: "Buffer",
}

const requestConfig = {
    codeLocation: Location.Inline,
    codeLanguage: CodeLanguage.JavaScript,
    source: fs.readFileSync(SOURCE_CODE).toString(),
    secrets: { ecoverseKey: process.env.ECOVERSE_API_KEY ?? "" },
    perNodeSecrets: [],
    walletPrivateKey: process.env["PRIVATE_KEY"],
    args: [],
    expectedReturnType: ReturnType.string,
    secretsURLs: [],
}

module.exports = requestConfig
