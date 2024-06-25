import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";


const ClientRegistrationStepDisplay = () => {
    const {currentStep} = useClientDataContext();

    return (
        <ul className="steps mt-28">
            <li className={`step ${currentStep >= 0 ? 'step-primary' : ''}`}>Step 1</li>
            <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}>Step 2</li>
            <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}>Step 3</li>
        </ul>
    );
}

export default ClientRegistrationStepDisplay;