import ClientForm from "@/app/(navigation)/clients/form/ClientForm";
import {toDetailedClient} from "@/app/(navigation)/clients/types";

export default async function ClientModificationPage({params}: { params: { clientId: string } }) {
    const {clientId} = params;
    const urlParams = new URLSearchParams({client_id: clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/client?${urlParams}`, {
        cache: "no-store"
    });
    const client = await toDetailedClient(response);

    return (
        <ClientForm submitClientUrl={"placeholder text"} client={client}/>
    );
}