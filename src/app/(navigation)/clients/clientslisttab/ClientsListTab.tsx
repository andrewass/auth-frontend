import ClientsTable from "@/app/(navigation)/clients/clientslisttab/ClientsTable";
import ClientsToolBar from "@/app/(navigation)/clients/clientslisttab/ClientsToolBar";

export default function ClientsListTab() {
	return (
		<div className="flex flex-col">
			<ClientsToolBar />
			<ClientsTable clients={[]} />
		</div>
	);
}
