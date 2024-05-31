import PacketCard from "./PacketCard"
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import MainArtikelCard from "./MainArtikelCard";
import VideoCard from "./VideoCard";
import MainVideoCard from "./MainVideoCard";

interface Video {
    id: string;
    judul_video: string;
    video: string
}

const Video = async () => {
    const collectionRef = collection(db, "kontenvideo")
    const paketCollectionSnapshot = await getDocs(collectionRef)
    const kontenVideo = paketCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Video));
    return (
        <>
            {kontenVideo.length > 0 && (
                <section className="w-full h-auto bg-[#EEEDEB] px-20 py-8 flex flex-col gap-y-7 max-lg:px-4" id="packet">
                    <h1 className="text-3xl text-black text-center mb-10">Konten Video <br className="lg:hidden" /> In-Haramain Tour</h1>

                    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 xl:grid-cols-3 gap-y-8 max-md:justify-items-center">
                        {kontenVideo.map(video => (
                            <MainVideoCard key={video.id} id={video.id} judul_video={video.judul_video} video={video.video} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default Video