interface Props {
    clientName: string
}

export default function ClientName({clientName}: Props) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Client Name</h2>
                <p>{clientName}</p>
            </div>
        </div>
    )
}