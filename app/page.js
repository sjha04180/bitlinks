import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const Merriweather = localFont({
  src: "./fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-Merriweather",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${Merriweather.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-24 text-center">
            We are the most straightforward URL shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className='flex gap-3 text-white mr-8'>
            <Link href="/shorten"><button className='bg-cyan-700 shadow-lg p-3 py-2 rounded-lg font-bold cursor-pointer'>Try Now</button></Link>
            <Link href="/github"><button className='bg-cyan-700 shadow-lg p-3 py-2 rounded-lg font-bold cursor-pointer'>Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image alt="an Image of a vector" src={"/vector2.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
