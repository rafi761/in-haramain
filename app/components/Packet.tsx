import PacketCard from "./PacketCard"

const Packet = () => {
    return (
        <section className="w-full h-auto bg-[#EEEDEB] px-20 py-8 flex flex-col gap-y-7 max-lg:px-4" id="packet">
            <h1 className="text-3xl text-black text-center mb-10">Paket Umroh <br className="lg:hidden" /> In-Haramain Tour</h1>

            <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 xl:grid-cols-3 gap-y-8">
                <PacketCard dataAos="zoom-in-down" src="paketreguler.jpg" programDay="Program 9 Hari" title="UMROH REGULER 9 HARI" price="Rp. 27.900.000" include1="Visa Umroh" include2="Tiket Ekonomi Class PP" include3="Hotel" include4="Makan" include5="Asuransi" include6="Perlengkapan Umroh" href="/paket1" />
                <PacketCard dataAos="zoom-in-up" src="paketreguler12.jpg" programDay="Program 12 Hari" title="UMROH REGULER 12 HARI" price="Rp. 30.900.000" include1="Visa Umroh" include2="Tiket Ekonomi Class PP" include3="Hotel" include4="TL & Muthawif" include5="Asuransi" include6="Perlengkapan Umroh" href="/paket1" />
                <PacketCard dataAos="zoom-in-down" src="umrohturki.jpg" programDay="Program 12 Hari" programKeberangkatan="Oktober" title="UMROH PLUS TURKI" price="Rp. 28.000.000" include1="Visa Umroh" include2="Tiket Ekonomi Class PP" include3="Hotel" include4="Paspor" include5="Asuransi" include6="Tips Guide Turki" href="/paket3" />
                <PacketCard dataAos="zoom-in-up" src="umrohsuper.jpeg" programDay="Program 9 Hari" programKeberangkatan="Oktober" title="UMROH SUPER PROMO" price="Rp. 22.750.000" include1="Visa Umroh" include2="Tiket Ekonomi Class PP" include3="Hotel" include4="Bus AC" include5="Mottowif" include6="Tour Leader" href="/paket2" />
            </div>
        </section>
    )
}

export default Packet