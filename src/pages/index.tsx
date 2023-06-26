import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";

export default function Home() {
  const [art, setArt] = useState("");

  useEffect(() => {
    const getArt = async () => {
      const response = await fetch("art.txt");
      const textContent = await response.text();
      console.log(textContent);
      setArt(textContent);
    };
    getArt();
  });

  return (
    <>
      <div className="flex flex-col justify-center gap-6 p-2 align-middle">
        <pre className="flex justify-center align-middle text-sm font-extrabold">
          {art}
        </pre>
        <div className="flex justify-center gap-3 align-middle text-3xl font-bold text-blue-700">
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
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
