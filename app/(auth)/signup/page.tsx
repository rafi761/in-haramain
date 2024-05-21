import FormAuth from "@/app/components/FormAuth"

const SignUp = () => {
    return (
        <div className="flex flex-col w-full h-screen bg-[#EEEDEB] justify-center items-center gap-y-10">
            <h1 className="text-2xl text-center text-black">Sign Up For New Admin</h1>
            <FormAuth />
        </div>
    )
}

export default SignUp