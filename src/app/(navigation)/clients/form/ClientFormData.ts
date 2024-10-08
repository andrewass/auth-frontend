import {CheckboxItem} from "@/app/components/CheckboxGroup";

export interface Step1FormData {
    clientName: string | undefined
    clientDescription: string | undefined
    clientUrl: string | undefined
    clientType: string | undefined
}

export interface Step2FormData {
    redirectUris: string[]
    grantTypes: CheckboxItem[]
    tokenEndpointAuthMethod: string | undefined
}