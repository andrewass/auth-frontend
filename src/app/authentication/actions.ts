"use server";

import {AuthParameters} from "@/app/authentication/types";
import {permanentRedirect, redirect} from "next/navigation";

const fetchAccessCode = async (email: string, params: AuthParameters) => {
    const internalCallbackUrl = "http://authserver.io/api/auth/callback/customauth";

    const authResponse = await fetch(process.env.AUTH_SERVER_URL + "/auth/response", {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "client_id": params.clientId,
                "code_challenge": params.codeChallenge,
                "code_challenge_method": params.codeChallengeMethod,
                "state": params.state
            })
        }
    );
    const data = await authResponse.json();
    const accessCode = data.code;
    const state = data.state;
    if (internalCallbackUrl.includes(params.redirectUri!!)) {
        redirect("/api/auth/callback/customauth?code=" + accessCode + "&state=" + state);
    } else {
        const redirectUrl = new URL(params.redirectUri!!);
        redirectUrl.searchParams.append("code", accessCode);
        redirectUrl.searchParams.append("state", state);
        permanentRedirect(redirectUrl.href);
    }
}


export const signUpUser = async (formData: FormData) => {
    await fetch(process.env.AUTH_SERVER_URL + "/user/sign-up", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password")
            })
        }
    );
}


export const signInUser = async (params: AuthParameters, formData: FormData) => {
    await fetch(process.env.AUTH_SERVER_URL + "/user/sign-in", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password")
            })
        }
    );
    await fetchAccessCode(formData.get("email") as string, params);
}

