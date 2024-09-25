import {ChangeEvent, useState} from "react";

interface Props {
    placeholder: string;
    value: string | undefined
    onChange: (event:
                   ChangeEvent<HTMLInputElement> |
                   ChangeEvent<HTMLTextAreaElement> |
                   ChangeEvent<HTMLSelectElement>
    ) => void
}

export default function FloatingLabelTextArea({placeholder, value}: Props) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [hasValue, setHasValue] = useState<boolean>(value !== undefined);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = () => {
        setIsFocused(false);
        setHasValue(value !== undefined);
    };

    return (
        <div className="relative w-full mb-6">
            <div
                className={`absolute left-3 px-1 transition-all duration-200 ease-in-out
                ${isFocused || hasValue ? 'text-xs -translate-y-3.5' : 'text-base top-1/2 -translate-y-1/2'}
                bg-base-100`}
            >
                {placeholder}
            </div>
            <textarea
                value={value || ""}
                className="textarea textarea-bordered w-full px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary bg-base-100"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

