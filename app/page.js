import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";
import Typewriter from "@/components/Typewriter";

const poppins = localFont({
  src: "./fonts/Poppins-BoldItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="h-screen grid grid-cols-2">
        <div className="flex flex-col w-110 md:w-full gap-6 justify-center items-center">
          <p className={`text-3xl mx-2 text-center md:ml-0 font-bold ${poppins.className}`}>The best URL Shortner in the world</p>
          <div className="flex flex-col gap-6">
          <p className="text-sm px-19 fleex flex-col gap-2">Most of the platforms will track you, or ask for login credentials, but we solve your problem and value your privacy.</p>
            <Typewriter/>
          </div>
          <div className="flex gap-3 justify-start py-5">
              <Link href="/shorten"><button className='hover:-translate-y-1 transition-all bg-blue-500 text-white shadow-lg py-2.5 p-4.5 rounded-lg font-bold'>Try Now</button></Link>
              <Link target="_blank" href="/hg"><button className='hover:-translate-y-1 transition-all border border-black shadow-lg py-2 p-4 rounded-lg'>Github</button></Link>
          </div>
        </div> 
        <div className="flex justify-start md:relative w-100 h-50 md:w-full md:h-full -ml-50 md:ml-0">
          <Image className="mix-blend-darken" width={900} height={100} alt="image of a vector" src={"/vector.avif"} loading="eager" />
        </div> 
      </section>
      
    </main>
  );
}
