import ClientsTable from "@/app/(navigation)/clients/table/ClientsTable";
import {toSimpleClients} from "@/app/(navigation)/clients/types";
import {getServerSessionData} from "@/app/session/sessionData";
import Link from "next/link";

export default async function ClientsPage() {
    const sessionData = await getServerSessionData();
    const params = new URLSearchParams({email: sessionData.email});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients?${params}`, {
        cache: "no-store"
    });
    const clients = await response.json();
    const mappedClients = toSimpleClients(clients);

    return (
        <div className="flex flex-col gap-12">
            <div>
                <ClientsTable clients={mappedClients}/>
            </div>
            <div>
                <Link href={"/clients/registration"} passHref>
                    <button className="btn">Add Client</button>
                </Link>
            </div>
        </div>
    );
}
