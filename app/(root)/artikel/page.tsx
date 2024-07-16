import ArtikelCard from "@/app/components/ArtikelCard"
import MainArtikelCard from "@/app/components/MainArtikelCard"
import ModalButton from "@/app/components/ModalButton"
import ModalButtonArtikel from "@/app/components/ModalButtonArtikel"
import SignOutButton from "@/app/components/SignOutButton"
import { db } from "@/lib/firebase/firebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { CiPillsBottle1, CiVideoOn, CiViewList } from "react-icons/ci"

interface Artikel {
    id: string;
    judul_artikel: string;
    link: string;
    deskripsi: string;
    gambar: string;
}

export const revalidate = 0;

const page = async () => {
    const collectionRef = collection(db, "kontenartikel")
    const paketCollectionSnapshot = await getDocs(collectionRef)
    const kontenArtikel = paketCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Artikel));
    return (
        <div className="w-full min-h-screen bg-[#EEEDEB] flex">
            <div className="flex flex-wrap gap-10 overflow-y-scroll p-10">
                {kontenArtikel.map((konten) => (
                    <MainArtikelCard key={konten.id} id={konten.id} judul_artikel={konten.judul_artikel} link={konten.link} deskripsi={konten.deskripsi} gambar={konten.gambar} />
                ))}
            </div>
        </div>
    )
}

export default page