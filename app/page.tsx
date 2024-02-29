import About from "./components/About";
import Hero from "./components/Hero";
import Packet from "./components/Packet";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F8F1D0]">
      <Hero />
      <About />
      <Packet />
    </main>
  );
}
