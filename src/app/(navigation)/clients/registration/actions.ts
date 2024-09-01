"use server";

import {getServerSessionData} from "@/app/session/sessionData";
import {toSimpleClient} from "@/app/(navigation)/clients/types";
import {redirect} from "next/navigation";
import {Step1FormData, Step2FormData} from "@/app/(navigation)/clients/form/ClientFormData";

export async function registerClient(
    step1FormData: Step1FormData,
    step2FormData: Step2FormData
){
    const sessionData = await getServerSessionData();
    const response = await fetch(process.env.AUTH_SERVER_URL + "/clients/create", {
            method: "POST",
            body: JSON.stringify({
                redirect_uris: step2FormData.redirectUris,
                client_uri: step1FormData.clientUrl,
                client_name: step1FormData.clientName,
                client_description: step1FormData.clientDescription,
                user_email: sessionData.email,
                grant_types: step2FormData.grantTypes.map(type => type.code),
                application_type: step1FormData.clientType,
                token_endpoint_auth_method: step2FormData.tokenEndpointAuthMethod
            })
        }
    );
    const responseBody = await response.json();
    const client = toSimpleClient(responseBody);
    redirect(`${client.clientId}`);
}