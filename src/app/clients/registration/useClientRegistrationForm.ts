import { useState } from "react";

export interface GeneralSettingsData {
	clientName: string;
	applicationType: string;
	description: string;
	logoUrl: string;
}

export interface RedirectAndEndpointSettingsData {
	redirectUris: string[];
	postLogoutRedirectUris: string[];
	tokenEndpointAuthMethod: string;
	allowedGrantTypes: string[];
}

export interface PermissionsAndSecuritySettingsData {
	allowedScopes: string[];
	refreshTokenSettings: RefreshTokenSettingsData;
	accessTokenSettings: AccessTokenSettingsData;
	pkceRequired: boolean;
	clientStatus: string;
}

export interface ClientRegistrationFormData {
	generalSettings: GeneralSettingsData;
	redirectAndEndpointSettings: RedirectAndEndpointSettingsData;
	permissionsAndSecuritySettings: PermissionsAndSecuritySettingsData;
}

interface RefreshTokenSettingsData {
	expiresIn: number;
	rotateToken: boolean;
}

interface AccessTokenSettingsData {
	expiresIn: number;
	tokenFormat: string;
	signingAlgorithm: string;
}

const DEFAULT_GENERAL_SETTINGS: GeneralSettingsData = {
	clientName: "",
	applicationType: "",
	description: "",
	logoUrl: "",
};

const DEFAULT_REFRESH_TOKEN_SETTINGS: RefreshTokenSettingsData = {
	expiresIn: 3600,
	rotateToken: false,
};

const DEFAULT_ACCESS_TOKEN_SETTINGS: AccessTokenSettingsData = {
	expiresIn: 3600,
	tokenFormat: "JWT",
	signingAlgorithm: "RS256",
};

const DEFAULT_REDIRECT_AND_ENDPOINT_SETTINGS: RedirectAndEndpointSettingsData =
	{
		redirectUris: [],
		postLogoutRedirectUris: [],
		tokenEndpointAuthMethod: "client_secret_basic",
		allowedGrantTypes: [],
	};

const DEFAULT_PERMISSIONS_AND_SECURITY_SETTINGS: PermissionsAndSecuritySettingsData =
	{
		allowedScopes: [],
		refreshTokenSettings: DEFAULT_REFRESH_TOKEN_SETTINGS,
		accessTokenSettings: DEFAULT_ACCESS_TOKEN_SETTINGS,
		pkceRequired: false,
		clientStatus: "active",
	};

const DEFAULT_FORM_DATA: ClientRegistrationFormData = {
	generalSettings: DEFAULT_GENERAL_SETTINGS,
	redirectAndEndpointSettings: DEFAULT_REDIRECT_AND_ENDPOINT_SETTINGS,
	permissionsAndSecuritySettings: DEFAULT_PERMISSIONS_AND_SECURITY_SETTINGS,
};

export default function useClientRegistrationForm() {
	const [formData, setFormData] =
		useState<ClientRegistrationFormData>(DEFAULT_FORM_DATA);

	function updateGeneralSettings(data: Partial<GeneralSettingsData>) {
		setFormData((prev) => ({
			...prev,
			generalSettings: { ...prev.generalSettings, ...data },
		}));
	}

	function updateRedirectAndEndpointSettings(
		data: Partial<RedirectAndEndpointSettingsData>,
	) {
		setFormData((prev) => ({
			...prev,
			redirectAndEndpointSettings: {
				...prev.redirectAndEndpointSettings,
				...data,
			},
		}));
	}

	function updatePermissionsAndSecuritySettings(
		data: Partial<PermissionsAndSecuritySettingsData>,
	) {
		setFormData((prev) => ({
			...prev,
			permissionsAndSecuritySettings: {
				...prev.permissionsAndSecuritySettings,
				...data,
			},
		}));
	}

	function resetForm() {
		setFormData(DEFAULT_FORM_DATA);
	}

	return {
		formData,
		updateGeneralSettings,
		updateRedirectEndpointSettings: updateRedirectAndEndpointSettings,
		updatePermissionsAndSecuritySettings,
		resetForm,
	};
}
