'use client'

import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <Button color="primary" type="submit" disabled={pending}>
            {pending ? 'Tunggu...' : 'Tambah'}
        </Button>
    )
}

export default SubmitButton