import {Client} from "@/app/(navigation)/clients/types";

const ClientRow = ({client, key}: {client: Client, key: number}) => {
    return(
        <li>{client.name}</li>
    );
}

export default ClientRow;