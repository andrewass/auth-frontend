import ClientsListTab from "@/app/(navigation)/clients/clientslisttab/ClientsListTab";
import { getServerSessionData } from "@/app/session/sessionData";

export default async function ClientsPage() {
	const sessionData = await getServerSessionData();

	const params = new URLSearchParams({ email: sessionData.email });
	const response = await fetch(
		`${process.env.AUTH_SERVER_URL}/clients?${params}`,
		{
			cache: "no-store",
		},
	);
	const _clients = await response.json();

	return (
		<div className="tabs tabs-border mr-5 ml-5 mt-15">
			<input
				type="radio"
				name="my_tabs_2"
				className="tab"
				aria-label="Clients list"
			/>
			<div className="tab-content border-base-300 bg-base-100 p-10">
				<ClientsListTab />
			</div>

			<input
				type="radio"
				name="my_tabs_2"
				className="tab"
				aria-label="Initial access token"
				defaultChecked
			/>
			<div className="tab-content border-base-300 bg-base-100 p-10">
				Tab content 2
			</div>

			<input
				type="radio"
				name="my_tabs_2"
				className="tab"
				aria-label="Client registration"
			/>
			<div className="tab-content border-base-300 bg-base-100 p-10">
				Tab content 3
			</div>
		</div>
	);
}
