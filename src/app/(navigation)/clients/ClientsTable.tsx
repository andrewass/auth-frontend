import {getServerSessionData} from "@/app/session/sessionData";
import ClientRow from "@/app/(navigation)/clients/ClientRow";
import {ClientSimple, toSimpleClients} from "@/app/(navigation)/clients/types";

const getClients = async (): Promise<ClientSimple[]> => {
    const sessionData = await getServerSessionData();
    const params = new URLSearchParams({email: sessionData.email});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/all?${params}`, {
        cache: "no-store"
    });
    const clients = await response.json();

    return toSimpleClients(clients);
}

export default async function ClientsTable() {
    const clients = await getClients();

    return (
        <div>
            <div className="basis-1/2">
                <ul>
                    {clients.map((client) => (
                        <li key={client.clientId}>
                            <ClientRow clientId={client.clientId} clientName={client.name} key={client.clientId}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}