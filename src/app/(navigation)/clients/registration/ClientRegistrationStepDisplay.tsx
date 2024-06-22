

interface Props {
    currentStep: number
}


const ClientRegistrationStepDisplay = ({currentStep}: Props) => {

    return (
        <ul className="steps mt-28">
            <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}>Register</li>
            <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}>Choose plan</li>
            <li className={`step ${currentStep >= 3 ? 'step-primary' : ''}`}>Purchase</li>
            <li className={`step ${currentStep >= 4 ? 'step-primary' : ''}`}>Receive Product</li>
        </ul>
    );
}

export default ClientRegistrationStepDisplay;