'use client'

import { db, storage } from "@/lib/firebase/firebase";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import mammoth from "mammoth"; // Untuk membaca file Word

export default function ModalButtonArtikel() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            if (!inputRef.current?.files?.length) {
                throw new Error('Mohon pilih file yang ingin diunggah.');
            }

            const file = inputRef.current.files[0];
            const fileType = file.type;

            if (fileType === 'application/pdf') {
                await handlePdfUpload(file);
            } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                await handleWordUpload(file);
            } else {
                throw new Error('Tipe file tidak didukung. Harap unggah file PDF atau Word.');
            }
        } catch (error) {
            console.error('Error saat mengunggah file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePdfUpload = async (file: File) => {
        const fileRef = ref(storage, `articles/${file.name}`);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);

        await saveArticleData(url);
    };

    const handleWordUpload = async (file: File) => {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const text = result.value;

        // Simpan teks atau lakukan apa yang diperlukan dengan teks hasil ekstraksi
        console.log('Teks dari file Word:', text);

        // Contoh menyimpan file Word sebagai bahan bacaan
        const fileRef = ref(storage, `articles/${file.name}`);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);

        await saveArticleData(url);
    };

    const saveArticleData = async (url: string) => {
        const collectionRef = collection(db, 'kontenartikel');
        await addDoc(collectionRef, {
            gambar: url,
            judul_artikel: judul,
            deskripsi: deskripsi,
            tanggal: new Date() // Misalnya tambahkan tanggal
        });

        setJudul("");
        setDeskripsi("");
        inputRef.current!.value = "";

        // Refresh halaman atau lakukan navigasi sesuai kebutuhan
        router.refresh();
        onClose();
    };

    return (
        <>
            <Button onPress={onOpen} className='px-3 py-2 bg-yellow-300 text-white text-base rounded-2xl'>Tambah Artikel</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-3">
                        <ModalHeader className="flex flex-col gap-1 text-black">Tambah Data Untuk Konten Artikel</ModalHeader>
                        <ModalBody>
                            <Input size="md" type="text" label="Judul Artikel" name="judul_artikel" value={judul} onChange={(e) => setJudul(e.target.value)} />
                            <input ref={inputRef} type="file" accept=".pdf,.docx" name="file" className="w-full bg-gray-100 rounded-xl p-2 text-gray-500" />
                            <Input size="md" type="text" label="Deskripsi" name="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                        </ModalBody>
                        <ModalFooter className="flex items-center gap-x-2">
                            <Button color="danger" variant="light" onClick={onClose}>
                                Close
                            </Button>
                            <Button color="primary" type="submit" disabled={isLoading}>
                                {isLoading ? 'Tunggu...' : 'Tambah'}
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}