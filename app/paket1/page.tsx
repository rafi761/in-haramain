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
                                alt="Umroh 9 Hari"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="/images/paketreguler.jpg"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">UMROH REGULER 9 HARI</h3>
                                    <p className="text-small text-foreground/80">Agustus - September 2024</p>
                                    <h1 className="text-large font-medium mt-2">Rp. 27.900.000</h1>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <p className="text-black text-base">Paket umroh 9 hari yang ditawarkan oleh Travel Umroh In-Haramain menjanjikan sebuah pengalaman spiritual yang mendalam dan menyeluruh. Keunggulan utama dari paket ini terletak pada efisiensi waktu tanpa mengurangi esensi ibadah umroh itu sendiri. Dengan durasi yang relatif singkat, jemaah dapat menikmati perjalanan rohani yang intens dan fokus, mengunjungi tempat-tempat suci di Mekkah dan Madinah. Paket ini dirancang khusus untuk memenuhi kebutuhan jemaah yang ingin menjalankan ibadah umroh dengan waktu yang terbatas, namun tetap menginginkan pengalaman yang berkualitas dan berkesan.</p>
                                <p className="text-black text-base">Keistimewaan lain dari paket umroh 9 hari ini adalah penyelenggaraannya yang sangat terorganisir dan perhatian terhadap detail dari pihak travel. Dari akomodasi, transportasi, hingga makanan, semua telah dipilih dengan seksama untuk memastikan kenyamanan maksimal bagi jemaah selama perjalanan. Penggunaan hotel yang dekat dengan Masjidil Haram di Mekkah dan Masjid Nabawi di Madinah memungkinkan jemaah untuk lebih sering melakukan ibadah di dua masjid suci tersebut dengan lebih mudah dan nyaman. Selain itu, pemandu spiritual yang berpengalaman dan berwawasan luas turut mendampingi, memberikan bimbingan dan penjelasan tentang manasik umroh serta sejarah dan keistimewaan tempat-tempat yang dikunjungi, sehingga menambah kedalaman makna perjalanan.</p>
                                <p className="text-black text-base">Tidak hanya fokus pada ibadah, paket umroh 9 hari ini juga memberikan kesempatan bagi jemaah untuk mengeksplorasi keindahan dan keunikan budaya setempat. Melalui kunjungan ke situs-situs bersejarah dan ikonik, jemaah dapat merasakan koneksi yang lebih dalam dengan sejarah Islam, memperkaya pengalaman spiritual mereka. Kesempatan untuk berinteraksi dengan sesama muslim dari berbagai negara juga membuka wawasan dan memperkuat rasa persaudaraan umat Islam. Dengan demikian, paket umroh 9 hari dari Travel Umroh In-Haramain tidak hanya menawarkan ibadah yang berkesan, tetapi juga pengalaman budaya dan sosial yang memperluas pemahaman dan kecintaan terhadap Islam.</p>
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