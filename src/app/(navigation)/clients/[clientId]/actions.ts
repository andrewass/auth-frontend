"use server";

import {ClientDetailed, toDetailedClient} from "@/app/(navigation)/clients/types";

export const rotateClientSecret = async (clientId: string): Promise<ClientDetailed> => {
    const params = new URLSearchParams({client_id: clientId});
    const response = await fetch(process.env.AUTH_SERVER_URL + `/clients/rotate-secret?${params}`, {
        method: "POST"
    });
    const client = await response.json();

    return toDetailedClient(client);
}