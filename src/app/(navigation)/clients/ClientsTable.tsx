import {ClientSimple} from "@/app/(navigation)/clients/types";
import Link from "next/link";

interface Props {
    clients: ClientSimple[]
}


function ClientTable({clients}: Props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Client Name</th>
                <th>Client Id</th>
                <th>Client Secret</th>
            </tr>
            </thead>
            <tbody>
            {clients.map((client, index) =>
                <tr key={client.clientId}>
                    <td>
                        <Link href={`/clients/${client.clientId}`}>{client.name}</Link>
                    </td>
                    <td>{client.clientId}</td>
                    <td>{client.clientSecret}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default async function ClientsTable({clients}: Props) {
    return (
        <div>
            <h3>Clients : </h3>
            {clients.length === 0
                ? <p>No clients registered</p>
                : <ClientTable clients={clients}/>
            }
        </div>
    );
}