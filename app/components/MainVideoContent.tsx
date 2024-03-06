const MainVideoContent = () => {
    return (
        <section className="w-full h-[80vh] bg-[#EEEDEB] px-20 pt-14 flex flex-row items-center max-lg:flex-col max-lg:gap-y-8 max-lg:h-auto max-lg:px-8">
            <div className="flex-1 flex flex-col  md:flex-row gap-6 items-center">
                <video width={320} height={240} controls autoPlay muted loop className="rounded-md">
                    <source src="/videos/video.webm" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#0B8457] text-3xl font-semibold">Keutamaan Ibadah Di Masjidil Haram</h1>
                    <p className="text-lg text-black">Masjidil Haram memiliki keutamaan yang sangat besar dalam Islam, karena merupakan tempat suci yang penuh berkah dan nilai spiritual. Setiap ibadah yang dilakukan di Masjidil Haram akan mendapatkan pahala yang berlipat ganda dibandingkan dengan ibadah yang dilakukan di tempat lain. Selain itu, masjid ini juga merupakan kiblat pertama dalam Islam, sehingga setiap ibadah di sana memiliki nilai sejarah dan simbolis yang sangat penting bagi umat Muslim. Dengan suasana yang penuh khusyuk dan keagungan, ibadah di Masjidil Haram memberikan pengalaman spiritual yang mendalam bagi para jamaah dan menjadi momen yang sangat istimewa dalam kehidupan seorang Muslim.
                        Salah satu hadits yang menerangkan tentang keutamaan ibadah di Masjidil Haram adalah hadits yang diriwayatkan oleh Imam Bukhari dan Imam Muslim, yang berasal dari Abdullah bin Abbas. Dalam hadits tersebut, Nabi Muhammad SAW bersabda, "Satu salat di Masjidku (Masjid Nabawi) lebih baik daripada seribu salat di masjid lain, kecuali Masjidil Haram, dan satu salat di Masjidil Haram lebih baik daripada seratus ribu salat di masjid selainnya." Hadits ini menegaskan keutamaan luar biasa dari ibadah yang dilakukan di Masjidil Haram, yang mendapatkan ganjaran yang jauh lebih besar dibandingkan dengan ibadah di tempat lain.</p>
                </div>
            </div>
        </section>
    )
}

export default MainVideoContent