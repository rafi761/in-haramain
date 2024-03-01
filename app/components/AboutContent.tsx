"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image"
import { useEffect } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

const AboutContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <>
            <div className="flex-1 flex flex-col gap-y-4 px-4" data-aos="fade-down-right">
                <h3 className="text-base text-[#0B8457] font-semibold">TENTANG KAMI</h3>
                <h1 className="text-4xl text-black max-md:text-2xl">IN-HARAMAIN TOUR : UMROH BERKUALITAS & NOMOR 1</h1>
                <p className="text-base text-black">in-Haramain hadir dengan tujuan untuk menginspirasi, mempersiapkan, dan menyertai Anda dalam perjalanan Anda ke Tanah Suci. Kami memahami betapa pentingnya setiap langkah dalam perjalanan ke Baitullah, Masjid Nabawi, dan tempat-tempat suci lainnya. Oleh karena itu, kami berkomitmen untuk menyajikan informasi yang akurat, panduan praktis, dan layanan terbaik untuk memastikan pengalaman Anda berjalan lancar dan berkesan.</p>
                <hr className="border-t-2 border-gray-400" />
                <div className="w-full grid grid-cols-2 gap-y-3 max-lg:grid-cols-1">
                    <div className="flex items-center gap-x-3">
                        <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457]" />
                        <p className="text-black text-base">Memiliki Ijin Resmi</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457]" />
                        <p className="text-black text-base">Berpengalaman 10 Tahun Lebih</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457]" />
                        <p className="text-black text-base">Mutowif dan TL Kompeten</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457]" />
                        <p className="text-black text-base">Terjamin & Aman</p>
                    </div>
                </div>
            </div>
            <div className="relative lg:flex-1 w-full h-96">
                <Image
                    src="/images/about.jpg"
                    alt="About IN-HARAMAIN"
                    fill
                    className="object-cover border-8 border-white"
                />
            </div>
        </>
    )
}

export default AboutContent