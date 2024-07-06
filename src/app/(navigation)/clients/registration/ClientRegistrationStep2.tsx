const ClientRegistrationStep2 = () => {

    return (
        <div className="flex flex-col">
            <div>
                <p>Token Endpoint Auth Method</p>
                <div className="grid grid-cols-2">
                    <div>
                        <span className="label-text">Remember me</span>
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary"/>
                    </div>
                    <div>
                        <span className="label-text">Remember me</span>
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary"/>
                    </div>
                </div>
            </div>
            <input type="text" name="applicationName" placeholder="Application Name" className="input input-bordered"/>
            <input type="text" name="homepageURL" placeholder="Homepage URL" className="input input-bordered"/>
        </div>
    );
}

export default ClientRegistrationStep2;