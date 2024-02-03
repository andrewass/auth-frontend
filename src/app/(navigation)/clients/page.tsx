import ClientRegistration from "@/app/(navigation)/clients/registration/ClientRegistration";
import ClientsPresentation from "@/app/(navigation)/clients/presentation/ClientsPresentation";


const Clients = () => {

    return (
        <div className="flex flex-col md:flex-row items-center">
            <ClientRegistration/>
            <ClientsPresentation/>
        </div>
    );
}

export default Clients;