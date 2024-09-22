import {ChangeEvent} from "react";
import CheckboxGroup, {CheckboxItem} from "@/app/components/CheckboxGroup";
import MultiValueInput from "@/app/components/MultiValueInput";
import ClientStep2FormData from "@/app/(navigation)/clients/form/ClientStep2FormData";

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

export const grantTypes = {
    AUTH_CODE: "Authorization Code",
    PKCE: "PKCE",
    CLI_CRE: "Client Credentials",
    REF_TOK: "Refresh Token",
    DEV_CODE: "Device Code",
    IMPLICIT: "Implicit"
}

interface Props{
    formData: ClientStep2FormData
    updateFormData: (data: ClientStep2FormData) => void
}

const ClientFormStep2 = ({formData, updateFormData}: Props) => {

    function updateFormOnEvent(
        field: Field,
        event: ChangeEvent<HTMLSelectElement>
    ) {
        switch (field) {
            case Field.AUTH_METHOD:
                updateFormData({...formData, tokenEndpointAuthMethod: event.target.value});
                break;
        }
    }

    function updateRedirectUris(uriList: string[]) {
        updateFormData({...formData, redirectUris: uriList});
    }

    function updateGrantTypes(grants: CheckboxItem[]) {
        updateFormData({...formData, grantTypes: grants})
    }

    return (
        <div className="flex flex-col gap-8">
            <select className="select select-bordered" value={formData.tokenEndpointAuthMethod ?? "default"}
                    onChange={(event) => updateFormOnEvent(Field.AUTH_METHOD, event)}
            >
                <option value="default" disabled>
                    Select Token Endpoint Auth Method
                </option>
                {Object.entries(authMethods)
                    .map(([key, value]) => <option key={key} value={value}>{value}</option>)
                }
            </select>
            <CheckboxGroup updateCheckedBoxes={updateGrantTypes} items={formData.grantTypes}/>
            <MultiValueInput
                placeholderValue={"Add Commma Separated Redirect URLs"}
                items={formData.redirectUris}
                updateRedirectUris={updateRedirectUris}
            />
        </div>
    );
}

export default ClientFormStep2;