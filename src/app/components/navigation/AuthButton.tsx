"use client";

import {signIn, signOut, useSession} from "next-auth/react";


const AuthButton = () => {
    const {data: session} = useSession();

    if(session){
        return (
            <button onClick={() => signOut()}>Sign Out</button>
        );
    } else {
        return (
            <button onClick={() => signIn()}>Sign In</button>
        );
    }
}

export default AuthButton;