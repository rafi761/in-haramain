import HeroContent from "./HeroContent"

const Hero = () => {
    return (
        <section className="relative w-full h-[calc(100vh-65px)] bg-cover bg-center bg-[url('/images/mekkah.jpg')] max-lg:h-auto max-lg:py-24">
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <HeroContent />
        </section>
    )
}

export default Hero