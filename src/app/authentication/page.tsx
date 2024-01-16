"use client";

import SignUpForm from "@/app/authentication/SignUpForm";
import {useState} from "react";


const Authentication = () => {

    const [displaySignUp, setDisplaySignUp] = useState(false);

    if (displaySignUp) {
        return (
            <SignUpForm/>
        );
    } else {
        return <SignUpForm/>
    }
}

export default Authentication;