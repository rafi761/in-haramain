"use client"

import { auth } from "@/lib/firebase/firebase";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";

const SignOutButton = () => {
    const router = useRouter()
    const handleSignOut = async () => {
        try {
            await auth.signOut()
            router.push('/signin')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex items-center gap-x-3 mb-3">
            <CiLogout size={30} className="text-black" />
            <button onClick={handleSignOut} className="text-sm text-black">
                Logout
            </button>
        </div>
    )
}

export default SignOutButton