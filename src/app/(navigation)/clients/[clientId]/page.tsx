import ClientPresentation from "@/app/(navigation)/clients/[clientId]/ClientPresentation";
import {toDetailedClient} from "@/app/(navigation)/clients/types";


export default async function ClientDetails({params}: { params: { clientId: string } }) {
    const urlParams = new URLSearchParams({client_id: params.clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/client?${urlParams}`, {
        cache: "no-store"
    });
    const serverClient = await response.json();
    const client = toDetailedClient(serverClient);

    return (
        <ClientPresentation client={client}/>
    );
}