import {ClientDetailed, toDetailedClient} from "@/app/(navigation)/clients/types";
import ClientPresentation from "@/app/(navigation)/clients/[clientId]/ClientPresentation";

const getClient = async (clientId: string): Promise<ClientDetailed> => {
    const params = new URLSearchParams({client_id: clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/client?${params}`);
    const client = await response.json();

    return toDetailedClient(client);
}

const ClientDetails = async ({params}: { params: { clientId: string } }) => {
    const client = await getClient(params.clientId);
    return (
        <ClientPresentation client={client}/>
    );
}

export default ClientDetails;