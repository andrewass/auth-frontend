import ConfigureList from "@/app/leftmenu/ConfigureList";
import ManageList from "@/app/leftmenu/ManageList";

export default function LeftMenu() {
	return (
		<div className="flex flex-col gap-16 mt-20">
			<ManageList />
			<ConfigureList />
		</div>
	);
}
