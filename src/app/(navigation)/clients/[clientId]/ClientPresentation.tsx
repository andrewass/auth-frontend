import {ClientDetailed} from "@/app/(navigation)/clients/types";

const ClientPresentation = ({client}: { client: ClientDetailed }) => {
    return (
        <form className="flex flex-col space-y-8 w-5/12">
            <label>
                Client Name :
                <input type="text" name="clientName" placeholder={client.name} readOnly/>
            </label>
            <label>
                Client Id :
                <input type="text" name="clientId" placeholder={client.clientId} readOnly/>
            </label>
            <label>
                Client URL :
                <input type="text" name="clientUrl" placeholder={client.uri}/>
            </label>
            <button>Update</button>
        </form>
    );
}

export default ClientPresentation;