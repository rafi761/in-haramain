import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
    return (
        <section className="w-full h-fit bg-[#EEEDEB] py-10 px-5">
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Umroh 12 Hari"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="/images/umrohsuper.jpeg"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">UMROH SUPER PROMO 9 HARI</h3>
                                    <p className="text-small text-foreground/80">Agustus - September 2024</p>
                                    <h1 className="text-large font-medium mt-2">Rp. 22.750.000</h1>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <p className="text-black text-base">In-Haramain Travel Umroh Tour mempersembahkan super promosi umroh 9 hari yang dirancang untuk memberikan pengalaman spiritual yang mendalam di Tanah Suci. Paket ini mencakup kunjungan ke Masjidil Haram di Mekkah dan Masjid Nabawi di Madinah, tempat jemaah dapat menunaikan ibadah dengan khusyuk dan merasakan kedamaian hati. Dengan akomodasi yang nyaman, transportasi terjadwal, dan layanan makan yang memenuhi standar kesehatan, promosi ini menawarkan perjalanan umroh yang tidak hanya memperkaya rohani tetapi juga nyaman secara fisik. Jemaah juga akan mendapatkan kesempatan untuk mengunjungi tempat-tempat bersejarah dan penting dalam sejarah Islam, yang akan membuat perjalanan ini menjadi lebih bermakna.</p>
                                <p className="text-black text-base">Keistimewaan promosi super umroh 9 hari dari In-Haramain Travel Umroh Tour tidak hanya terletak pada harga yang sangat kompetitif, tetapi juga pada layanan dan fasilitas premium yang ditawarkan. Dengan dukungan tim yang profesional dan berpengalaman, jemaah akan dibimbing sejak persiapan hingga pelaksanaan ibadah umroh, memastikan pengalaman yang lancar dan memuaskan. Paket ini dirancang untuk memenuhi kebutuhan berbagai kalangan, dari keluarga hingga individu yang mendambakan kedekatan spiritual dalam suasana yang eksklusif. Jangan lewatkan kesempatan emas ini untuk memperkuat iman dan menjalin kenangan tak terlupakan di tanah suci bersama In-Haramain Travel Umroh Tour.</p>
                            </div>

                            <Link href="/pendaftaran" className="w-fit mt-2 px-3 py-2 rounded-2xl bg-[#EAC100] text-white">Daftar Sekarang</Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </section>
    )
}

export default page