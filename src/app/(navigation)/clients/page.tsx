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
	const clients = await response.json();

	return <div>Clients Page</div>;
}
