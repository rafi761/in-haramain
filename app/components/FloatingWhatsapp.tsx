import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

const FloatingWhatsapp = () => {
    return (
        <div className="fixed bottom-10 right-10 z-10">
            <Link href="https://wa.me/6283838732975" className="z-10">
                <FaWhatsappSquare size={50} className="bg-green-400 rounded-lg" />
            </Link>
        </div>
    )
}

export default FloatingWhatsapp