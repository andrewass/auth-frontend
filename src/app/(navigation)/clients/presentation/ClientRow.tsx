import {ClientSimple} from "@/app/(navigation)/clients/types";
import Link from "next/link";

const ClientRow = ({client, clientKey}: { client: ClientSimple, clientKey: string }) => {
    const path = "/clients/"+client.clientId;
    return (
        <li><Link href={path}>{client.name}</Link></li>
    );
}

export default ClientRow;