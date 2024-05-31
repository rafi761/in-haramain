"use client"

import { db } from '@/lib/firebase/firebase'
import TruncateParagraph from '@/lib/hooks/TruncateParagraph'
import { deleteDoc, doc } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

interface Artikel {
    id: string;
    judul_artikel: string;
    deskripsi: string;
    gambar: string;
}

const MainArtikelCard = ({ id, judul_artikel, deskripsi, gambar }: Artikel) => {
    const [truncatedText, setTruncatedText] = useState(deskripsi);

    const router = useRouter()

    useEffect(() => {
        const words = deskripsi.split(' ');
        if (words.length > 12) {
            setTruncatedText(words.slice(0, 12).join(' ') + '...');
        }
    }, [deskripsi]);

    return (
        <div className='w-[400px] h-[400px] bg-white rounded-xl flex flex-col justify-between'>
            <div className='relative w-full h-[180px] rounded-xl'>
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
                <Link href="" className="text-xs underline">
                    Read More..
                </Link>
            </div>
        </div>
    )
}

export default MainArtikelCard