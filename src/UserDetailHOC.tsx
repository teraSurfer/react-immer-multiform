import { useState } from "react";
import UserDetailForm from "./form/UserDetailForm";
import UserLocationForm from "./form/UserLocationForm";
import { useUserFormState } from "./hook/useUserFormState";

export const UserDetailHOC = () => {
  const [step, setStep] = useState(0);
  const { formState, formActions } = useUserFormState();

  function onUserDetailSubmit() {
    setStep(1);
  }

  function onUserLocationSubmit() {
    console.log(formState);
  }

  function onFormReset() {
    formActions.resetForm();
    setStep(0);
  }

  return (
    <div>
      {step === 0 && (
        <UserDetailForm
          onSubmit={onUserDetailSubmit}
          onUserNameChange={formActions.updateUserName}
          onUserEmailChange={formActions.updateUserEmail}
        />
      )}
      {step === 1 && (
        <UserLocationForm
          userDetail={formState.userDetail}
          onSubmit={onUserLocationSubmit}
          onReset={onFormReset}
          onUserCityChange={formActions.updateUserCity}
          onUserCountryChange={formActions.updateUserCountry}
        />
      )}
    </div>
  );
};
