"use client";

import {createContext, ReactNode, useContext, useState} from "react";

interface ClientDataContextType {
    currentStep: number
    isFinalStep: boolean
    navigateNext: () => void
    navigatePrevious: () => void
    step1FormData: Step1FormData | undefined
    updateStep1FormData: (updatedForm: Step1FormData) => void
}

interface Props {
    children: ReactNode
}

const ClientDataContext = createContext<ClientDataContextType | undefined>(undefined);

export const ClientDataProvider = ({children}: Props) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isFinalStep, setIsFinalStep] = useState<boolean>(false);
    const [step1FormData, setStep1FormData] = useState<Step1FormData | undefined>(undefined);
    const [step2FormData, setStep2FormData] = useState<Step2FormData | undefined>(undefined);

    const navigateNext = () => {
        if (currentStep == 1) {
            setIsFinalStep(true)
        }
        setCurrentStep(currentStep + 1)
    }

    const navigatePrevious = () => {
        setCurrentStep(currentStep - 1)
        setIsFinalStep(false)
    }


    const updateStep1FormData = (updatedForm: Step1FormData) => {
        setStep1FormData(updatedForm);
    }


    return (
        <ClientDataContext.Provider value={{
            step1FormData, updateStep1FormData,
            currentStep, isFinalStep,
            navigateNext, navigatePrevious
        }}>
            {children}
        </ClientDataContext.Provider>
    );
}

export const useClientDataContext = (): ClientDataContextType => {
    const context = useContext(ClientDataContext);
    if (!context) {
        throw new Error("useClientDataContext must be used within a ClientDataProvider");
    }
    return context;
}