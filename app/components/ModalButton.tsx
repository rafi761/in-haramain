'use client'

import { db, storage } from "@/lib/firebase/firebase";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function ModalButton() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false)
    const [durasi, setDurasi] = useState("")
    const [harga, setHarga] = useState("")
    const [judul, setJudul] = useState("")
    const [benefit, setBenefit] = useState("")
    const [periode, setPeriode] = useState("")
    const [gambar, setGambar] = useState("")

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

            const collectionRef = collection(db, 'listpaket');
            const docRef = await addDoc(collectionRef, {
                durasi_program: durasi,
                gambar: url,
                harga: harga,
                judul_program: judul,
                list_benefit: (benefit as string)
                    .split(',')
                    .map((benefit) => benefit.trim()),
                periode_program: periode,
            })

            setDurasi("");
            setHarga("");
            setJudul("");
            setBenefit("");
            setPeriode("");
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
            <Button onPress={onOpen} className='px-3 py-2 bg-yellow-300 text-white text-base rounded-2xl'>Tambah Paket</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={(e) => handleSubmit(e, onClose)} className="w-full flex flex-col gap-y-3">
                            <ModalHeader className="flex flex-col gap-1 text-black">Tambah Data Paket Umroh / Haji</ModalHeader>
                            <ModalBody>
                                <Input size="md" type="text" label="Durasi_Program" name="durasi_program" value={durasi} onChange={(e) => setDurasi(e.target.value)} />
                                <input ref={inputRef} type="file" name="file" className="w-full bg-gray-100 rounded-xl p-2 text-gray-500" />
                                <Input size="md" type="text" label="Harga" name="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                                <Input size="md" type="text" label="Judul_Program" name="judul_program" value={judul} onChange={(e) => setJudul(e.target.value)} />
                                <Input size="md" type="text" label="List_Benefit" name="list_benefit" value={benefit} onChange={(e) => setBenefit(e.target.value)} />
                                <Input size="md" type="text" label="Periode_Program" name="periode_program" value={periode} onChange={(e) => setPeriode(e.target.value)} />
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
