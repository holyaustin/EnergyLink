// Core
import { useState, ReactText } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import { ContractTransaction } from "ethers";

// Components
import Navigation from "components/Navigation";
import { FormLayout } from "components/Layouts/FormLayout";
import { DefaultButton } from "components/Buttons/DefaultButton";
import GeneralInfo, { GeneralValuesType } from "./General";
import Finance, { FinanceValuesType } from "./Finance";

// Utils
import { crowdloanFactoryAbi } from "utils/abis";
import { contractAddresses } from "utils/addresses";
import { assets, getAddressFromAsset } from "utils/assets";

export default function NewCrowdloan() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const { chainId: chainIdHex } = useMoralis();

  const chainId: string = chainIdHex
    ? parseInt(chainIdHex!).toString()
    : "11155111";

  const [generalInfoValues, setGeneralInfoValues] = useState<GeneralValuesType>(
    {
      startDate: new Date(),
      endDate: new Date(),
      asset: assets[0].value,
    }
  );

  const [financeValues, setFinanceValues] = useState<FinanceValuesType>({
    apy: null,
    goal: null,
  });

  /* Contract Calls */
  const { runContractFunction: newCrowdloan } = useWeb3Contract({
    abi: crowdloanFactoryAbi,
    contractAddress: contractAddresses[chainId]["crowdloanFactory"],
    functionName: "createCrowdloan",
    params: {
      _apy: Number(financeValues.apy),
      _token: getAddressFromAsset(generalInfoValues.asset, chainId),
      _goal: Number(financeValues.goal),
      _startAt: Math.floor(generalInfoValues.startDate.getTime() / 1000),
      _endAt: Math.floor(generalInfoValues.endDate.getTime() / 1000),
    },
  });

  const canSave = () => {
    if (activeStep === 1) {
      return Object.values(generalInfoValues).every(
        (val) => val !== null && val !== ""
      );
    }
    return true;
  };

  const handleSuccess = async (toastId: ReactText, tx: ContractTransaction) => {
    await tx.wait();
    setActiveStep(3);
    toast.update(toastId, {
      render: "Crowload created!",
      type: toast.TYPE.SUCCESS,
      position: "top-right",
      isLoading: false,
      autoClose: 1000,
    });
  };

  const handleError = (toastId: ReactText, error: any) => {
    /* eslint-disable no-console */
    console.error(error);
    toast.update(toastId, {
      render: "Error creting campaign!",
      type: toast.TYPE.ERROR,
      position: "top-right",
      isLoading: false,
      autoClose: 1000,
    });
  };

  const handleNext = async () => {
    if (activeStep === 1) {
      return setActiveStep(2);
    } else if (activeStep === 2) {
      const id = toast.loading("Please wait...", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      await newCrowdloan({
        onSuccess: (tx: any) => handleSuccess(id, tx),
        onError: (error) => handleError(id, error),
      });
    } else if (activeStep === 3) {
      navigate("/crowdloans");
    }
  };

  const getStep = (step: Number) => {
    switch (step) {
      case 1:
        return {
          form: (
            <GeneralInfo
              values={generalInfoValues}
              onChange={setGeneralInfoValues}
            />
          ),
          buttonText: "Next",
        };

      case 2:
        return {
          form: <Finance values={financeValues} onChange={setFinanceValues} />,
          buttonText: "Final Step!",
        };

      case 3:
        return {
          form: (
            <div className="w-100 text-center">
              Crowdloan was successfully added!
            </div>
          ),
          buttonText: "Next",
        };

      default:
        return { form: <></>, buttonText: "Next" };
    }
  };

  return (
    <FormLayout>
      <div className="sm:pb-8">
        <Navigation
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          numberOfSteps={3}
        />
      </div>

      {getStep(activeStep).form}

      <div className="flex flex-row space-x-6">
        <DefaultButton
          onClick={() => navigate(-1)}
          color="gray"
          className="mt-10 w-1/2"
        >
          Back
        </DefaultButton>
        <DefaultButton
          onClick={handleNext}
          color="cyan"
          className="mt-10 w-1/2"
          disabled={!canSave()}
        >
          {getStep(activeStep).buttonText}
        </DefaultButton>
      </div>
    </FormLayout>
  );
}
