"use client";

import ClientFormStepDisplay from "@/app/(navigation)/clients/form/ClientFormStepDisplay";
import ClientFormStep2 from "@/app/(navigation)/clients/form/ClientFormStep2";
import ClientFormStep3 from "@/app/(navigation)/clients/form/ClientFormStep3";
import ClientFormStep1 from "@/app/(navigation)/clients/form/ClientFormStep1";
import {ClientDetailed} from "@/app/(navigation)/clients/types";
import {useState} from "react";
import ClientFormButtons from "@/app/(navigation)/clients/form/ClientFormButtons";
import ClientStep1FormData from "@/app/(navigation)/clients/form/ClientStep1FormData";
import ClientStep2FormData from "@/app/(navigation)/clients/form/ClientStep2FormData";

interface Props {
    client?: ClientDetailed
    submitClientUrl: string
}

export default function ClientForm({client}: Props) {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [step1FormData, setStep1FormData] = useState<ClientStep1FormData>(new ClientStep1FormData(client));
    const [step2FormData, setStep2FormData] = useState<ClientStep2FormData>(new ClientStep2FormData(client));

    const steps = [
        <ClientFormStep1 key={0} formData={step1FormData} updateFormData={setStep1FormData}/>,
        <ClientFormStep2 key={1} formData={step2FormData} updateFormData={setStep2FormData}/>,
        <ClientFormStep3 key={3}/>
    ];

    function navigateNext() {
        setCurrentStep(currentStep + 1);
    }

    function navigatePrevious() {
        setCurrentStep(currentStep - 1);
    }

    function submitClientFormData() {
    }

    return (
        <div className="flex flex-col gap-14 w-2/3">
            <div className="w-full">
                <ClientFormStepDisplay currentStep={currentStep}/>
            </div>
            <div className="w-2/3 h-2/5 mx-auto">
                {steps[currentStep]}
            </div>
            <div className="w-2/3 mx-auto">
                <ClientFormButtons
                    currentStep={currentStep}
                    navigateNext={navigateNext}
                    navigatePrevious={navigatePrevious}
                    submitClientFormData={submitClientFormData}
                />
            </div>
        </div>
    );
}