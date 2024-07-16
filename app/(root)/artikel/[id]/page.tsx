import { db } from "@/lib/firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import Image from "next/image";

import parse from 'html-react-parser';


// const formatDescription = (description: string) => {
//     if (!description) return '';

//     // Split by colon or period that ends a sentence, but keep the delimiter in the result
//     return description.split(/(:|(?<!\d)\.(?!\d))/).map((part, index, array) => {
//         // Trim whitespace and add line break if it ends with colon or period
//         const trimmedPart = part.trim();
//         if (trimmedPart.endsWith(':')) {
//             return trimmedPart + '<br />';  // Add two line breaks after colon
//         }
//         if (trimmedPart.endsWith('.') && array[index + 1] !== undefined && !array[index + 1].match(/^\d/)) {
//             return trimmedPart + '<br />';  // Add one line break after period
//         }
//         // Check if it's a sentence without numbering
//         if (!trimmedPart.match(/^\d+\./) && index > 0) {
//             return '<br />' + trimmedPart;
//         }
//         return trimmedPart;
//     }).join('');
// };

const Page = async ({ params }: { params: { id: string } }) => {
    const docRef = doc(db, 'kontenartikel', params.id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    const formattedArtikel = data?.artikel;
    return (
        <section className="w-full h-fit bg-[#EEEDEB] py-10 px-5 flex flex-col gap-y-7">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-y-8">
                    <h1 className="text-4xl font-semibold text-black/80 text-center">{data?.judul_artikel}</h1>
                    <div className="relative w-[500px] h-[300px] mx-auto">
                        <Image src={data?.gambar} alt="Image" fill className="rounded-md" />
                    </div>
                    {parse(formattedArtikel)}
                </div>
            </div>
        </section>
    )
}

export default Page