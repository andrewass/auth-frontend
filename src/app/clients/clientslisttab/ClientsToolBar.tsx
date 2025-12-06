"use client";

import { redirect } from "next/navigation";

export default function ClientsToolBar() {
	return (
		<div className="flex flex-row gap-4">
			<label className="input">
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
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<input type="search" className="grow" placeholder="Search client" />
			</label>

			<button
				className="btn btn-primary"
				onClick={() => redirect("/clients/registration")}
			>
				Create client
			</button>
		</div>
	);
}
