import {getServerSession} from "next-auth";
import {SessionData} from "@/app/session/types";

export const getServerSessionData = async (): Promise<SessionData> => {
    const session = await getServerSession();
    const sessionBody = session!!.user!!
    return {
        name: sessionBody.name,
        email: sessionBody.email!!,
        image: sessionBody.image
    }
}