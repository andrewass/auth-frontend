import type { GeneralSettingsData } from "@/app/clients/registration/useClientRegistrationForm";

interface Props {
	data: GeneralSettingsData;
	onChange: (data: Partial<GeneralSettingsData>) => void;
}

export default function GeneralSettings({ data, onChange }: Props) {
	return (
		<fieldset className="fieldset">
			<label htmlFor="applicationType" className="label">
				Application type
			</label>
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
			<label htmlFor="clientName" className="label">
				Client name
			</label>
			<input
				type="text"
				value={data.clientName}
				required
				onChange={(e) => onChange({ clientName: e.target.value })}
				className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
			/>
			<label htmlFor="logoUrl" className="label">
				Logo URL
			</label>
			<input
				type="url"
				value={data.logoUrl}
				placeholder="https://"
				onChange={(e) => onChange({ logoUrl: e.target.value })}
				className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
			/>
			<label htmlFor="description" className="label">
				Description
			</label>
			<textarea
				value={data.description}
				onChange={(e) => onChange({ description: e.target.value })}
				className="textarea h-24 w-full max-w-xs sm:max-w-md lg:max-w-lg"
			/>
		</fieldset>
	);
}
