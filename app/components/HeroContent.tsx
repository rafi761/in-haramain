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
            <div className="flex flex-col gap-y-4 z-10 text-center sm:max-w-[768px] sm:gap-y-8">
                <div className='flex flex-col gap-y-3'>
                    <p className="text-white text-sm px-2 xs:text-xl lg:text-3xl sm:px-8">PT. INTERNASIONAL <br className='sm:hidden' /> HARAMAIN MAKKAH</p>
                    <p className='text-white text-sm px-2 xs:text-base lg:text-2xl sm:px-8'>PPIU No. 2071220059084003</p>
                </div>
                <h1 className="text-5xl font-semibold text-white max-md:text-lg max-lg:px-8">LAYANAN UMRAH BERKUALITAS DAN TERBAIK UNTUK ANDA</h1>
                <p className="text-base text-white max-lg:px-8">Selamat datang di IN-HARAMAIN umrah tavel website, perusahaan jasa umrah berkualitas dan berpengalaman. Kami menawarkan paket perjalanan yang memberikan pengalaman umrah anda menjadi lebih berkesan</p>
                <Link href="/pendaftaran" className="px-3 py-2 rounded-2xl bg-[#EAC100] text-white w-fit mx-auto">Daftar Sekarang</Link>
            </div>
        </div>
    )
}

export default HeroContent