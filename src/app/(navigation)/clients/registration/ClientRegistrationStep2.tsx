import {useClientDataContext} from "@/app/(navigation)/clients/registration/ClientDataContext";
import {ChangeEvent} from "react";
import MultiValueInput from "@/app/components/MultiValueInput";

enum Field {
    AUTH_METHOD
}

const authMethods = {
    CSB: "Client Secret Basic",
    CSJ: "Client Secret JWT",
    CSP: "Client Secret Post",
    NONE: "None",
    PKJ: "Private Key JWT"
}

const ClientRegistrationStep2 = () => {
    const {step2FormData, updateStep2FormData} = useClientDataContext();

    function updateFormOnEvent(
        field: Field,
        event: ChangeEvent<HTMLSelectElement>
    ) {
        switch (field) {
            case Field.AUTH_METHOD:
                updateStep2FormData({...step2FormData, tokenEndpointAuthMethod: event.target.value});
                break;
        }
    }

    function updateRedirectUris(uriList: string[]) {
        updateStep2FormData({...step2FormData, redirectUris: uriList});
    }

    return (
        <div className="flex flex-col gap-8">
            <select className="select select-bordered" value={step2FormData.tokenEndpointAuthMethod ?? "default"}
                    onChange={(event) => updateFormOnEvent(Field.AUTH_METHOD, event)}
            >
                <option value="default" disabled>
                    Select Token Endpoint Auth Method
                </option>
                {Object.entries(authMethods)
                    .map(([key, value]) => <option key={key} value={value}>{value}</option>)
                }
            </select>
            <MultiValueInput
                placeholderValue={"Add Commma Separated Redirect URLs"}
                items={step2FormData.redirectUris}
                updateRedirectUris={updateRedirectUris}
            />
        </div>
    );
}

export default ClientRegistrationStep2;