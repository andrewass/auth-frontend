
export default function ClientId({clientId}: { clientId: String }) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Client ID</h2>
                <p>{clientId}</p>
            </div>
        </div>
    );
}