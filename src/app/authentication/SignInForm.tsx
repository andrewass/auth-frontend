"use client";

import {signInUser} from "@/app/authentication/actions";
import {useFormStatus} from "react-dom";
import {AuthParameters} from "@/app/authentication/types";


const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <button type="submit" className="btn btn-primary" aria-disabled={pending}>
            Sign In
        </button>
    );
}

const SignInForm = ({params}: { params: AuthParameters}) => {
    const signInWithParams = signInUser.bind(null, params);

    return (
        <form className="flex flex-col space-y-8" action={signInWithParams}>
            <input type="email" name="email" placeholder="Email Address"/>
            <input type="password" name="password" placeholder="Password"/>
            <SubmitButton/>
        </form>
    );
}

export default SignInForm;