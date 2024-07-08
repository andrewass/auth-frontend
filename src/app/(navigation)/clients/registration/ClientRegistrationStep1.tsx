import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";
import {ChangeEvent} from "react";

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

export default function ClientRegistrationStep1() {
    const {step1FormData, updateStep1FormData} = useClientDataContext();

    function updateForm(
        field: Field,
        event: ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLTextAreaElement>
            | ChangeEvent<HTMLSelectElement>
    ) {
        switch (field) {
            case Field.TYPE:
                updateStep1FormData({...step1FormData, clientType: event.target.value});
                break;
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
            <select className="select select-bordered" value={step1FormData.clientType ?? "default"}
                    onChange={(event) => updateForm(Field.TYPE, event)}
            >
                <option value="default" disabled>
                    Select Application Type
                </option>
                {Object.entries(applicationTypes)
                    .map(([key, value]) => <option key={key} value={value}>{value}</option>)
                }
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
