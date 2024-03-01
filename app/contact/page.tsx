import Image from "next/image"

const page = () => {
    return (
        <section className="w-full h-fit bg-[#EEEDEB] px-36 py-20 grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-8 max-lg:gap-y-5">
            <div className="flex flex-col gap-y-5 justify-center">
                <h1 className="text-black text-4xl font-semibold max-md:text-2xl">Masukan Dari Anda <br /> Sangat Berarti Bagi Kami</h1>
                <p className="text-black text-base">Kami disini hadir untuk membantu segala pertanyaan atau masukan yang ingin anda sampaikan kepada kami</p>
                <p className="text-black text-base">Contact person kami tersedia selama 24 jam untuk membantu menyelesaikan pertanyaan atau masukkan-masukkan yang anda berikan</p>

                <div className="mt-10 flex flex-col gap-y-4">
                    <p className="text-black text-lg"><span className="font-semibold">Alamat Kantor</span> : Jl. Untung Suropati No. 60, PasarKliwon - Solo - JawaTengah</p>
                    <p className="text-black text-lg"><span className="font-semibold">Email</span> : ihm28.1.24@gmail.com</p>
                    <div className="flex gap-x-5">
                        <Image
                            src="/images/whatsapp.png"
                            alt="WA Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                        <p className="text-black text-lg"><span className="font-semibold">Whatsapp</span> : 085292984909</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center">
                <div className="relative w-full h-96">
                    <Image
                        src="/images/contact.png"
                        alt="Contact"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default page