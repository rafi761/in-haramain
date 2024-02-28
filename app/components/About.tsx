import AboutContent from "./AboutContent"

const About = () => {
    return (
        <section className="w-full h-[80vh] bg-[#EEEDEB] px-20 py-16 flex flex-row items-center max-lg:flex-col max-lg:gap-y-8 max-lg:h-auto max-lg:px-8" id="about">
            <AboutContent />
        </section>
    )
}

export default About