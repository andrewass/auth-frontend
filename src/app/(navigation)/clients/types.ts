export interface ClientSimple {
    name: string
    clientId: string
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
}


export const toSimpleClient = (data: any): ClientSimple => {
    return {
        name: data["client_name"],
        clientId: data["client_id"]
    };
}

export const toDetailedClient = (data: any): ClientDetailed => {
    return {
        email: data["user_email"],
        redirectUris: data["redirect_uri"],
        uri: data["client_uri"],
        name: data["client_name"],
        clientId: data["client_id"],
        clientSecret: data["client_secret"],
        clientIdIssuedAt: data["client_id_issued_at"],
        clientSecretIssuedAt: data["client_secret_issued_at"]
    };
}

export const toSimpleClients = (clients: any) : ClientSimple[] => {
    return clients.map((client: any) => toSimpleClient(client))
}
