import Link from "next/link";
import { useEffect, useState } from "react";
import Block, { BlockSection, Post } from "~/components/Block";
import Footer from "~/components/Footer";

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

  const post: Post = {
    title: "img2math",
    description: "chrome extension for converting images into TeX code",
    links: [
      {
        sourceLink: "https://github.com/baolong281/img2math",
        linkTitle: "github",
      },
    ],
  };

  const blockSection: BlockSection = {
    posts: [post],
    sectionTitle: "deep learning",
  };

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
          <div className="flex justify-center gap-4 p-2 align-middle font-figtree md:w-[60%] md:gap-8">
            <div className="flex justify-center align-middle text-xl font-semibold md:text-4xl">
              {"Hi!\nIm Dylan."}
            </div>
            <div className="flex justify-center align-middle text-base md:text-2xl">
              {
                "I'm a student at The University of Texas at Austin studying Data Science and Mathematics. I'm interested in math, deep learning, computer vision, and system architecture."
              }
            </div>
          </div>
        </div>
        <div className="md:mt-18 mt-6 flex flex-col justify-center align-middle">
          <Block sections={[blockSection]} blockTitle={"works"} />
        </div>
        <div className="flex justify-center align-middle">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
