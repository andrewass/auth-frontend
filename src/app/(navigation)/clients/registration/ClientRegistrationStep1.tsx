
const ClientRegistrationStep1 = () => {
    return (
        <div className="flex flex-col space-y-8 w-5/12">
            <select className="select select-bordered">
                <option>Native</option>
                <option>Single-page App</option>
            </select>
            <input type="text" name="applicationName" placeholder="Application Name" className="input input-bordered"/>
            <input type="text" name="homepageURL" placeholder="Homepage URL" className="input input-bordered"/>
            <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
        </div>
    );
}

export default ClientRegistrationStep1;
