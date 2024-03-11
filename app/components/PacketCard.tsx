"use client"

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Link from "next/link";

interface CardProps {
    dataAos: string,
    src: string,
    programDay: string,
    programKeberangkatan?: string,
    title: string,
    price: string,
    include1: string,
    include2: string,
    include3: string,
    include4: string,
    include5: string,
    include6: string,
    href: string
}

const PacketCard = ({ dataAos, src, programDay, programKeberangkatan = 'Agustus - September 2024', title, price, include1, include2, include3, include4, include5, include6, href }: CardProps) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <Card className="py-4 w-fit mx-auto" data-aos={dataAos}>
            <CardHeader className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={`/images/${src}`}
                    width={360}
                />
            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{programDay}</p>
                <small className="text-default-500">{programKeberangkatan}</small>
                <h4 className="font-bold text-large">{title} <span className="text-lg text-black font-normal">/ {price}</span></h4>

                <div className="flex flex-col gap-y-4 mt-3">
                    <h3>Harga Sudah Termasuk :</h3>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center gap-x-1">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">{include1}</p>
                        </div>
                        <div className="flex items-center gap-x-1 ml-[-40px]">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">{include2}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">{include3}</p>
                        </div>
                        <div className="flex items-center gap-x-1 ml-[-40px]">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">{include4}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">{include5}</p>
                        </div>
                        <div className="flex items-center gap-x-1 ml-[-40px]">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">{include6}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                            <p className="text-black text-base max-md:text-sm">dll</p>
                        </div>
                    </div>
                    <Link href={href} className="px-3 py-2 bg-[#EAC100] rounded-lg text-white w-fit">
                        Detail Paket
                    </Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default PacketCard