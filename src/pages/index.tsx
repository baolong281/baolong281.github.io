import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";

export default function Home() {
  const [art, setArt] = useState("");

  useEffect(() => {
    const getArt = async (): Promise<void> => {
      const response = await fetch("art.txt");
      const textContent = await response.text();
      setArt(textContent);
    };
    void getArt();
  });

  return (
    <>
      <div className="flex flex-col justify-center gap-2 p-2 align-middle md:gap-7 md:p-4 ">
        <pre className="flex justify-center align-middle text-[10px] font-extrabold text-green-600 md:text-sm">
          {art}
        </pre>
        <div className="flex justify-center gap-6 align-middle font-lato text-3xl font-bold text-blue-700 md:text-5xl">
          <Link href="./" className="hover:text-red-600">
            me
          </Link>
          <Link href="./" className="hover:text-red-600">
            works
          </Link>
          <Link href="./" className="hover:text-red-600">
            fun
          </Link>
          <Link href="./" className="hover:text-red-600">
            contact
          </Link>
        </div>
        <div className="flex justify-center align-middle">
          <div className="flex justify-center gap-2 p-2 align-middle font-opensans md:w-[65%] md:gap-6">
            <div className="flex justify-center align-middle text-xl font-semibold md:text-4xl">
              Hi!{"\n"}Im Dylan.
            </div>
            <div className="flex justify-center align-middle text-base md:text-2xl">
              I'm a student at The University of Texas at Austin studying Data
              Science and Mathematics. I'm interested in math, deep learning,
              computer vision, and system architecture.
            </div>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
