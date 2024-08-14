import {ClientSimple} from "@/app/(navigation)/clients/types";
import ClientRow from "@/app/(navigation)/clients/table/ClientRow";

interface Props {
    clients: ClientSimple[]
}

function ClientTable({clients}: Props) {
    return (
        <table className="table-lg">
            <thead>
            <tr>
                <th>Client Name</th>
                <th>Client Id</th>
                <th>Client Secret</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {clients.map((client, index) =>
                <ClientRow key={client.clientId} client={client}/>
            )}
            </tbody>
        </table>
    )
}

export default async function ClientsTable({clients}: Props) {
    return (
        <div>
            {clients.length === 0
                ? <p>No clients registered</p>
                : <ClientTable clients={clients}/>
            }
        </div>
    );
}