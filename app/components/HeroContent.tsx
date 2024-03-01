"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"
import { useEffect } from 'react';

const HeroContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <div className='flex justify-center items-center h-full' data-aos="fade-up">
            <div className="flex flex-col gap-y-8 z-10 max-w-[768px] text-center">
                <div className='flex flex-col gap-y-3'>
                    <p className="text-white text-3xl max-lg:px-8 max-md:text-base">PT. INTERNASIONAL HARAMAIN MAKKAH</p>
                    <p className='text-white text-2xl max-lg:px-8 max-md:text-base'>PPIU No. 2071220059084003</p>
                </div>
                <h1 className="text-5xl font-semibold text-white max-md:text-lg max-lg:px-8">LAYANAN UMRAH BERKUALITAS DAN TERBAIK UNTUK ANDA</h1>
                <p className="text-base text-white max-lg:px-8">Selamat datang di IN-HARAMAIN umrah tavel website, perusahaan jasa umrah berkualitas dan berpengalaman. Kami menawarkan paket perjalanan yang memberikan pengalaman umrah anda menjadi lebih berkesan</p>
                <Link href="/pendaftaran" className="px-3 py-2 rounded-2xl bg-[#EAC100] text-white w-fit mx-auto">Daftar Sekarang</Link>
            </div>
        </div>
    )
}

export default HeroContent