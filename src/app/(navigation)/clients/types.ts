export interface ClientSimple {
    name: string
    clientId: string
    clientSecret: string
}

export interface ClientDetailed {
    name: string
    clientId: string
    clientSecret: string
    clientIdIssuedAt: string
    clientSecretIssuedAt: string
    uri: string
    redirectUris: string[]
    email: string
    applicationType: string
    description: string
    authMethod: string
    grantTypes: string[]

}


export const toSimpleClient = (data: any): ClientSimple => {
    return {
        name: data["client_name"],
        clientId: data["client_id"],
        clientSecret: data["client_secret"]
    };
}

export async function toDetailedClient(response: Response): Promise<ClientDetailed>{
    const data = await response.json();
    return {
        applicationType: data["application_type"],
        authMethod: data["auth_method"],
        grantTypes: data["grant_types"],
        email: data["user_email"],
        redirectUris: data["redirect_uri"],
        uri: data["client_uri"],
        name: data["client_name"],
        clientId: data["client_id"],
        clientSecret: data["client_secret"],
        clientIdIssuedAt: data["client_id_issued_at"],
        clientSecretIssuedAt: data["client_secret_issued_at"],
        description: data["client_description"]
    };
}

export const toSimpleClients = (clients: any) : ClientSimple[] => {
    return clients.map((client: any) => toSimpleClient(client))
}
