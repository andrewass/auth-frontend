import type { RedirectAndEndpointSettingsData } from "@/app/clients/registration/useClientRegistrationForm";
import BadgesGroup from "@/app/components/input/BadgesGroup";
import MultiValueInput from "@/app/components/input/MultiValueInput";

const allowedGrantTypes: Record<string, string> = {
	authorization_code: "Authorization code",
	device_code: "Device code",
	client_credentials: "Client credentials",
	refresh_token: "Refresh token",
	pkce: "PKCE",
};

interface Props {
	data: RedirectAndEndpointSettingsData;
	onChange: (data: Partial<RedirectAndEndpointSettingsData>) => void;
}

export default function RedirectAndEndpointSettings({ data, onChange }: Props) {
	function updateRedirectUris(validUris: string[]) {
		onChange({ redirectUris: validUris });
	}

	function updatePostLogoutRedirectUris(validUris: string[]) {
		onChange({ postLogoutRedirectUris: validUris });
	}

	function updateAllowedGrantTypes(selectedTypes: string[]) {
		onChange({ allowedGrantTypes: selectedTypes });
	}

	return (
		<fieldset className="fieldset gap-5">
			<div className="flex flex-col gap-1">
				<label htmlFor="redirectUris" className="label">
					Redirect URIs
				</label>
				<MultiValueInput
					items={data.redirectUris}
					onChange={updateRedirectUris}
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="postLogoutRedirectUris" className="label">
					Post logout redirect URIs
				</label>
				<MultiValueInput
					items={data.postLogoutRedirectUris}
					onChange={updatePostLogoutRedirectUris}
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="tokenEndpointAuthMethod" className="label">
					Token endpoint auth method
				</label>
				<select
					defaultValue="Client secret basic"
					className="select"
					onChange={(e) =>
						onChange({ tokenEndpointAuthMethod: e.target.value })
					}
				>
					<option value="client_secret_basic">Client secret basic</option>
					<option value="client_secret_post">Client secret post</option>
					<option value="private_key_jwt">Private key JWT</option>
					<option value="client_secret_jwt">Client secret JWT</option>
					<option value="none">None</option>
				</select>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="allowedGrantTypes" className="label">
					Select allowed grant types
				</label>
				<BadgesGroup
					items={allowedGrantTypes}
					selected={data.allowedGrantTypes}
					onChange={updateAllowedGrantTypes}
				/>
			</div>
		</fieldset>
	);
}
