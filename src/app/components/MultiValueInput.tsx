import type React from "react";
import { useState } from "react";

interface Props {
	items: string[];
	label?: string;
	placeholderValue?: string;
	onChange: (items: string[]) => void;
	validate?: (value: string) => string | null;
	className?: string;
}

export default function MultiValueInput({
	items,
	placeholderValue = "Enter value and press Enter or comma",
	onChange,
	validate,
}: Props) {
	const [inputValue, setInputValue] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	function deleteItem(itemToDelete: string) {
		onChange(items.filter((item) => item !== itemToDelete));
	}

	function addItem(itemToAdd: string) {
		const trimmedItem = itemToAdd.slice(0, -1).trim();
		if (!trimmedItem) {
			return;
		}
		if (items.includes(trimmedItem)) {
			setError("Item already exists");
			return;
		}
		if (validate) {
			const validationError = validate(trimmedItem);
			if (validationError) {
				setError(validationError);
				return;
			}
		}
		onChange([...items, trimmedItem]);
		setInputValue("");
	}

	function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		setError(null);

		if (value.endsWith(",")) {
			addItem(value);
		} else {
			setInputValue(value);
		}
	}

	return (
		<div>
			<input
				type="text"
				placeholder={placeholderValue}
				className="input input-bordered"
				value={inputValue}
				onChange={onInputChange}
			/>

			{error && (
				<label htmlFor="multiValueInputError" className="label">
					<span className="label-text-alt text-error">{error}</span>
				</label>
			)}

			{items.length > 0 && (
				<div className="flex flex-wrap gap-2 mt-3 w-200">
					{items.map((item) => (
						<div className="badge badge-primary" key={item}>
							<span className="text-sm">{item}</span>
							<button
								type="button"
								onClick={() => deleteItem(item)}
								className="inline-flex items-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-4 w-4 stroke-current"
								>
									<title>Delete Item</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
