"use client";

import {registerClient} from "@/app/(navigation)/clients/registration/actions";
import {useFormStatus} from "react-dom";


const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" className="btn btn-primary" aria-disabled={pending}>
            Submit
        </button>
    );
}

const ClientRegistrationForm = () => {
    return (
        <form className="flex flex-col space-y-8" action={registerClient}>
            <input type="text" name="applicationName" placeholder="Application Name"/>
            <input type="text" name="homepageURL" placeholder="Homepage URL"/>
            <input type="text" name="authCallbackURL" placeholder="Authorization Callback URL"/>
            <input type="text" name="description" placeholder="Description"/>
            <SubmitButton/>
        </form>
    );
}

export default ClientRegistrationForm;
