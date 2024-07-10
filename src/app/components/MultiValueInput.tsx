import React, {useState} from "react";

interface Props {
    placeholderValue: string | undefined
    items: string[]
    updateRedirectUris: (uriList: string[]) => void
}

export default function MultiValueInput({
                                            items,
                                            placeholderValue,
                                            updateRedirectUris
                                        }: Props) {
    const [inputValue, setInputValue] = useState<string>("");

    function deleteItem(itemToDelete: string) {
        updateRedirectUris(items.filter(item => item !== itemToDelete))
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.endsWith(",")) {
            updateRedirectUris(items.concat(inputValue));
            setInputValue("");
        } else {
            setInputValue(event.target.value);
        }
    }

    return (
        <div>
            <input type="text" placeholder={placeholderValue} className="input input-bordered"
                   value={inputValue} onChange={handleInputChange}
            />
            <div className="grid grid-flow-col auto-cols-max mt-5 gap-10">
                {items.map(item =>
                    <div className="badge badge-primary gap-1" key={item}>
                        {item}
                        <svg onClick={() => deleteItem(item)}
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             className="inline-block h-4 w-4 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    )
}
