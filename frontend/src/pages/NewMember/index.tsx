// Core
import { useState, ReactText } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Contract } from "react-moralis";
import { toast } from "react-toastify";
import { ContractTransaction } from "ethers";
import { useUser } from "contexts/User.context";

// Components
import Navigation from "components/Navigation";
import GeneralInfo, {
  GeneralInfoValuesType,
  typeOptions,
  typeEnumToMemberType,
} from "./GeneralInfo";
import RoleInfo, { RoleInfoValuesType } from "./Role";
import { FormLayout } from "components/Layouts/FormLayout";
import { DefaultButton } from "components/Buttons/DefaultButton";

// Utils
import { communityAbi } from "utils/abis";

export default function NewMember() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const { community } = useUser();

  const [generalInfoValues, setGeneralInfoValues] =
    useState<GeneralInfoValuesType>({
      publicAddress: null,
      type: typeOptions[0].value,
    });

  const [roleInfoValues, setRoleInfoValues] = useState<RoleInfoValuesType>({
    meterIdentifier: null,
    latitude: null,
    longitude: null,
  });

  /* Contract Calls */
  const { runContractFunction: newMember } = useWeb3Contract({
    abi: communityAbi,
    contractAddress: community,
    functionName: "enterCommunity",
    params: {
      _member: generalInfoValues.publicAddress,
      _locationLat: Number(roleInfoValues.latitude),
      _locatinoLon: Number(roleInfoValues.longitude),
      _meterId: roleInfoValues.meterIdentifier,
      _memberType: typeEnumToMemberType[generalInfoValues.type || "CONSUMER"],
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
      render: "Member created!",
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
      render: "Error adding new member!",
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
      await newMember({
        onSuccess: (tx: any) => handleSuccess(id, tx),
        onError: (error) => handleError(id, error),
      });
    } else if (activeStep === 3) {
      navigate("/members");
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
          form: (
            <RoleInfo values={roleInfoValues} onChange={setRoleInfoValues} />
          ),
          buttonText: "Final Step!",
        };

      case 3:
        return {
          form: (
            <div className="w-100 text-center">
              {generalInfoValues.publicAddress} was successfully added!
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
