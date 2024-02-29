import Image from "next/image"

const page = () => {
    return (
        <section className="w-full h-fit bg-[#EEEDEB] px-36 py-20 grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-8 max-lg:gap-y-5">
            <div className="w-full h-full flex items-center">
                <div className="relative w-full h-96">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-3 justify-center">
                <h1 className="text-black text-3xl font-semibold max-md:text-2xl">Profil singkat Travel Umroh <br className="lg:hidden" /> In - Haramain
                </h1>
                <p className="text-black text-base">Travel Umroh In-Haramain telah lama dikenal sebagai salah satu penyelenggara perjalanan umroh yang terpercaya dan berpengalaman di Indonesia. Didirikan dengan misi untuk memfasilitasi umat Islam dalam melaksanakan ibadah umroh dengan nyaman, aman, dan mendalam, Travel Umroh In-Haramain menawarkan berbagai paket umroh yang dirancang untuk memenuhi kebutuhan dan keinginan beragam jemaah. Dengan pengalaman bertahun-tahun dalam menyelenggarakan perjalanan spiritual ke tanah suci, agen ini telah berhasil membangun reputasi yang kuat berkat komitmennya terhadap layanan berkualitas tinggi, kepuasan jemaah, dan perhatian terhadap setiap detail perjalanan.</p>
                <p className="text-black text-base">Salah satu keistimewaan Travel Umroh In-Haramain adalah penawaran paket umroh yang sangat beragam, mulai dari paket ekonomi hingga eksklusif, serta paket tematik yang dirancang khusus untuk memenuhi kebutuhan spiritual, pendidikan, dan eksplorasi. Setiap paket dirancang dengan mempertimbangkan aspek kenyamanan, keamanan, dan pengalaman spiritual jemaah. Dengan menggunakan jasa akomodasi yang terbaik, transportasi yang nyaman, dan menyediakan pemandu spiritual yang berpengalaman, Travel Umroh In-Haramain bertujuan untuk menjadikan setiap perjalanan umroh sebagai pengalaman yang tidak terlupakan. Selain itu, kehadiran tim pendukung yang responsif dan siap sedia membantu jemaah dengan berbagai kebutuhan mereka selama di tanah suci, menambah nilai plus bagi layanan yang diberikan.</p>
            </div>
        </section>
    )
}

export default page