import { useState } from "react";

export interface GeneralSettingsData {
	clientName: string;
	applicationType: string;
	description: string;
	logoUrl: string;
}

export interface ClientRegistrationFormData {
	generalSettings: GeneralSettingsData;
}

export default function useClientRegistrationForm() {
	const [formData, setFormData] = useState<ClientRegistrationFormData>({
		generalSettings: {
			clientName: "",
			applicationType: "",
			description: "",
			logoUrl: "",
		},
	});

	function updateGeneralSettings(data: Partial<GeneralSettingsData>) {
		setFormData((prev) => ({
			generalSettings: { ...prev.generalSettings, ...data },
		}));
	}

	return { formData, updateGeneralSettings };
}
