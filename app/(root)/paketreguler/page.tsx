import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

interface Paket {
    id: string;
    kategori: string;
    harga: string;
    periode_program: string;
    judul_program: string;
    durasi_program: string;
    gambar: string;
    list_benefit: string[]
    deskripsi: string;
}

export const revalidate = 0;

const page = async () => {
    const listPaketRef = collection(db, "listpaket");
    const q = query(listPaketRef, where("kategori", "==", "REGULER"));
    const paketListCollectionSnapshot = await getDocs(q)
    const listPaket = paketListCollectionSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    } as Paket));
    return (
        <section className="w-full h-fit bg-[#EEEDEB] py-10 px-5 flex flex-col gap-y-7">
            {listPaket.map((paket) => (
                <Card
                    key={paket.id}
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <Image
                                    alt={paket.judul_program}
                                    className="object-cover"
                                    height={200}
                                    shadow="md"
                                    src={paket.gambar}
                                    width="100%"
                                />
                            </div>

                            <div className="flex flex-col col-span-6 md:col-span-8 px-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-semibold text-foreground/90">{paket.judul_program}</h3>
                                        <p className="text-small text-foreground/80">{paket.durasi_program}</p>
                                        <h1 className="text-large font-medium mt-2">{`Rp. ${paket.harga}`}</h1>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-3 my-3">
                                    <p className="text-black text-base">{paket.deskripsi}</p>
                                </div>

                                <Link href="/pendaftaran" className="w-fit mt-2 px-3 py-2 rounded-2xl bg-[#EAC100] text-white">Daftar Sekarang</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </section>
    )
}

export default page