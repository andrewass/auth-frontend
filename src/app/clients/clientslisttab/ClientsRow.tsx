import type { ClientDetailed } from "@/app/clients/types";

interface Props {
	client: ClientDetailed;
}

export default function ClientsRow({ client }: Props) {
	return (
		<tr>
			<td>{client.clientId}</td>
			<td>{client.name}</td>
			<td>{client.applicationType}</td>
			<td>{client.description}</td>
			<td>{client.uri}</td>
			<td>
				<button className="btn btn-sm btn-ghost">Edit</button>
			</td>
		</tr>
	);
}
