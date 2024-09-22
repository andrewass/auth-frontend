interface Props {
    navigatePrevious: () => void
    navigateNext: () => void
    currentStep: number
    submitClientFormData: () => void
}

export default function ClientFormButtons(
    {
        navigatePrevious, submitClientFormData,
        navigateNext, currentStep
    }: Props
) {
    const isFinalStep = currentStep === 3

    return (
        <div className="flex justify-between">
            {currentStep > 1 &&
                <div>
                    <button className="btn btn-primary" onClick={navigatePrevious}>
                        Previous
                    </button>
                </div>
            }
            <div className="ml-auto">
                <button className="btn btn-primary"
                        onClick={isFinalStep ? submitClientFormData : navigateNext}
                >
                    {isFinalStep ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
}