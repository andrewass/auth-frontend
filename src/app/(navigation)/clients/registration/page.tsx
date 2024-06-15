import ClientRegistrationForm from "@/app/(navigation)/clients/registration/ClientRegistrationForm";


export default function ClientRegistration(){

    return(
        <div className="flex flex-col items-center ">
            
            <h3>New Client Information</h3>
            <ClientRegistrationForm/>
        </div>
    )

}