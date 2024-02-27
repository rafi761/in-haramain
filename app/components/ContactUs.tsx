import { Input } from "@nextui-org/react";

const ContactUs = () => {
    return (
        <section className="w-full h-[80vh] flex flex-col gap-y-5 bg-[#D7E4C0] px-48 py-20">
            <div className="flex flex-col gap-y-2 text-center max-w-3xl mx-auto">
                <h1 className="text-3xl text-black">Hubungi Kami</h1>
                <p className="text-base text-black">Kami senang mendengar dari Anda! Apakah Anda memiliki pertanyaan, masukan, atau ingin berbagi pengalaman Anda dengan kami? Jangan ragu untuk menghubungi tim kami.</p>
            </div>
            <div className="w-full h-[50vh] flex bg-white rounded-xl">
                <div className="relative w-[360px] h-full rounded-xl bg-cover bg-center bg-[url('/images/contactus.jpg')]">
                    <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                </div>

                <div className="flex-1 h-full flex flex-col gap-y-4">
                    <div className="grid grid-cols-2">
                        <Input type="text" name="Nama" label="Nama" />
                        <Input type="email" name="Email" label="Email" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs