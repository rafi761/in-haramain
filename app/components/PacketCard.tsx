"use client"

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Link from "next/link";

interface CardProps {
    dataAos?: string,
    gambar: string,
    durasi_program: string,
    judul_program: string,
    periode_program: string,
    harga: string,
    list_benefits: string[],
    href: string
}

const PacketCard = ({ dataAos, gambar, durasi_program, judul_program, periode_program, harga, list_benefits, href }: CardProps) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    let keyForMap = 1
    return (
        <Card className="py-4 w-fit mx-auto" data-aos={dataAos}>
            <CardHeader className="overflow-visible py-2flex justify-center">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl mx-auto"
                    src={gambar}
                    width={360}
                />
            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{durasi_program}</p>
                <small className="text-default-500">{periode_program}</small>
                <h4 className="font-bold text-large">{judul_program} <span className="text-lg text-black font-normal">/ {harga}</span></h4>

                <div className="flex flex-col gap-y-4 mt-3">
                    <h3>Harga Sudah Termasuk :</h3>
                    <div className="grid grid-cols-2 gap-y-2">
                        {list_benefits.map(item => (
                            <div key={keyForMap++} className="flex items-center gap-x-1 py-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7 h-7 flex-shrink-0" />
                                <p className="text-black text-base max-md:text-sm flex-shrink-1">{item}</p>
                            </div>
                        ))}
                    </div>
                    <Link href="/pendaftaran" className="px-3 py-2 bg-[#EAC100] rounded-lg text-white w-fit">
                        Daftar
                    </Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default PacketCard