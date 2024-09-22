import {ClientDetailed} from "@/app/(navigation)/clients/types";
import {CheckboxItem} from "@/app/components/CheckboxGroup";

export default class ClientStep2FormData {
    redirectUris: string[]
    grantTypes: CheckboxItem[]
    tokenEndpointAuthMethod: string | undefined

    constructor(client: ClientDetailed | undefined) {
        this.redirectUris = client?.redirectUris ?? []
        this.grantTypes = []
        this.tokenEndpointAuthMethod = client?.authMethod
    }
}