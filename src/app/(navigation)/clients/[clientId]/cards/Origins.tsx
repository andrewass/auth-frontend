"use client";

import {useState} from "react";

interface Props {
    originList: string[]
}

const Origins = ({originList}: Props) => {
    const [origins, setOrigins] = useState<string[]>(originList);

    return (
        <div className="card">
            <div className="card-body">
                <h1>Authorized Origins</h1>
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

export default Origins;