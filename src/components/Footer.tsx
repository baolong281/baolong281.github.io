import { type NextPage } from "next";
import Image from "next/image";

const images = [
  "https://cyber.dabamos.de/88x31/jusadd.gif",
  "https://cyber.dabamos.de/88x31/icongallery.gif",
  "https://cyber.dabamos.de/88x31/imissxp.gif",
  "https://i.ibb.co/JBftTZn/Untitled.png",
  "https://cyber.dabamos.de/88x31/internet-roadkill.gif",
  "https://cyber.dabamos.de/88x31/madewithvi.gif",
  "https://i.ibb.co/9Hrh5pz/Untitled.png",
  "https://cyber.dabamos.de/88x31/chatroom2.gif",
  "https://cyber.dabamos.de/88x31/neovim.gif",
  "https://cyber.dabamos.de/88x31/brbutton.gif",
  "https://cyber.dabamos.de/88x31/crazyfrog.gif",
  "https://cyber.dabamos.de/88x31/cs.gif",
  "https://cyber.dabamos.de/88x31/javabanner.gif",
  "https://cyber.dabamos.de/88x31/internetprivacy.gif",
  "https://cyber.dabamos.de/88x31/gnubanner.gif",
  "https://i.ibb.co/fp7pStz/Untitled.png",
  "https://cyber.dabamos.de/88x31/mysqla.gif",
  "https://cyber.dabamos.de/88x31/top_6.gif",
  "https://cyber.dabamos.de/88x31/webclipart.gif",
  "https://cyber.dabamos.de/88x31/webpassion.gif",
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
