export default function ConfigureList() {
	return (
		<div className="flex flex-col gap-3">
			<div className="ml-5">
				<p>Configure</p>
			</div>
			<div className="divider divider-vertical m-0" />
			<div className="flex flex-col ml-5 gap-3">
				<p>Realm Settings</p>
				<p>Authentication</p>
				<p>Identity Providers</p>
				<p>User federation</p>
			</div>
		</div>
	);
}
