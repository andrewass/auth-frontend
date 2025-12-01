export default function ManageList() {
	return (
		<div className="flex flex-col gap-3">
			<div className="ml-5">
				<p>Manage</p>
			</div>
			<div className="divider divider-vertical m-0" />
			<div className="flex flex-col ml-5 gap-3">
				<p>Clients</p>
				<p>Client scopes</p>
				<p>Realm Roles</p>
			</div>
		</div>
	);
}
