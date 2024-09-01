"use client";

import {rotateClientSecret} from "@/app/(navigation)/clients/[clientId]/actions";
import {useState} from "react";
import Image from "next/image";

interface Props {
    clientSecret: string;
    clientSecretIssuedAt: string;
    clientId: string
}

const ClientSecret = ({clientSecret, clientId, clientSecretIssuedAt}: Props) => {
    const [hideSecret, setHideSecret] = useState<boolean>(true);
    const [secret, setSecret] = useState<string>(clientSecret);
    const [issuedAt, setIssuedAt] = useState<string>(clientSecretIssuedAt);

    const rotateSecret = async () => {
        const client = await rotateClientSecret(clientId);
        setSecret(client.clientSecret);
        setIssuedAt(client.clientSecretIssuedAt);
    }

    const getSecret = () => {
        if (hideSecret) {
            return "****************************************";
        } else {
            return secret
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Client Secret</h2>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <span className="w-80">{getSecret()}</span>
                        <Image className="m-3" src={hideSecret ? "/enableVisible.svg" : "/disableVisible.svg"}
                               alt="visibility toggle" width={24} height={24}
                               onClick={() => setHideSecret(!hideSecret)}/>
                    </div>
                    <div className="flex items-center">
                        <span className="w-80">Issued At : {issuedAt}</span>
                        <Image className="m-3" src="/renew.svg"
                               alt="renew secret" width={24} height={24}
                               onClick={rotateSecret}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSecret;