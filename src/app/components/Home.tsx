import { AppleStore, GooglePlay, Logo } from "@/assets";
import { NextPage } from "next";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import BG from "@/public/publicAssets/BackgroundImage.png";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="Home relative">
      <Image
        src={BG}
        alt="Hero"
        fill
        priority
        className="hidden md:block size-full object-cover object-center absolute -z-10"
      />
      <div className="Header">
        <div className="size-auto">
          <Image src={Logo} alt="RideON" />
        </div>
        <div className="text-2xl block md:hidden">Ξ</div>
        <div className="Navbar">
          <Link href={""}>Help</Link>
          <Link href={""}>Contact Us</Link>
          <Link href={""}>Get App</Link>
        </div>
      </div>
      <div className="Home-Body">
        <div className="Home-Content">
          <h1>Ride Across the City with Ease</h1>
          <p>
            Whether you're going to work, seeing friends, or just exploring, our
            easy transportation option makes it simple to get around the city.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row items-center">
          <Link href={""} className="mb-5 mr-0 md:mb-0 md:mr-6">
            <Image
              src={GooglePlay}
              alt="Google Play"
              // className="size-1/2 md:size-[70%] lg:size-full"
              className="w-[189px] h-[56px]"
            />
          </Link>
          <Link href={""} className="">
            <Image
              src={AppleStore}
              alt="Apple Store"
              className="w-[189px] h-[56px] md:w-[168px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
