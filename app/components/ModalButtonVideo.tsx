'use client'

import { db, storage } from "@/lib/firebase/firebase";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function ModalButtonVideo() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false)
    const [judul, setJudul] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, onClose: () => void) => {
        e.preventDefault()
        let file: File | null = null
        try {
            setIsLoading(true)
            if (!(inputRef.current?.files && inputRef.current.files?.length)) throw Error('yoww watsapp');

            file = inputRef.current.files[0];

            const fileRef = ref(storage, `images/${file.name}`)

            await uploadBytes(fileRef, file)

            const url = await getDownloadURL(fileRef)

            const collectionRef = collection(db, 'kontenvideo');
            const docRef = await addDoc(collectionRef, {
                video: url,
                judul_video: judul,
            })

            setJudul("");
            if (inputRef.current) {
                inputRef.current.value = "";
            }

            router.refresh()
            onClose()

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <>
            <Button onPress={onOpen} className='px-3 py-2 bg-yellow-300 text-white text-base rounded-2xl'>Tambah Video</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={(e) => handleSubmit(e, onClose)} className="w-full flex flex-col gap-y-3">
                            <ModalHeader className="flex flex-col gap-1 text-black">Tambah Data Untuk Konten Artikel</ModalHeader>
                            <ModalBody>
                                <Input size="md" type="text" label="Judul Artikel" name="judul_artikel" value={judul} onChange={(e) => setJudul(e.target.value)} />
                                <input ref={inputRef} type="file" name="file" className="w-full bg-gray-100 rounded-xl p-2 text-gray-500" />
                            </ModalBody>
                            <ModalFooter className="flex items-center gap-x-2">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Tunggu...' : 'Tambah'}
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
