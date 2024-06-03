import ModalButtonVideo from "@/app/components/ModalButtonVideo"
import SignOutButton from "@/app/components/SignOutButton"
import VideoCard from "@/app/components/VideoCard"
import { db } from "@/lib/firebase/firebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { CiPillsBottle1, CiVideoOn, CiViewList } from "react-icons/ci"

interface Video {
    id: string;
    judul_video: string;
    video: string
}

export const revalidate = 0;

const page = async () => {
    const collectionRef = collection(db, "kontenvideo")
    const paketCollectionSnapshot = await getDocs(collectionRef)
    const kontenVideo = paketCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Video));
    return (
        <div className="w-full min-h-screen bg-[#EEEDEB] flex ">
            <div className="flex flex-wrap gap-10 overflow-y-scroll p-10">
                {kontenVideo.map((video) => (
                    <VideoCard key={video.id} id={video.id} judul_video={video.judul_video} video={video.video} />
                ))}
            </div>
        </div>
    )
}

export default page