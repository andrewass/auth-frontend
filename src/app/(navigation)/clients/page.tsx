import ClientsTable from "@/app/(navigation)/clients/ClientsTable";
import {toSimpleClients} from "@/app/(navigation)/clients/types";
import {getServerSessionData} from "@/app/session/sessionData";
import Link from "next/link";
import {Suspense} from "react";

async function Clients() {
    const sessionData = await getServerSessionData();
    const params = new URLSearchParams({email: sessionData.email});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/all?${params}`, {
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

export default async function ClientsPage() {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Clients/>
            </Suspense>
        </div>
    );
}
