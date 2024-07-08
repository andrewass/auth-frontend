"use client";

import ClientRegistrationStepDisplay from "@/app/(navigation)/clients/registration/ClientRegistrationStepDisplay";
import ButtonGroup from "@/app/(navigation)/clients/registration/ButtonGroup";
import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";
import ClientRegistrationStep2 from "@/app/(navigation)/clients/registration/ClientRegistrationStep2";
import ClientRegistrationStep3 from "@/app/(navigation)/clients/registration/ClientRegistrationStep3";
import ClientRegistrationStep1 from "@/app/(navigation)/clients/registration/ClientRegistrationStep1";

const ClientRegistration = () => {
    const {currentStep} = useClientDataContext();

    const steps = [
        <ClientRegistrationStep1 key={0}/>,
        <ClientRegistrationStep2 key={1}/>,
        <ClientRegistrationStep3 key={3}/>
    ];

    return (
        <div className="flex flex-col gap-14 w-2/3">
            <div className="w-full">
                <ClientRegistrationStepDisplay/>
            </div>
            <div className="w-2/3 h-2/5 mx-auto">
                {steps[currentStep]}
            </div>
            <div className="w-2/3 mx-auto">
                <ButtonGroup/>
            </div>
        </div>
    );
}

export default ClientRegistration;