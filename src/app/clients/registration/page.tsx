"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import CapabilityConfig from "@/app/clients/registration/CapabilityConfig";
import GeneralSettings from "@/app/clients/registration/GeneralSettings";
import LoginSettings from "@/app/clients/registration/LoginSettings";

export default function ClientRegistrationPage() {
	const [currentStep, setCurrentStep] = useState<number>(1);

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-row gap-4 mt-10 ml-10">
				<Link href="/clients">Clients</Link>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
				<span>Create client</span>
			</div>
			<ul className="steps steps-vertical lg:steps-horizontal w-300 bg-red-500">
				<li className={`step ${currentStep >= 1 ? "step-primary" : ""}`}>
					General Settings
				</li>
				<li className={`step ${currentStep >= 2 ? "step-primary" : ""}`}>
					Capability Config
				</li>
				<li className={`step ${currentStep >= 3 ? "step-primary" : ""}`}>
					Login Settings
				</li>
			</ul>

			<div className="ml-20">
				{currentStep === 1 && <GeneralSettings />}
				{currentStep === 2 && <CapabilityConfig />}
				{currentStep === 3 && <LoginSettings />}
			</div>

			<div className="flex flex-row gap-14 ml-20">
				<div className="flex flex-row gap-4">
					<button
						className="btn"
						onClick={() => setCurrentStep(Math.max(currentStep - 1, 1))}
					>
						Previous
					</button>
					<button
						className="btn"
						onClick={() => setCurrentStep(Math.min(currentStep + 1, 3))}
					>
						Next
					</button>
				</div>
				<button className="btn" onClick={() => redirect("/clients")}>
					Cancel
				</button>
			</div>
		</div>
	);
}
