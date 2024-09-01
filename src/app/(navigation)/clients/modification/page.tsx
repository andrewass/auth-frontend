import {ClientDataProvider} from "@/app/(navigation)/clients/registration/ClientDataContext";
import ClientForm from "@/app/(navigation)/clients/form/ClientForm";

export default function ClientModificationPage() {

    return (
        <ClientDataProvider>
            <ClientForm/>
        </ClientDataProvider>
    );
}