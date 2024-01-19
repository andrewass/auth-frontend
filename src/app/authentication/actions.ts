"use server";

import {AuthParameters} from "@/app/authentication/types";

const fetchAccessCode = async (email: string, params: AuthParameters) => {
    const authResponse = await fetch(process.env.AUTH_SERVER_URL + "/auth/response", {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "client_id": params.clientId,
                "code_challenge": params.codeChallenge,
                "code_challenge_method": params.codeChallengeMethod
            })
        }
    );
    const data = await authResponse.json();
}


export const signUpUser = async (formData: FormData) => {
    const response = await fetch(process.env.AUTH_SERVER_URL + "/user/sign-up", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password")
            })
        }
    );
}


export const signInUser = async (params: AuthParameters, formData: FormData) => {
    const signInResponse = await fetch(process.env.AUTH_SERVER_URL + "/user/sign-in", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password")
            })
        }
    );
    await fetchAccessCode(formData.get("email") as string, params)
}

