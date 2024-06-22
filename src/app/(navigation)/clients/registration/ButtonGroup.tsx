interface Props {
    navigateNext: () => void;
    cancelRegistration: () => void;
    isFinalStep: boolean;
}

const ButtonGroup = ({isFinalStep, cancelRegistration, navigateNext}: Props) => {
    return (
        <div className="flex gap-10">
            <button className="btn btn-primary" onClick={cancelRegistration}>
                Cancel
            </button>
            <button className="btn btn-primary" onClick={navigateNext}>
                {isFinalStep ? "Submit" : "Next"}
            </button>
        </div>
    )
}

export default ButtonGroup;