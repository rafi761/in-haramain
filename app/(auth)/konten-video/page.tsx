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

const page = async () => {
    const collectionRef = collection(db, "kontenvideo")
    const paketCollectionSnapshot = await getDocs(collectionRef)
    const kontenVideo = paketCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Video));
    return (
        <div className="w-full min-h-screen bg-[#EEEDEB] flex">
            <div className="max-w-[300px] h-screen border-r-2 border-gray-400 px-6 py-4 flex flex-col justify-between max-xl:hidden">
                <div className="flex flex-col w-full gap-y-20">
                    <div className="flex items-center gap-x-4">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <h2 className="text-base text-black font-semibold">IN-HARAMAIN TOUR</h2>
                    </div>

                    <div className="flex flex-col gap-y-5">
                        <div className="flex items-center gap-x-3">
                            <CiViewList size={30} className="text-black" />
                            <Link href="/admin-page" className="text-sm text-black">
                                Paket Haji / Umroh
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <CiPillsBottle1 size={30} className="text-black" />
                            <Link href="/konten-artikel" className="text-sm text-black">
                                Konten Artikel
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <CiVideoOn size={30} className="text-black" />
                            <Link href="/konten-video" className="text-sm text-black">
                                Konten Video
                            </Link>
                        </div>
                    </div>
                </div>

                <SignOutButton />
            </div>

            <div className="fixed w-full bottom-0 xl:hidden">
                <div className="flex justify-between gap-y-5 p-4 bg-white rounded-xl">
                    <div className="flex items-center gap-x-3">
                        <CiViewList size={30} className="text-black" />
                        <Link href="/admin-page" className="text-sm text-black">
                            Paket Haji / Umroh
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <CiPillsBottle1 size={30} className="text-black" />
                        <Link href="/konten-artikel" className="text-sm text-black">
                            Konten Artikel
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <CiVideoOn size={30} className="text-black" />
                        <Link href="/konten-video" className="text-sm text-black">
                            Konten Video
                        </Link>
                    </div>
                    <div className="-mb-3">
                        <SignOutButton />
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8 h-screen flex flex-col gap-y-8 max-md:overflow-x-scroll max-lg:max-w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl text-black">Halaman Konten Video</h2>
                    <ModalButtonVideo />
                </div>

                <div className="flex flex-wrap gap-10 overflow-y-scroll ">
                    {kontenVideo.map((video) => (
                        <VideoCard key={video.id} id={video.id} judul_video={video.judul_video} video={video.video} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page