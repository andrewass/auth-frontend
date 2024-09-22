import {ChangeEvent} from "react";
import ClientStep1FormData from "@/app/(navigation)/clients/form/ClientStep1FormData";

enum Field {
    TYPE,
    NAME,
    URL,
    DESCRIPTION
}

const applicationTypes = {
    WEB: "Web Application",
    SPA: "Single Page Application",
    NATIVE: "Native Application",
    M2M: "Machine to Machine Application"
}

interface Props {
    formData: ClientStep1FormData,
    updateFormData: (data: ClientStep1FormData) => void
}

export default function ClientFormStep1({formData, updateFormData}: Props) {

    function updateForm(
        field: Field,
        event: ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLTextAreaElement>
            | ChangeEvent<HTMLSelectElement>
    ) {
        switch (field) {
            case Field.TYPE:
                updateFormData({...formData, clientType: event.target.value});
                break;
            case Field.NAME :
                updateFormData({...formData, clientName: event.target.value});
                break;
            case Field.URL:
                updateFormData({...formData, clientUrl: event.target.value})
                break;
            case Field.DESCRIPTION:
                updateFormData({...formData, clientDescription: event.target.value});
                break;
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <select className="select select-bordered" value={formData.clientType ?? "default"}
                    onChange={(event) => updateForm(Field.TYPE, event)}
            >
                <option value="default" disabled>
                    Select Application Type
                </option>
                {Object.entries(applicationTypes)
                    .map(([key, value]) => <option key={key} value={value}>{value}</option>)
                }
            </select>
            <input type="text" value={formData?.clientName || ""}
                   onChange={(event) => updateForm(Field.NAME, event)}
                   placeholder="Application Name" className="input input-bordered"/>
            <input type="text" value={formData?.clientUrl || ""}
                   onChange={(event) => updateForm(Field.URL, event)}
                   placeholder="Homepage URL" className="input input-bordered"/>
            <textarea className="textarea textarea-bordered" value={formData?.clientDescription || ""}
                      onChange={(event) => updateForm(Field.DESCRIPTION, event)}
                      placeholder="Description"/>
        </div>
    );
}
