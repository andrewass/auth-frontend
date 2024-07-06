import ClientRow from "@/app/(navigation)/clients/ClientRow";
import {ClientSimple} from "@/app/(navigation)/clients/types";

interface Props {
    clients: ClientSimple[]
}

const clientTable = (clients: ClientSimple[]) => {
    return (
        clients.map((client) => (
            <li key={client.clientId}>
                <ClientRow clientId={client.clientId} clientName={client.name} key={client.clientId}/>
            </li>
        )))
}

export default async function ClientsTable({clients}: Props) {
    return (
        <div>
            <h3>Clients : </h3>
            {clients.length === 0
                ? <p>No clients registered</p>
                : clientTable(clients)
            }
        </div>
    );
}