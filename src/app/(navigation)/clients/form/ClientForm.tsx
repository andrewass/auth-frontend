"use client";

import ClientFormStepDisplay from "@/app/(navigation)/clients/form/ClientFormStepDisplay";
import ButtonGroup from "@/app/(navigation)/clients/registration/ButtonGroup";
import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";
import ClientFormStep2 from "@/app/(navigation)/clients/form/ClientFormStep2";
import ClientFormStep3 from "@/app/(navigation)/clients/form/ClientFormStep3";
import ClientFormStep1 from "@/app/(navigation)/clients/form/ClientFormStep1";

const ClientForm = () => {
    const {currentStep} = useClientDataContext();

    const steps = [
        <ClientFormStep1 key={0}/>,
        <ClientFormStep2 key={1}/>,
        <ClientFormStep3 key={3}/>
    ];

    return (
        <div className="flex flex-col gap-14 w-2/3">
            <div className="w-full">
                <ClientFormStepDisplay/>
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

export default ClientForm;