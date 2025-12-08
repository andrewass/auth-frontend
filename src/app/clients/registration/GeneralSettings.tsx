import type { GeneralSettingsData } from "@/app/clients/registration/useClientRegistrationForm";

interface Props {
	data: GeneralSettingsData;
	onChange: (data: Partial<GeneralSettingsData>) => void;
}

export default function GeneralSettings({ data, onChange }: Props) {
	return (
		<div className="flex flex-col gap-3">
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Application type</legend>
				<select
					defaultValue="Web application"
					className="select"
					onChange={(e) => onChange({ applicationType: e.target.value })}
				>
					<option>Web application</option>
					<option>Single-page application</option>
					<option>Native/Mobile</option>
					<option>Machine-to-Machine</option>
				</select>
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Name</legend>
				<input
					type="text"
					value={data.clientName}
					required
					onChange={(e) => onChange({ clientName: e.target.value })}
					className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
				/>
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Description</legend>
				<textarea
					value={data.description}
					onChange={(e) => onChange({ description: e.target.value })}
					className="textarea h-24 w-full max-w-xs sm:max-w-md lg:max-w-lg"
					placeholder="Bio"
				></textarea>
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Logo URL</legend>
				<input
					type="url"
					value={data.logoUrl}
					placeholder="https://"
					onChange={(e) => onChange({ logoUrl: e.target.value })}
					className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
				/>
			</fieldset>
		</div>
	);
}
