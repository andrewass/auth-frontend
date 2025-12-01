import { signOut } from "@/auth";

export default function NavigationHeader() {
	return (
		<div className="bg-red-500 h-18 content-center">
			<div className="mx-auto flex flex-row w-5/6 justify-between items-center">
				<p>Auth Frontend</p>
				<button
					className="btn"
					onClick={async () => {
						"use server";
						await signOut();
					}}
				>
					Sign Out
				</button>
			</div>
		</div>
	);
}
