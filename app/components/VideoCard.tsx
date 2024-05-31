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

const VideoCard = ({ id, judul_video, video }: Video) => {
    const router = useRouter()
    const deleteVideo = async (paketId: string) => {
        const docRef = doc(db, 'kontenvideo', paketId)

        await deleteDoc(docRef)
        router.refresh()
    }
    return (
        <div className="w-[320px] h-[250px] rounded-xl bg-white">
            <video width="320" height="240" controls preload="none" className="rounded-xl" loop>
                <source src={video} />
            </video>
            <div className='flex justify-between items-center p-4'>
                <h2 className="text-sm text-black">{judul_video}</h2>
                <AiOutlineDelete size={20} onClick={() => deleteVideo(id)} className="cursor-pointer text-black" />
            </div>

        </div>
    )
}

export default VideoCard