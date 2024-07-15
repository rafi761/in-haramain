"use client"

import { db } from '@/lib/firebase/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import Image from 'next/image';

interface Video {
    id: string;
    judul_video: string;
    video: string
}

const VideoCard = ({ id, judul_video, video }: Video) => {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false); // State untuk menampilkan modal

    const handlePlayVideo = () => {
        setShowModal(true); // Menampilkan modal saat tombol play video ditekan
    };

    const handleCloseModal = () => {
        setShowModal(false); // Menyembunyikan modal
    };
    const deleteVideo = async (paketId: string) => {
        const docRef = doc(db, 'kontenvideo', paketId)

        await deleteDoc(docRef)
        router.refresh()
    }
    return (
        <div className="w-[320px] h-[250px] rounded-xl bg-white flex flex-col gap-3 justify-center">
            <Image src="/images/play.png" alt="play" width={80} height={80} className="mx-auto cursor-pointer" onClick={handlePlayVideo} />
            <div className='flex justify-between items-center p-4'>
                <h2 className="text-sm text-black max-w-[260px]">{judul_video}</h2>
                <AiOutlineDelete size={20} onClick={() => deleteVideo(id)} className="cursor-pointer text-black" />
                {/* <button  className="text-gray-500 hover:text-gray-700">
                    Play Video
                </button> */}
            </div>

            {/* Modal untuk menampilkan video */}
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <ModalContent>
                    <ModalHeader>{judul_video}</ModalHeader>
                    <ModalBody>
                        <video width="100%" controls autoPlay>
                            <source src={video} />
                        </video>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleCloseModal} color="danger" variant="solid" >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default VideoCard