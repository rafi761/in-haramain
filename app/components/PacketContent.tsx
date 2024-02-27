"use client"

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PacketContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <div className="grid grid-cols-2 gap-x-12 max-md:grid-cols-1 max-md:gap-y-8">
            <Card className="py-4 w-fit mx-auto" data-aos="zoom-in-down">
                <CardHeader className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-contain rounded-xl"
                        src="/images/paketreguler.jpg"
                        width={360}
                    />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Program 9 Hari</p>
                    <small className="text-default-500">Agustus - September 2024</small>
                    <h4 className="font-bold text-large">UMROH REGULER <span className="text-lg text-black font-normal">/ Rp. 27.900.000</span></h4>

                    <div className="flex flex-col gap-y-4 mt-3">
                        <h3>Harga Sudah Termasuk :</h3>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Visa Umroh</p>
                            </div>
                            <div className="flex items-center gap-x-1 ml-[-40px]">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Tiket Ekonomi Class PP</p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Hotel</p>
                            </div>
                            <div className="flex items-center gap-x-1 ml-[-40px]">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Makan</p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Asuransi</p>
                            </div>
                            <div className="flex items-center gap-x-1 ml-[-40px]">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Perlengkapan Umroh</p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">dll</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="py-4 w-fit mx-auto" data-aos="zoom-in-up">
                <CardHeader className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="/images/paketvip.jpg"
                        width={360}
                    />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Program 9 Hari</p>
                    <small className="text-default-500">Agustus - September 2024</small>
                    <h4 className="font-bold text-large">UMROH VIP <span className="text-lg text-black font-normal">/ Rp. 30.000.000</span></h4>

                    <div className="flex flex-col gap-y-4 mt-3">
                        <h3>Harga Sudah Termasuk :</h3>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Visa Umroh</p>
                            </div>
                            <div className="flex items-center gap-x-1 ml-[-40px]">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Tiket Ekonomi Class PP</p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Hotel</p>
                            </div>
                            <div className="flex items-center gap-x-1 ml-[-40px]">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">TL & Muthawif</p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Asuransi</p>
                            </div>
                            <div className="flex items-center gap-x-1 ml-[-40px]">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">Perlengkapan Umroh</p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <IoIosCheckmarkCircleOutline size={35} className="text-[#0B8457] max-sm:w-7" />
                                <p className="text-black text-base max-md:text-sm">dll</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default PacketContent