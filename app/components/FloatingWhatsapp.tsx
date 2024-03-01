import Image from "next/image";
import Link from "next/link";

const FloatingWhatsapp = () => {
    return (
        <div className="fixed bottom-10 right-5 z-10">
            <Link href="https://wa.me/6283838732975" className="z-10 flex items-center gap-3">
                <Image
                    src="/images/whatsapp.png"
                    alt="WA Icon"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <p className="bg-green-400 px-3 py-2 text-white rounded-2xl">Pertanyaan & Konsultasi</p>
            </Link>
        </div>
    )
}

export default FloatingWhatsapp