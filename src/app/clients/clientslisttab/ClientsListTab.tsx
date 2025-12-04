import ClientsTable from "@/app/clients/clientslisttab/ClientsTable";
import ClientsToolBar from "@/app/clients/clientslisttab/ClientsToolBar";

export default function ClientsListTab() {
	return (
		<div className="flex flex-col">
			<ClientsToolBar />
			<ClientsTable clients={[]} />
		</div>
	);
}
