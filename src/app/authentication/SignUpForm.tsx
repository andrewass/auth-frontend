"use client";

import {signUpUser} from "@/app/authentication/actions";
import {useFormStatus} from "react-dom";



const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <button type="submit" className="btn btn-primary" aria-disabled={pending}>
            Sign Up
        </button>
    );
}

const SignUpForm = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <form className="flex flex-col space-y-8" action={signUpUser}>
                <input type="email" name="email" placeholder="Email Address"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="password" name="confirmedPassword" placeholder="Confirm Password"/>
                <SubmitButton/>
            </form>
        </div>
    );
}

export default SignUpForm;