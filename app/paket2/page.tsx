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
                                src="/images/paketvip.jpg"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">UMROH REGULER 12 HARI</h3>
                                    <p className="text-small text-foreground/80">Agustus - September 2024</p>
                                    <h1 className="text-large font-medium mt-2">Rp. 30.900.000</h1>
                                </div>
                            </div>

                            <h2 className="text-black text-lg font-semibold mt-4">Deskripsi :</h2>

                            <div className="flex flex-col gap-y-3">
                                <p className="text-black text-base">Paket umroh 12 hari yang ditawarkan oleh Travel Umroh In-Haramain dirancang untuk memberikan pengalaman ibadah yang lebih lengkap dan mendalam bagi para jemaah. Dengan durasi yang lebih panjang dibandingkan paket umroh 9 hari, jemaah diberikan kesempatan yang lebih luas untuk merenung dan beribadah dengan tenang, tidak tergesa-gesa. Periode ini memungkinkan jemaah untuk lebih banyak menghabiskan waktu di Masjidil Haram dan Masjid Nabawi, melaksanakan ibadah sunnah, serta memiliki waktu yang lebih banyak untuk doa dan tafakur. Keunggulan dari paket ini terletak pada kemampuan untuk mengalami kehidupan spiritual di dua kota suci dengan lebih intens, memberikan ruang lebih bagi pertumbuhan spiritual dan pemahaman agama yang lebih dalam.</p>
                                <p className="text-black text-base">Selain itu, paket umroh 12 hari menawarkan keistimewaan dalam aspek pendidikan dan eksplorasi. Dengan waktu yang lebih panjang, jemaah dapat mengikuti serangkaian kunjungan ke situs-situs bersejarah dan penting secara Islam di sekitar Mekkah dan Madinah, seperti Gua Hira, Jabal Rahmah, dan lain-lain. Perjalanan ini tidak hanya bertujuan untuk menambah pengetahuan tentang sejarah Islam, tetapi juga untuk memperkuat rasa kecintaan dan keterikatan pada ajaran-ajaran Islam. Pemandu spiritual dan ahli sejarah yang mendampingi dalam perjalanan ini akan memberikan penjelasan yang mendalam mengenai keistimewaan dan latar belakang historis dari setiap tempat yang dikunjungi, memperkaya pengalaman spiritual dan intelektual jemaah.</p>
                                <p className="text-black text-base">Keistimewaan lain dari paket umroh 12 hari ini adalah pengalaman sosial dan budaya yang lebih kaya. Dengan waktu yang lebih panjang, jemaah memiliki kesempatan yang lebih besar untuk berinteraksi dengan masyarakat lokal serta jemaah lain dari berbagai negara, memungkinkan pertukaran budaya dan pengalaman yang berharga. Interaksi ini menambah dimensi lain pada perjalanan ibadah, menggarisbawahi universalitas dan persaudaraan dalam Islam. Selain itu, pilihan akomodasi yang nyaman, layanan transportasi yang terorganisir dengan baik, dan pilihan kuliner yang disesuaikan dengan selera jemaah, semuanya dirancang untuk memastikan kenyamanan maksimal selama menjalankan ibadah. Paket umroh 12 hari dari Travel Umroh In-Haramain tidak hanya menjanjikan pelaksanaan ibadah umroh yang lengkap, tetapi juga pengalaman yang menyentuh berbagai aspek kehidupan, meninggalkan kesan mendalam dan perubahan positif dalam diri setiap jemaah.</p>
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