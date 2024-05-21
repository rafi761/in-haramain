'use client'

import { updatePaket } from "@/lib/actions/action";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";
import { FaRegEdit } from "react-icons/fa";

interface Paket {
    id: string;
    harga: string;
    periode_program: string;
    judul_program: string;
    durasi_program: string;
    gambar: string;
    list_benefit: string[]
}


export default function ModalButtonUpdate({ id, harga, periode_program, judul_program, durasi_program, gambar, list_benefit }: Paket) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const ref = useRef<HTMLFormElement>(null)

    return (
        <>
            <Button onPress={onOpen} className="bg-none"><FaRegEdit size={20} /></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    {(onClose) => (
                        <form ref={ref} action={async (formData) => {
                            ref.current?.reset()
                            await updatePaket(formData, id)
                            onClose()
                        }} className="w-full flex flex-col gap-y-3">
                            <ModalHeader className="flex flex-col gap-1 text-black">Update Paket</ModalHeader>
                            <ModalBody>
                                <Input size="md" type="text" label="Durasi_Program" name="durasi_program" defaultValue={durasi_program} />
                                <Input size="md" type="text" label="Gambar" name="gambar" defaultValue={gambar} />
                                <Input size="md" type="text" label="Harga" name="harga" defaultValue={harga} />
                                <Input size="md" type="text" label="Judul_Program" name="judul_program" defaultValue={judul_program} />
                                <Input size="md" type="text" label="List_Benefit" name="list_benefit" defaultValue={list_benefit.toString()} />
                                <Input size="md" type="text" label="Periode_Program" name="periode_program" defaultValue={periode_program} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <SubmitButton />
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
