import {rotateClientSecret} from "@/app/(navigation)/clients/[clientId]/actions";
import {useState} from "react";
import hideSecret from "../../../../../../public/hide-secret.svg";

interface Props {
    setClientSecret: (secret: string) => void;
    clientSecret: string;
    clientSecretIssuedAt: string;
    clientId: string
}


const ClientSecret = ({setClientSecret, clientSecret, clientId, clientSecretIssuedAt}: Props) => {

    const [displaySecret, setDisplaySecret] = useState(false);

    const rotateSecret = async () => {
        const client = await rotateClientSecret(clientId);
        setClientSecret(client.clientSecret);
    }

    const getSecret = () => {
        if(displaySecret){
            return clientSecret
        } else {
            return "**************************";
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h3>Client Secret</h3>
                <div className="flex">
                    <div className="flex">
                        <input className="w-1/2" placeholder={getSecret()} disabled/>
                        <img className="m-3" src={hideSecret} onClick={() => setDisplaySecret(!displaySecret)}/>
                    </div>
                    <button className="w-1/4" onClick={rotateSecret}>Rotate</button>
                </div>
                <p>Issued At : {clientSecretIssuedAt}</p>
            </div>
        </div>
    );
}

export default ClientSecret;