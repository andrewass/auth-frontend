"use client";

import {useState} from "react";
import Link from "next/link";
import Image from 'next/image';
import {ClientSimple} from "@/app/(navigation)/clients/types";

interface RowProps {
    client: ClientSimple
}


export default function ClientRow({client}: RowProps) {
    const [hideSecret, setHideSecret] = useState<boolean>(true);
    const hiddenSecret = "*".repeat(35);

    return (
        <tr key={client.clientId}>
            <td>
                <Link href={`/clients/${client.clientId}`}>{client.name}</Link>
            </td>
            <td>{client.clientId}</td>
            <td>
                <div className="flex items-center">
                    <span className="w-72">{hideSecret ? hiddenSecret : client.clientSecret}</span>
                    <Image className="m-3" src={hideSecret ? "/enableVisible.svg" : "/disableVisible.svg"} alt="visibility toggle" width={24} height={24}
                           onClick={() => setHideSecret(!hideSecret)}/>
                </div>
            </td>
            <td>
                <Image className="m-3" src="/deleteIcon.svg" alt="delete icon" width={24} height={24}
                       onClick={() => setHideSecret(!hideSecret)}/>
            </td>
        </tr>
    );
}