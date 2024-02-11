"use client";

import {ClientDetailed} from "@/app/(navigation)/clients/types";
import ClientDescription from "@/app/(navigation)/clients/[clientId]/cards/ClientDescription";
import Origin from "@/app/(navigation)/clients/[clientId]/cards/Origin";
import ClientId from "@/app/(navigation)/clients/[clientId]/cards/ClientId";
import RedirectUri from "@/app/(navigation)/clients/[clientId]/cards/RedirectUri";
import ClientSecret from "@/app/(navigation)/clients/[clientId]/cards/ClientSecret";
import {useState} from "react";


const ClientPresentation = ({client}: { client: ClientDetailed }) => {
    const [clientSecret, setClientSecret] = useState<string>(client.clientSecret);

    return (
        <div className="grid grid-cols-2 gap-4 m-4">
            <ClientDescription/>
            <Origin/>
            <ClientId clientId={client.clientId} />
            <ClientSecret setClientSecret={setClientSecret} clientSecret={clientSecret}
                          clientId={client.clientId} clientSecretIssuedAt={client.clientSecretIssuedAt}/>
            <RedirectUri/>
        </div>
    );
}

export default ClientPresentation;