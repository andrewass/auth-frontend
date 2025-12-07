export default function GeneralSettings() {
	return (
		<div className="ml-20">
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Client Id</legend>
				<input
					type="text"
					className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
				/>
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Client Id</legend>
				<input
					type="text"
					className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
				/>
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Client Id</legend>
				<input
					type="text"
					className="input w-full max-w-xs sm:max-w-md lg:max-w-lg"
				/>
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Your bio</legend>
				<textarea
					className="textarea h-24 w-full max-w-xs sm:max-w-md lg:max-w-lg"
					placeholder="Bio"
				></textarea>
			</fieldset>
		</div>
	);
}
