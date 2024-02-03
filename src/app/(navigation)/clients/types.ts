export interface Client {
    name: string
    clientId: string
}


const toClient = (data: any): Client => {
    return {
        name: data["client_name"],
        clientId: data["client_id"]
    };
}

export const toClients = (clients: any) : Client[] => {
    return clients.map((client: any) => toClient(client))
}