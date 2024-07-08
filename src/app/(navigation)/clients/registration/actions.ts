"use server";

import {getServerSessionData} from "@/app/session/sessionData";
import {toSimpleClient} from "@/app/(navigation)/clients/types";
import {redirect} from "next/navigation";
import {Step1FormData} from "@/app/(navigation)/clients/registration/ClientFormData";

export async function registerClient(
    step1FormData: Step1FormData
){
    const sessionData = await getServerSessionData();
    const response = await fetch(process.env.AUTH_SERVER_URL + "/clients/create", {
            method: "POST",
            body: JSON.stringify({
                redirect_uris: Array.of(""),
                client_uri: step1FormData.clientUrl,
                client_name: step1FormData.clientName,
                client_description: step1FormData.clientDescription,
                user_email: sessionData.email
            })
        }
    );
    const responseBody = await response.json();
    const client = toSimpleClient(responseBody);
    redirect(`clients/${client.clientId}`);
}

