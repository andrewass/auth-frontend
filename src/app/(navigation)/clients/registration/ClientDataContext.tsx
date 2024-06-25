"use client";

import {createContext, ReactNode, useContext, useState} from "react";

interface ClientDataContextType {
    currentStep: number
    isFinalStep: boolean
    navigateNext: () => void
    navigatePrevious: () => void
}

interface Props {
    children: ReactNode
}

const ClientDataContext = createContext<ClientDataContextType | undefined>(undefined);

export const ClientDataProvider = ({children}: Props) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isFinalStep, setIsFinalStep] = useState<boolean>(false);

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

    return (
        <ClientDataContext.Provider value={{currentStep, isFinalStep, navigateNext, navigatePrevious}}>
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