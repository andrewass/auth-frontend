import ClientRegistration from "@/app/(navigation)/clients/registration/ClientRegistration";
import ClientsPresentation from "@/app/(navigation)/clients/presentation/ClientsPresentation";


const Clients = () => {

    return (
        <div className="grid grid-cols-2">
            <ClientRegistration/>
            <ClientsPresentation/>
        </div>
    );
}

export default Clients;