'use client'

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(50)
})

const FormAuthSignIn = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true)
            await signInWithEmailAndPassword(auth, values.email, values.password)
            router.push('/admin-page')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[576px] h-fit">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">Email</FormLabel>
                            <FormControl>
                                <Input className="text-black w-full" type='email' placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">Password</FormLabel>
                            <FormControl>
                                <Input className="text-black w-full" type='password' placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading}>{isLoading ? 'Wait...' : 'Signin'}</Button>
            </form>
        </Form>
    )
}

export default FormAuthSignIn