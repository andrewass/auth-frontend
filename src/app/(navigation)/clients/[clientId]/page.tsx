import ClientPresentation from "@/app/(navigation)/clients/[clientId]/ClientPresentation";
import {toDetailedClient} from "@/app/(navigation)/clients/types";
import {Suspense} from "react";


interface Props {
    clientId: string
}

async function ClientDetails({clientId}: Props) {
    const urlParams = new URLSearchParams({client_id: clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/client?${urlParams}`, {
        cache: "no-store"
    });
    const client = await toDetailedClient(response);

    return (
        <ClientPresentation client={client}/>
    );
}


export default function ClientDetailsPage({params}: { params: { clientId: string } }) {
    const {clientId} = params;

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <ClientDetails clientId={clientId}/>
            </Suspense>
        </div>
    );

}