import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";

const ButtonGroup = () => {
    const {isFinalStep, navigateNext, currentStep, navigatePrevious} = useClientDataContext();

    return (
        <div className="flex justify-between">
            {currentStep > 0 &&
                <div>
                    <button className="btn btn-primary" onClick={navigatePrevious}>
                        Previous
                    </button>
                </div>
            }
            <div className="ml-auto">
                <button className="btn btn-primary" onClick={navigateNext}>
                    {isFinalStep ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default ButtonGroup;