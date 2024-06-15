import ClientsTable from "@/app/(navigation)/clients/ClientsTable";
import {ClientSimple, toSimpleClients} from "@/app/(navigation)/clients/types";
import {getServerSessionData} from "@/app/session/sessionData";
import Link from "next/link";

async function getClients(): Promise<ClientSimple[]> {
    const sessionData = await getServerSessionData();
    const params = new URLSearchParams({email: sessionData.email});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/all?${params}`, {
        cache: "no-store"
    });
    const clients = await response.json();

    return toSimpleClients(clients);
}

export default async function Clients() {
    const clients = await getClients();

    return (
        <div className="grid">
            <p>Clients : </p>
            {clients.length > 0
                ? <ClientsTable/>
                : <p>-- No clients registered --</p>
            }
            <Link href={"/clients/registration"} passHref>
                <button className="btn">Add Client</button>
            </Link>
        </div>
    );
}
