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
        <form className="flex flex-col space-y-8 w-5/12" action={registerClient}>
            <select className="select select-bordered">
                <option>Native</option>
                <option>Single-page App</option>
            </select>
            <input type="text" name="applicationName" placeholder="Application Name" className="input input-bordered"/>
            <input type="text" name="homepageURL" placeholder="Homepage URL" className="input input-bordered"/>
            <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
            <SubmitButton/>
        </form>
    );
}

export default ClientRegistrationForm;
