import {ClientDataProvider} from "@/app/(navigation)/clients/registration/ClientDataContext";
import ClientRegistration from "@/app/(navigation)/clients/registration/ClientRegistration";


export default function ClientRegistrationPage() {

    return (
        <ClientDataProvider>
            <ClientRegistration/>
        </ClientDataProvider>
    );

}