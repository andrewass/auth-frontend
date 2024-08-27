"use client";

import {useState} from "react";

interface Props {
    originList: string[]
}

export default function ClientOrigins({originList}: Props) {
    const [origins, setOrigins] = useState<string[]>(originList);

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Authorized Origins</h2>
                <ul>
                    {origins.map((origin, index) => (
                        <li key={index}>
                            <div>{origin}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}