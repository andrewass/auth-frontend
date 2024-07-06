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
    const clients: ClientSimple[] = await getClients();

    return (
        <div className="flex flex-col gap-12">
            <div>
                <ClientsTable clients={clients}/>
            </div>
            <div>
                <Link href={"/clients/registration"} passHref>
                    <button className="btn">Add Client</button>
                </Link>
            </div>
        </div>
    );
}
