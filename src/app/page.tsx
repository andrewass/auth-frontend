import {auth, signOut} from "@/auth";

export default async function Home() {
    const session = await auth();

    const value = JSON.stringify(session)
    return (
        <div>
            <p>Main Page</p>
            <div>
                {value}
            </div>
            <form
                action={
                    async () => {
                        "use server"
                        await signOut()
                    }
                }
            >
                <button type="submit">Sign-out with Google</button>
            </form>
        </div>
    )
}
