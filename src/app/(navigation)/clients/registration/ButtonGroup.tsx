import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";

const ButtonGroup = () => {
    const {isFinalStep, navigateNext, currentStep, navigatePrevious} = useClientDataContext();

    return (
        <div className="flex gap-10">
            {currentStep > 0 &&
                <button className="btn btn-primary" onClick={navigatePrevious}>
                    Previous
                </button>
            }
            <button className="btn btn-primary" onClick={navigateNext}>
                {isFinalStep ? "Submit" : "Next"}
            </button>
        </div>
    );
}

export default ButtonGroup;