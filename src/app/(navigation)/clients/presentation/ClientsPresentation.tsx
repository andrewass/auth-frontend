import {getServerSessionData} from "@/app/session/sessionData";
import ClientRow from "@/app/(navigation)/clients/presentation/ClientRow";
import {Client, toClients} from "@/app/(navigation)/clients/types";

const getClients = async (): Promise<Client[]> => {
    const sessionData = await getServerSessionData();

    const params = new URLSearchParams({email: sessionData.email})

    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients?${params}`)
    const clients = await response.json()
    return toClients(clients)
}

const ClientsPresentation = async () => {
    const clients = await getClients();
    return (
        <div className="basis-1/2 bg-lime-500">
            <ul>
                {clients.map((client, index) => <ClientRow client={client} key={index} />)}
            </ul>
        </div>
    );
}

export default ClientsPresentation;