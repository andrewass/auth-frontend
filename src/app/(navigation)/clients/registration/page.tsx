import {ClientDataProvider} from "@/app/(navigation)/clients/registration/ClientDataContext";
import ClientForm from "@/app/(navigation)/clients/form/ClientForm";


export default function ClientRegistrationPage() {

    return (
        <ClientDataProvider>
            <ClientForm/>
        </ClientDataProvider>
    );

}