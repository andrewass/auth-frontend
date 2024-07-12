"use client";

import {createContext, ReactNode, useContext, useState} from "react";
import {Step1FormData, Step2FormData} from "@/app/(navigation)/clients/registration/ClientFormData";
import {registerClient} from "@/app/(navigation)/clients/registration/actions";
import {grantTypes} from "@/app/(navigation)/clients/registration/ClientRegistrationStep2";
import {CheckboxItem} from "@/app/components/CheckboxGroup";

interface ClientDataContextType {
    currentStep: number
    isFinalStep: boolean
    navigateNext: () => void
    navigatePrevious: () => void
    step1FormData: Step1FormData
    updateStep1FormData: (updatedForm: Step1FormData) => void
    step2FormData: Step2FormData
    updateStep2FormData: (updatedForm: Step2FormData) => void
}

interface Props {
    children: ReactNode
}

const ClientDataContext = createContext<ClientDataContextType | undefined>(undefined);

function createGrantTypeCheckboxes(): CheckboxItem[] {
    return Object.entries(grantTypes).map(([key, value]) => (
        {
            code: key,
            decode: value,
            checked: false
        }
    ));
}

export function ClientDataProvider({children}: Props) {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isFinalStep, setIsFinalStep] = useState<boolean>(false);
    const [step1FormData, setStep1FormData] = useState<Step1FormData>(
        {clientDescription: undefined, clientName: undefined, clientUrl: undefined, clientType: undefined}
    );
    const [step2FormData, setStep2FormData] = useState<Step2FormData>(
        {
            tokenEndpointAuthMethod: undefined,
            redirectUris: [],
            grantTypes: createGrantTypeCheckboxes()
        }
    );

    function navigateNext() {
        if (currentStep == 1) {
            setIsFinalStep(true)
        }
        setCurrentStep(currentStep + 1)
    }

    function navigatePrevious() {
        setCurrentStep(currentStep - 1);
        setIsFinalStep(false);
    }

    function updateStep1FormData(updatedForm: Step1FormData) {
        setStep1FormData(updatedForm);
    }

    function updateStep2FormData(updatedForm: Step2FormData) {
        setStep2FormData(updatedForm);
    }

    function submitClientRegistration() {
        registerClient(step1FormData)
            .catch(error => console.log(error))
    }

    return (
        <ClientDataContext.Provider value={{
            step1FormData, updateStep1FormData,
            step2FormData, updateStep2FormData,
            currentStep, isFinalStep,
            navigateNext, navigatePrevious
        }}>
            {children}
        </ClientDataContext.Provider>
    );
}

export function useClientDataContext(): ClientDataContextType {
    const context = useContext(ClientDataContext);
    if (!context) {
        throw new Error("useClientDataContext must be used within a ClientDataProvider");
    }
    return context;
}