import {ClientDetailed} from "@/app/(navigation)/clients/types";

export default class ClientStep1FormData {
    clientName: string | undefined
    clientDescription: string | undefined
    clientUrl: string | undefined
    clientType: string | undefined

    constructor(client: ClientDetailed | undefined) {
        this.clientName = client?.name
        this.clientDescription = client?.description
        this.clientUrl = client?.uri
        this.clientType = client?.applicationType
    }
}