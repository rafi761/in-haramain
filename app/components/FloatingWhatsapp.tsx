import Image from "next/image";
import Link from "next/link";

const FloatingWhatsapp = () => {
    return (
        <div className="fixed bottom-10 right-10 z-10">
            <Link href="https://wa.me/6283838732975" className="z-10">
                <Image
                    src="/images/whatsapp.png"
                    alt="WA Icon"
                    width={50}
                    height={50}
                    className="object-contain"
                />
            </Link>
        </div>
    )
}

export default FloatingWhatsapp