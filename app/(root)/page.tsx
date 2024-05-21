import About from "../components/About";
import Hero from "../components/Hero";
import MainVideoContent from "../components/MainVideoContent";
import Packet from "../components/Packet";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F8F1D0]">
      <Hero />
      <MainVideoContent />
      <About />
      {/* @ts-expect-error Server Component */}
      <Packet />
    </main>
  );
}
