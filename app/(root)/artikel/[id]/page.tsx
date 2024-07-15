import { db } from "@/lib/firebase/firebase"
import { doc, getDoc } from "firebase/firestore"

const formatText = (text: string) => {
    if (!text) return null; // Menangani kasus ketika teks tidak ada

    // Pecah teks berdasarkan tanda ":"
    const sections = text.split(/\r?\n/).map(section => section.trim()).filter(section => section !== "");

    return sections.map((section, index) => {
        // Cek apakah ada tanda ":"
        if (section.includes(':')) {
            const [title, ...contentParts] = section.split(':').map(part => part.trim());
            const content = contentParts.join(':');

            return (
                <div key={index}>
                    <p>{title}:</p>
                    {content && <p style={{ marginBottom: '1em' }}>{content}</p>}
                </div>
            );
        }

        // Jika tidak ada tanda ":", tampilkan sebagai paragraf biasa
        return <p key={index} style={{ marginBottom: '1em' }}>{section}</p>;
    });
};

const Page = async ({ params }: { params: { id: string } }) => {
    const docRef = doc(db, 'kontenartikel', params.id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return (
        <section className="w-full h-fit bg-[#EEEDEB] py-10 px-5 flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-8">
                <h1 className="text-5xl font-semibold text-black/80 text-center">{data?.judul_artikel}</h1>
                <div className="text-xl text-black/80">{data?.deskripsi && formatText(data?.deskripsi)}</div>
            </div>
        </section>
    )
}

export default Page