
export interface Step1FormData{
    clientName: string | undefined
    clientDescription: string | undefined
    clientUrl: string | undefined
}

export interface Step2FormData{
    redirectUris: string[]
    tokenEndpointAuthMethod: string
}