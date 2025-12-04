import ClientsRow from "@/app/(navigation)/clients/clientslisttab/ClientsRow";
import type { ClientDetailed } from "@/app/(navigation)/clients/types";

interface Props {
	clients: ClientDetailed[];
}

export default function ClientsTable({ clients }: Props) {
	return (
		<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
			<table className="table">
				<thead>
					<tr>
						<th>Client ID</th>
						<th>Name</th>
						<th>Type</th>
						<th>Description</th>
						<th>Home URL</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{clients.length > 0 &&
						clients.map((client) => (
							<ClientsRow key={client.clientId} client={client} />
						))}
					{clients.length === 0 && (
						<tr>
							<td colSpan={5} className="text-center">
								No clients found
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
