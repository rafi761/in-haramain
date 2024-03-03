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
                                alt="Umroh Promo"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="/images/umrohturki.jpg"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">UMROH PLUS TURKI</h3>
                                    <p className="text-small text-foreground/80">Agustus - September 2024</p>
                                    <h1 className="text-large font-medium mt-2">Rp. 28.000.000</h1>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <p className="text-black text-base">In Haramain Travel Umroh Tour mengundang Anda untuk mengambil bagian dalam sebuah perjalanan rohani yang akan menyentuh jiwa, dengan paket Promo Umroh Plus Wisata ke Turki. Dengan program ini, Anda tidak hanya akan mendapatkan kesempatan untuk menunaikan ibadah umroh dengan penuh ketenangan dan kekhusyukan di Mekkah dan Madinah, tetapi juga akan menjelajahi keindahan alam, kekayaan budaya, dan situs bersejarah yang menakjubkan di Turki. Turki, negara yang berdiri di persimpangan antara Eropa dan Asia, menawarkan pemandangan alam yang menakjubkan, dari pegunungan yang megah hingga pantai yang indah, serta kota-kota yang dipenuhi dengan peninggalan sejarah yang memukau.</p>
                                <p className="text-black text-base">Paket promo kami dirancang untuk memberikan kenyamanan maksimal selama perjalanan Anda. Mulai dari penerbangan berkualitas, akomodasi hotel berbintang , hingga layanan transportasi yang nyaman, semuanya telah kami persiapkan untuk memastikan pengalaman umroh dan wisata Anda berlangsung lancar dan tak terlupakan. Selain itu, Anda akan didampingi oleh pemandu wisata berpengalaman yang akan membawa Anda menyelami kedalaman sejarah, keunikan budaya, serta kuliner khas Turki yang lezat. Dengan perpaduan sempurna antara ibadah dan eksplorasi, paket Promo Umroh Plus Wisata ke Turki dari In Haramain Travel Umroh Tour ini dirancang untuk memperkaya pengetahuan dan spiritual Anda.</p>
                                <p className="text-black text-base">Tak hanya itu, kami juga menawarkan berbagai kegiatan tambahan yang dapat Anda nikmati selama di Turki, seperti menikmati keindahan arsitektur masjid dan istana yang bersejarah. Setiap momen dalam perjalanan ini dijamin akan menjadi kenangan yang berharga dan memperkuat keimanan Anda. Bergabunglah dengan kami dalam paket Promo Umroh Plus Wisata ke Turki dan siapkan diri untuk pengalaman yang akan mengubah pandangan Anda tentang perjalanan rohani dan petualangan dunia. In Haramain Travel Umroh Tour, mitra perjalanan umroh dan wisata Anda menuju pengalaman yang tak terlupakan.</p>
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