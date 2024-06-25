"use client";

import ClientRegistrationStep1 from "@/app/(navigation)/clients/registration/ClientRegistrationStep1";
import ClientRegistrationStepDisplay from "@/app/(navigation)/clients/registration/ClientRegistrationStepDisplay";
import ButtonGroup from "@/app/(navigation)/clients/registration/ButtonGroup";
import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";
import ClientRegistrationStep2 from "@/app/(navigation)/clients/registration/ClientRegistrationStep2";
import ClientRegistrationStep3 from "@/app/(navigation)/clients/registration/ClientRegistrationStep3";

const RightMenu = () => {
    const {currentStep} = useClientDataContext();

    const steps = [
        <ClientRegistrationStep1 key={0}/>,
        <ClientRegistrationStep2 key={1}/>,
        <ClientRegistrationStep3 key={3}/>
    ];

    console.log("Render and current step is " + currentStep);

    return (
        <div className="flex flex-col gap-14">
            <ClientRegistrationStepDisplay/>
            {steps[currentStep]}
            <ButtonGroup/>
        </div>
    );
}

export default RightMenu;