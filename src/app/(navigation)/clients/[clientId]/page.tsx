import ClientPresentation from "@/app/(navigation)/clients/[clientId]/ClientPresentation";
import {toDetailedClient} from "@/app/(navigation)/clients/types";
import Link from "next/link";


export default async function ClientDetailsPage({params}: { params: { clientId: string } }) {
    const {clientId} = params;
    const urlParams = new URLSearchParams({client_id: clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/client?${urlParams}`, {
        cache: "no-store"
    });
    const client = await toDetailedClient(response);

    return (
        <div>
            <ClientPresentation client={client}/>
            <Link href={`/clients/${client.clientId}/modification`}>
                <button className="btn">Edit</button>
            </Link>
        </div>
    );
}