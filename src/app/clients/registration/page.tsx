"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import CapabilityConfig from "@/app/clients/registration/CapabilityConfig";
import GeneralSettings from "@/app/clients/registration/GeneralSettings";
import LoginSettings from "@/app/clients/registration/LoginSettings";

export default function ClientRegistrationPage() {
	const [currentStep, setCurrentStep] = useState<number>(1);

	return (
		<div className="flex flex-col">
			<div className="breadcrumbs p-10">
				<ul>
					<li>
						<a href="/clients">Clients</a>
					</li>
					<li>Create Client</li>
				</ul>
			</div>

			<div className="divider divider-vertical m-0 h-0" />

			<div className="flex flex-col gap-10 p-10">
				<div className="flex flex-row gap-5 items-start">
					<ul className="steps steps-vertical text-sm gap-2">
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

					<div className="flex-1">
						{currentStep === 1 && <GeneralSettings />}
						{currentStep === 2 && <CapabilityConfig />}
						{currentStep === 3 && <LoginSettings />}
					</div>
				</div>

				<div className="flex flex-row gap-14">
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
		</div>
	);
}
