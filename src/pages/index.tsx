import Link from "next/link";
import { useEffect, useState } from "react";
import Block from "~/components/Block";
import Footer from "~/components/Footer";
import { getWorks } from "~/utils/getPosts";

export default function Home() {
  const [art, setArt] = useState("");
  const [altArt, setAltArt] = useState("");

  useEffect(() => {
    const getArt = async (): Promise<void> => {
      const response = await fetch("art.txt");
      const textContent = await response.text();
      setArt(textContent);
      const response2 = await fetch("butterfly.txt");
      const butterflyContent = await response2.text();
      setAltArt(butterflyContent);
    };
    void getArt();
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const worksSection = getWorks();

  return (
    <>
      <div className="flex flex-col justify-center gap-2 p-2 align-middle md:gap-4 md:p-4">
        <div className="mb-2 flex justify-center gap-4 align-middle md:gap-12">
          <pre className="flex justify-center align-middle text-[6px] font-extrabold text-green-600 hover:text-fuchsia-400 md:text-lg">
            {art}
          </pre>
          <pre className="flex justify-center align-middle text-[5px] text-green-600 hover:text-orange-700 md:mt-6 md:text-[11px]">
            {altArt}
          </pre>
        </div>
        <div className="flex justify-center gap-7 align-middle font-lato text-3xl font-bold text-blue-700 md:text-5xl">
          <Link
            href="#me"
            onClick={handleScroll}
            className="hover:text-red-600"
            id="me"
          >
            me
          </Link>
          <Link
            href="#works"
            onClick={handleScroll}
            className="hover:text-red-600"
          >
            works
          </Link>
          <Link href="./" className="hover:text-red-600">
            fun
          </Link>
          <Link
            href="#contact"
            className="hover:text-red-600"
            onClick={handleScroll}
          >
            contact
          </Link>
        </div>
        <div className="flex justify-center align-middle">
          <div className="flex justify-center gap-4 p-2 align-middle font-figtree md:w-[60%] md:gap-8">
            <div className="flex justify-center align-middle text-xl font-semibold md:text-4xl">
              {"Hi!\nIm Dylan."}
            </div>
            <div className="text-bafse flex justify-center align-middle md:text-2xl">
              {
                "I'm a student at The University of Texas at Austin studying Data Science and Mathematics. I'm currently interested in math and deep learning.
              }
            </div>
          </div>
        </div>
        <div
          className="md:mt-18 mt-6 flex flex-col justify-center align-middle"
          id="works"
        >
          <Block sections={worksSection} blockTitle={"works"} />
        </div>
        <div className="flex justify-center align-middle" id="contact">
          <div className="mt-2 flex flex-col justify-center p-2 align-middle font-figtree md:w-[60%] md:gap-2">
            <div className="flex justify-center align-middle text-xl font-semibold md:text-4xl">
              {"contact"}
            </div>

            <div className="flex flex-col text-base md:text-2xl">
              <Link
                href="https://github.com/baolong281"
                className="flex justify-center align-middle font-lato font-bold text-blue-700 hover:text-red-600"
              >
                github
              </Link>
            </div>
            <div className="flex flex-col text-base md:text-2xl">
              <Link
                href="mailto:dylanhuyn@gmail.com"
                className="flex justify-center align-middle font-lato font-bold text-blue-700 hover:text-red-600"
              >
                email
              </Link>
            </div>
            <div className="flex flex-col text-base md:text-2xl">
              <Link
                href="https://open.spotify.com/user/jcm6ov1y4ttqdnvmaxr4yv69u"
                className="flex justify-center align-middle font-lato font-bold text-blue-700 hover:text-red-600"
              >
                spotify
              </Link>
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
