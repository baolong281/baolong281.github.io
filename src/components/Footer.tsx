import { type NextPage } from "next";
import Image from "next/image";

const images = [
  "https://cyber.dabamos.de/88x31/icongallery.gif",
  "https://cyber.dabamos.de/88x31/internet-roadkill.gif",
  "https://i.ibb.co/9Hrh5pz/Untitled.png",
  "https://cyber.dabamos.de/88x31/49.gif",
  "https://cyber.dabamos.de/88x31/kero.gif",
  "https://cyber.dabamos.de/88x31/cs.gif",
  "https://cyber.dabamos.de/88x31/javabanner.gif",
  "https://cyber.dabamos.de/88x31/internetprivacy.gif",
  "https://cyber.dabamos.de/88x31/2001.gif",
  "https://cyber.dabamos.de/88x31/cd_rom.gif",
  "https://cyber.dabamos.de/88x31/hello_kitty.gif",
  "https://cyber.dabamos.de/88x31/l_32.gif",
  "https://cyber.dabamos.de/88x31/newlambda.gif",
  "https://cyber.dabamos.de/88x31/newgrounds.gif",
  "https://cyber.dabamos.de/88x31/web3no.gif",
  "https://cyber.dabamos.de/88x31/weblogo2.gif",
  "https://cyber.dabamos.de/88x31/btn6.gif",
  "https://cyber.dabamos.de/88x31/doingyourmom.gif"
];

const Footer: NextPage = () => {
  return (
    <>
      <div className="flex min-h-fit w-[80%] flex-wrap justify-center gap-1 overflow-hidden p-4 align-middle">
        {images.map((link, index) => (
          <Image
            src={link}
            key={index}
            alt="idk"
            height="31"
            width="88"
          ></Image>
        ))}
      </div>
    </>
  );
};

export default Footer;
