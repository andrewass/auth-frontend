interface Props {
	items: Record<string, string>;
	selected: string[];
	onChange: (items: string[]) => void;
}

export default function BadgesGroup({ items, selected, onChange }: Props) {
	function onBadgeSelect(key: string) {
		const newSelected = selected.includes(key)
			? selected.filter((item) => item !== key)
			: [...selected, key];
		onChange(newSelected);
	}

	return (
		<div className="flex flex-wrap gap-2 mt-3 w-200">
			{Object.entries(items).map(([key, label]) => (
				<button
					type="button"
					className={`btn btn-primary btn-sm rounded-full ${selected.includes(key) ? "" : "btn-outline"}`}
					key={key}
					onClick={() => onBadgeSelect(key)}
				>
					{label}
				</button>
			))}
		</div>
	);
}
