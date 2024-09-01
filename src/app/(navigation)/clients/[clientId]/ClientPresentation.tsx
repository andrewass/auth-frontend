import {ClientDetailed} from "@/app/(navigation)/clients/types";
import ClientDescription from "@/app/(navigation)/clients/[clientId]/cards/ClientDescription";
import ClientOrigins from "@/app/(navigation)/clients/[clientId]/cards/ClientOrigins";
import ClientId from "@/app/(navigation)/clients/[clientId]/cards/ClientId";
import RedirectUris from "@/app/(navigation)/clients/[clientId]/cards/RedirectUris";
import ClientSecret from "@/app/(navigation)/clients/[clientId]/cards/ClientSecret";
import ClientName from "@/app/(navigation)/clients/[clientId]/cards/ClientName";

const ClientPresentation = ({client}: { client: ClientDetailed }) => {
    return (
        <div className="grid grid-cols-2 gap-4 w-5/6">
            <ClientName clientName={client.name}/>
            <ClientDescription/>
            <ClientId clientId={client.clientId}/>
            <ClientSecret clientSecret={client.clientSecret} clientId={client.clientId}
                          clientSecretIssuedAt={client.clientSecretIssuedAt}/>
            <ClientOrigins originList={[client.uri]}/>
            <RedirectUris/>
        </div>
    );
}

export default ClientPresentation;