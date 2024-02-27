import FormPendaftaran from "../components/FormPendaftaran"

const page = () => {
    return (
        <section className="w-full min-h-screen bg-[#EEEDEB] px-20 py-16 flex flex-col gap-y-8 max-lg:px-4">
            <h1 className="text-3xl text-black">PENDAFTARAN JAMAAH UMROH</h1>

            <FormPendaftaran />
        </section>
    )
}

export default page