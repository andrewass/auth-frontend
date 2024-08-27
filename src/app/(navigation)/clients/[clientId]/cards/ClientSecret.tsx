"use client";

import {rotateClientSecret} from "@/app/(navigation)/clients/[clientId]/actions";
import {useState} from "react";
import hideSecret from "../../../../../../public/hide-secret.svg";

interface Props {
    clientSecret: string;
    clientSecretIssuedAt: string;
    clientId: string
}

const ClientSecret = ({clientSecret, clientId, clientSecretIssuedAt}: Props) => {
    const [displaySecret, setDisplaySecret] = useState<boolean>(false);
    const [secret, setSecret] = useState<string>(clientSecret);
    const [issuedAt, setIssuedAt] = useState<string>(clientSecretIssuedAt);

    const rotateSecret = async () => {
        const client = await rotateClientSecret(clientId);
        setSecret(client.clientSecret);
        setIssuedAt(client.clientSecretIssuedAt);
    }

    const getSecret = () => {
        if(displaySecret){
            return secret
        } else {
            return "**************************";
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Client Secret</h2>
                <div className="flex">
                    <div className="flex">
                        <input className="w-1/2" placeholder={getSecret()} disabled/>
                        <img className="m-3" src={hideSecret} onClick={() => setDisplaySecret(!displaySecret)}/>
                    </div>
                    <button className="w-1/4" onClick={rotateSecret}>Rotate</button>
                </div>
                <p>Issued At : {issuedAt}</p>
            </div>
        </div>
    );
}

export default ClientSecret;