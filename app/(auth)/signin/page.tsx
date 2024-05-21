import FormAuthSignIn from "@/app/components/FormAuthSignIn"

const SignIn = () => {
    return (
        <div className="flex flex-col w-full h-screen bg-[#EEEDEB] justify-center items-center gap-y-10">
            <h1 className="text-2xl text-center text-black">Sign In for the admin</h1>
            <FormAuthSignIn />
        </div>
    )
}

export default SignIn