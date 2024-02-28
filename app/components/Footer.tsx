import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-[#F5F7F8] px-24 py-16 flex flex-col gap-y-6 max-lg:px-8" id="footer">
            <div className="flex justify-between items-start gap-x-20 max-lg:flex-col gap-y-5">
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-3 items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Footer Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <p className="text-4xl text-[#EAC100] max-sm:text-3xl">IN-HARAMAIN</p>
                    </div>
                    <p className="text-base text-black">Dengan Langkah-langkah yang Dipandu oleh Keyakinan yang Mendalam dan Rasa Hormat yang Tak Tergoyahkan, Kami Mengajak Anda untuk Meresapi Setiap Detil dari Kehadiran Ilahi yang Maha Kuasa di Tanah Suci Haramain</p>
                    <div className="flex items-center gap-x-8">
                        <Link href="">
                            <FaInstagram size={28} className="text-black" />
                        </Link>
                        <Link href="">
                            <FaFacebook size={28} className="text-black" />
                        </Link>
                        <Link href="">
                            <FaTwitter size={28} className="text-black" />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h2 className="text-2xl text-[#EAC100]">HUBUNGI KAMI</h2>
                        <ul className="flex flex-col gap-y-2 text-black">
                            <li>Alamat : Jl. Untung Suropati No. 86, Pasar Kliwon</li>
                            <li>Whatsapp : 085292984909</li>
                            <li>E-mail : ihm28.1.24@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-y-5">
                    <h2 className="text-2xl text-[#EAC100]">LAYANAN</h2>
                    <ul className="flex flex-col gap-y-2 text-black">
                        <li>Paket Umroh</li>
                        <li>Panduan Umroh</li>
                        <li>Pelayanan Perjalanan</li>
                        <li>Pengurusan Visa</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-5">
                    <h2 className="text-2xl text-[#EAC100]">SUPPORT</h2>
                    <ul className="flex flex-col gap-y-2 text-black">
                        <li>Bantuan</li>
                        <li>Akun Saya</li>
                        <li>Tiket Saya</li>
                        <li>Tanya Jawab</li>
                        <li>Hubungi Kami</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-5">
                    <h2 className="text-2xl text-[#EAC100]">PERUSAHAAN</h2>
                    <ul className="flex flex-col gap-y-2 text-black">
                        <li>Tentang Kami</li>
                        <li>Artikel</li>
                        <li>Video</li>
                        <li>Berita</li>
                    </ul>
                </div>
            </div>

            <hr className="border-t-2 border-gray-400" />

            <p className="text-base font-semibold text-black">Copyright©2024, All rights reserved. Powered by In-Haramin IT support</p>
        </footer>
    )
}

export default Footer