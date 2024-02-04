"use server";

import {getServerSessionData} from "@/app/session/sessionData";

export const registerClient = async (formData: FormData) => {
    const sessionData = await getServerSessionData();

    await fetch(process.env.AUTH_SERVER_URL + "/clients/create", {
            method: "POST",
            body: JSON.stringify({
                redirect_uris: Array(1).fill(formData.get("authCallbackURL")),
                client_uri: formData.get("homepageURL"),
                client_name: formData.get("applicationName"),
                client_description: formData.get("description"),
                user_email: sessionData.email
            })
        }
    );
}

