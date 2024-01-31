import {getServerSessionData} from "@/app/session/sessionData";

const getClients = async () : Promise<Client[]>  => {
    const sessionData = await getServerSessionData();

    const params = new URLSearchParams({email: sessionData.email})

    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients?${params}`)
    return []
}

const ClientsList = async () => {
    const clients = await getClients();
    return(
        <p>Client List</p>
    )
}

export default ClientsList;