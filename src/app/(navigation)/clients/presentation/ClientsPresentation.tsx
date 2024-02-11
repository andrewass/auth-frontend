import {getServerSessionData} from "@/app/session/sessionData";
import ClientRow from "@/app/(navigation)/clients/presentation/ClientRow";
import {ClientSimple, toSimpleClients} from "@/app/(navigation)/clients/types";

const getClients = async (): Promise<ClientSimple[]> => {
    const sessionData = await getServerSessionData();
    const params = new URLSearchParams({email: sessionData.email});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/all?${params}`);
    const clients = await response.json();

    return toSimpleClients(clients);
}

export default async function ClientsPresentation() {
    const clients = await getClients();
    return (
        <div className="basis-1/2">
            <ul>
                {clients.map((client) =>
                    <ClientRow clientId={client.clientId} clientName={client.name} key={client.clientId}/>
                )}
            </ul>
        </div>
    );
}