"use client";

import ClientRegistrationStep1 from "@/app/(navigation)/clients/registration/ClientRegistrationStep1";
import ClientRegistrationStepDisplay from "@/app/(navigation)/clients/registration/ClientRegistrationStepDisplay";
import {useState} from "react";
import ButtonGroup from "@/app/(navigation)/clients/registration/ButtonGroup";

const RightMenu = () => {

    const [currentStep, setCurrentStep] = useState<number>(1);

    const navigateNext = () => {

    }
    
    return (
        <div className="flex flex-col gap-14">
            <ClientRegistrationStepDisplay currentStep={1}/>
            <ClientRegistrationStep1/>
            <ButtonGroup navigateNext={navigateNext}/>
        </div>
    );
}

export default RightMenu;