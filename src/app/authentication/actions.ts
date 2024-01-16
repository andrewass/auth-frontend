"use server";


export const signUpUser = async (formData: FormData) => {
    const response = await fetch(process.env.AUTH_SERVER_URL + "/user/sign-up", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password")
            })
        }
    );
}
