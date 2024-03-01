import PacketContent from "./PacketContent"

const Packet = () => {
    return (
        <section className="w-full h-auto bg-[#EEEDEB] px-20 py-8 flex flex-col gap-y-7 max-lg:px-4" id="packet">
            <h1 className="text-3xl text-black text-center mb-10">Paket Umroh <br className="lg:hidden" /> In-Haramain Tour</h1>

            <PacketContent />
        </section>
    )
}

export default Packet