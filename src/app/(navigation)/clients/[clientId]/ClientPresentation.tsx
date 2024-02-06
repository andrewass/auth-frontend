import {ClientDetailed, toDetailedClient} from "@/app/(navigation)/clients/types";
import ClientDescription from "@/app/(navigation)/clients/[clientId]/cards/ClientDescription";
import Origin from "@/app/(navigation)/clients/[clientId]/cards/Origin";
import ClientId from "@/app/(navigation)/clients/[clientId]/cards/ClientId";
import RedirectUri from "@/app/(navigation)/clients/[clientId]/cards/RedirectUri";
import ClientSecret from "@/app/(navigation)/clients/[clientId]/cards/ClientSecret";




const ClientPresentation = ({client}: { client: ClientDetailed }) => {
    return (
        <div className="grid grid-cols-2 gap-4 m-4">
            <ClientDescription/>
            <Origin/>
            <ClientId/>
            <ClientSecret/>
            <RedirectUri/>
        </div>
    );
}

export default ClientPresentation;