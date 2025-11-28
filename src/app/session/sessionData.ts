import {SessionData} from "@/app/session/types";
import {auth} from "@/auth";

export const getServerSessionData = async (): Promise<SessionData> => {
    const session = await auth();
    const sessionBody = session!!.user!!
    return {
        name: sessionBody.name,
        email: sessionBody.email!!,
        image: sessionBody.image
    }
}
