import ClientPresentation from "@/app/(navigation)/clients/[clientId]/ClientPresentation";
import {toDetailedClient} from "@/app/(navigation)/clients/types";


export default async function ClientDetailsPage({params}: { params: { clientId: string } }) {
    const {clientId} = params;
    const urlParams = new URLSearchParams({client_id: clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/client?${urlParams}`, {
        cache: "no-store"
    });
    const client = await toDetailedClient(response);

    return (
        <ClientPresentation client={client}/>
    );
}