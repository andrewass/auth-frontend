import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";
import {ChangeEvent} from "react";

enum Field {
    NAME,
    URL,
    DESCRIPTION
}

const ClientRegistrationStep1 = () => {
    const {step1FormData, updateStep1FormData} = useClientDataContext();

    function updateForm(
        field: Field,
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        switch (field) {
            case Field.NAME :
                updateStep1FormData({...step1FormData, clientName: event.target.value});
                break;
            case Field.URL:
                updateStep1FormData({...step1FormData, clientUrl: event.target.value})
                break;
            case Field.DESCRIPTION:
                updateStep1FormData({...step1FormData, clientDescription: event.target.value});
                break;
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <select className="select select-bordered">
                <option>Native</option>
                <option>Single-page App</option>
            </select>
            <input type="text" name="applicationName" value={step1FormData?.clientName || ""}
                   onChange={(event) => updateForm(Field.NAME, event)}
                   placeholder="Application Name" className="input input-bordered"/>
            <input type="text" name="homepageURL" value={step1FormData?.clientUrl || ""}
                   onChange={(event) => updateForm(Field.URL, event)}
                   placeholder="Homepage URL" className="input input-bordered"/>
            <textarea className="textarea textarea-bordered" value={step1FormData?.clientDescription || ""}
                      onChange={(event) => updateForm(Field.DESCRIPTION, event)}
                      placeholder="Description"/>
        </div>
    );
}

export default ClientRegistrationStep1;
