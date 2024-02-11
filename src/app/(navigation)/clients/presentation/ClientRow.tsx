import Link from "next/link";

interface Props {
    clientId: String,
    clientName: String,
}

export default function ClientRow({clientId, clientName}: Props) {
    return (
        <li><Link href={`/clients/${clientId}`}>{clientName}</Link></li>
    );
}