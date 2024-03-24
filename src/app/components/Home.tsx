"use client";

import { AppleStore, GooglePlay, Logo } from "@/assets";
import { NextPage } from "next";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
// import DesktopBG from "@/";
// import DesktopBG from "./publicAssets/BackgroundImage.png";
// import MobileBG from "@/public/publicAssets/Mobile BG.png";
import { useState } from "react";
import { DesktopBG, MobileBG } from "../../../public/publicAssets";
// import { useClient } from "next-auth/react";
interface Props {}

const Home: NextPage<Props> = ({}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const NavToggle = (): any => {
    return setToggle(!toggle);
  };

  // useClient();
  return (
    <div className="Home relative">
      <Image
        src={DesktopBG}
        alt="Hero"
        rel="preload"
        fill
        priority={true}
        className="hidden md:block size-full object-cover object-center absolute -z-10"

        // style={{ width: "auto", height: "auto" }}
      />
      <Image
        src={MobileBG}
        alt="Hero"
        rel="preload"
        fill
        priority={true}
        className="block md:hidden size-full object-cover object-center absolute -z-10"
        // style={{ width: "auto", height: "auto" }}
        sizes="auto"
      />
      <div className="Header">
        <div className="size-auto">
          <Image src={Logo} className="w-full h-auto max-w-[116px]" alt="RideON" />
        </div>
        <div
          className="text-2xl font-semibold block md:hidden"
          onClick={NavToggle}
        >
          ☰
        </div>
        <div className={`Navbar ${toggle ? "flex md:flex" : "hidden md:flex"}`}>
          <Link href={""} onClick={() => setToggle(false)}>
            Help
          </Link>
          <Link href={""} onClick={() => setToggle(false)}>
            Contact Us
          </Link>
          <Link href={""} onClick={() => setToggle(false)}>
            Get App
          </Link>
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
