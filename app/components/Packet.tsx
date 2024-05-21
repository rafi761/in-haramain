import PacketCard from "./PacketCard"
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Paket {
    id: string;
    harga: string;
    periode_program: string;
    judul_program: string;
    durasi_program: string;
    gambar: string;
    list_benefit: string[]
}

const Packet = async () => {
    const collectionRef = collection(db, "listpaket")
    const paketCollectionSnapshot = await getDocs(collectionRef)
    const listPaket = paketCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Paket));
    return (
        <section className="w-full h-auto bg-[#EEEDEB] px-20 py-8 flex flex-col gap-y-7 max-lg:px-4" id="packet">
            <h1 className="text-3xl text-black text-center mb-10">Paket Umroh <br className="lg:hidden" /> In-Haramain Tour</h1>

            <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 xl:grid-cols-3 gap-y-8">
                {listPaket.map(item => (
                    <PacketCard key={item.id} href={`/${item.id}`} gambar={item.gambar} harga={item.harga} periode_program={item.periode_program} judul_program={item.judul_program} durasi_program={item.durasi_program} list_benefits={item.list_benefit} />
                ))}
            </div>
        </section>
    )
}

export default Packet