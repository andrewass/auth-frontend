"use client";

import SignUpForm from "@/app/authentication/SignUpForm";
import {useState} from "react";
import SignInForm from "@/app/authentication/SignInForm";
import {useSearchParams} from "next/navigation";
import {AuthParameters} from "@/app/authentication/types";


const Authentication = () => {

    const [displaySignUp, setDisplaySignUp] = useState(false);
    const searchParams = useSearchParams();

    const params : AuthParameters = {
        clientId: searchParams.get("client_id"),
        scope: searchParams.get("scope"),
        redirectUri: searchParams.get("redirect_uri"),
        state: searchParams.get("state"),
        codeChallenge: searchParams.get("code_challenge"),
        codeChallengeMethod: searchParams.get("code_challenge_method")
    }


    if (displaySignUp) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col space-y-8">
                    <SignUpForm params={params}/>
                    <button className="btn btn-primary" onClick={() => setDisplaySignUp(false)}>
                        Sign in to existing account
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col space-y-8">
                    <SignInForm params={params}/>
                    <button className="btn btn-primary" onClick={() => setDisplaySignUp(true)}>
                        Create a new account
                    </button>
                </div>
            </div>
        );
    }
}

export default Authentication;