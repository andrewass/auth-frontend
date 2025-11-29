"use client";

import { useFormStatus } from "react-dom";
import { signUpUser } from "@/app/authentication/actions";
import type { AuthParameters } from "@/app/authentication/types";

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button type="submit" className="btn btn-primary" aria-disabled={pending}>
			Sign Up
		</button>
	);
};

const SignUpForm = ({ params }: { params: AuthParameters }) => {
	return (
		<form className="flex flex-col space-y-8" action={signUpUser}>
			<input type="email" name="email" placeholder="Email Address" />
			<input type="password" name="password" placeholder="Password" />
			<input
				type="password"
				name="confirmedPassword"
				placeholder="Confirm Password"
			/>
			<SubmitButton />
		</form>
	);
};

export default SignUpForm;
