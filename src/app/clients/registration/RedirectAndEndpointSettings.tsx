import type { RedirectAndEndpointSettingsData } from "@/app/clients/registration/useClientRegistrationForm";
import MultiValueInput from "@/app/components/MultiValueInput";

interface Props {
	data: RedirectAndEndpointSettingsData;
	onChange: (data: Partial<RedirectAndEndpointSettingsData>) => void;
}

export default function RedirectAndEndpointSettings({ data, onChange }: Props) {
	function updateRedirectUris(validUris: string[]) {
		onChange({ redirectUris: validUris });
	}

	return (
		<fieldset className="fieldset">
			<label htmlFor="redirectUris" className="label">
				Redirect URIs
			</label>
			<MultiValueInput
				items={data.redirectUris}
				onChange={updateRedirectUris}
			/>
		</fieldset>
	);
}
