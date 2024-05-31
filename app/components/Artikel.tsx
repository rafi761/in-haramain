import PacketCard from "./PacketCard"
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import MainArtikelCard from "./MainArtikelCard";

interface Artikel {
    id: string;
    judul_artikel: string;
    deskripsi: string;
    gambar: string;
}

const Artikel = async () => {
    const collectionRef = collection(db, "kontenartikel")
    const paketCollectionSnapshot = await getDocs(collectionRef)
    const kontenArtikel = paketCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Artikel));
    return (
        <>
            {kontenArtikel.length > 0 && (
                <section className="w-full h-auto bg-[#EEEDEB] px-20 py-8 flex flex-col gap-y-7 max-lg:px-4" id="packet">
                    <h1 className="text-3xl text-black text-center mb-10">Artikel <br className="lg:hidden" /> In-Haramain Tour</h1>

                    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 xl:grid-cols-3 gap-y-8 max-md:justify-items-center">
                        {kontenArtikel.map(item => (
                            <MainArtikelCard key={item.id} id={item.id} judul_artikel={item.judul_artikel} deskripsi={item.deskripsi} gambar={item.gambar} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default Artikel