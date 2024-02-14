import {ClientDetailed} from "@/app/(navigation)/clients/types";
import ClientDescription from "@/app/(navigation)/clients/[clientId]/cards/ClientDescription";
import Origins from "@/app/(navigation)/clients/[clientId]/cards/Origins";
import ClientId from "@/app/(navigation)/clients/[clientId]/cards/ClientId";
import RedirectUri from "@/app/(navigation)/clients/[clientId]/cards/RedirectUri";
import ClientSecret from "@/app/(navigation)/clients/[clientId]/cards/ClientSecret";

const ClientPresentation = ({client}: { client: ClientDetailed }) => {
    return (
        <div className="grid grid-cols-2 gap-4 m-4">
            <ClientDescription/>
            <Origins originList={[client.uri]}/>
            <ClientId clientId={client.clientId}/>
            <ClientSecret clientSecret={client.clientSecret} clientId={client.clientId}
                          clientSecretIssuedAt={client.clientSecretIssuedAt}/>
            <RedirectUri/>
        </div>
    );
}

export default ClientPresentation;