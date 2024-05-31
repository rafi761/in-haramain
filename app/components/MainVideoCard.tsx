"use client"

import { db } from '@/lib/firebase/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';

interface Video {
    id: string;
    judul_video: string;
    video: string
}

const MainVideoCard = ({ id, judul_video, video }: Video) => {
    return (
        <div className="w-[320px] h-[250px] rounded-xl bg-white">
            <video width="320" height="240" controls preload="none" className="rounded-xl" loop>
                <source src={video} />
            </video>
            <div className='flex justify-between items-center p-4'>
                <h2 className="text-sm text-black">{judul_video}</h2>
            </div>

        </div>
    )
}

export default MainVideoCard