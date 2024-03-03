import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
    return (
        <section className="w-full h-fit bg-[#EEEDEB] py-10 px-5 flex flex-col gap-y-7">
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
                                src="/images/paketreguler12.jpg"
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