"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { storage } from "@/lib/firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import Image from 'next/image';
import Link from 'next/link';

interface Artikel {
    id: string;
    judul_artikel: string;
    link: string;
    deskripsi: string;
    gambar: string;
}

const MainArtikelCard = ({ id, judul_artikel, link, deskripsi, gambar }: Artikel) => {
    const [truncatedText, setTruncatedText] = useState(deskripsi);

    const router = useRouter()

    useEffect(() => {
        const words = deskripsi.split(' ');
        if (words.length > 12) {
            setTruncatedText(words.slice(0, 12).join(' ') + '...');
        }
    }, [deskripsi]);

    // const handleDownload = async () => {
    //     try {
    //         // Mendapatkan URL file dari Firebase Storage
    //         const fileRef = ref(storage, gambar);
    //         const url = await getDownloadURL(fileRef);

    //         // Membuat elemen anchor untuk memulai unduhan otomatis
    //         const link = document.createElement('a');
    //         link.href = url;
    //         // Menetapkan nama file
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     } catch (error) {
    //         console.error('Error saat mengunduh file:', error);
    //     }
    // };

    return (
        <div className='w-[400px] h-[400px] bg-white rounded-xl flex flex-col'>
            <div className='relative w-[250px] h-[250px] bg-red-500 mx-auto rounded-xl mt-4'>
                <Image
                    src={gambar}
                    alt="img1"
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <h2 className='px-3 py-2 text-black font-semibold'>{judul_artikel}</h2>
            <p className='p-3 text-black'>{truncatedText}</p>
            <div className='flex justify-end p-5 text-black'>
                <a href={link} target="_blank" className='text-sx'>
                    See more..
                </a>
            </div>
        </div>
    )
}

export default MainArtikelCard