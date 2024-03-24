import {
  AppleStore,
  GAAppleStoreD,
  GAAppleStoreM,
  GAGooglePlayD,
  GAGooglePlayM,
  GetAppImage,
  // GetAppImageM,
  GooglePlay,
} from "@/assets";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const GetApp: NextPage<Props> = ({}) => {
  return (
    <div className="GetApp">
      <div className="GetApp-Body">
        <div className="GetAppImage flex justify-center">
          <Image
            src={GetAppImage}
            className="w-full h-auto max-w-[223px] md:max-w-[467px] block object-contain object-center"
            // style={{ width: "auto", height: "auto" }}
            alt="GetAppImage"
          />
          {/* <Image
            src={GetAppImageM}
            className="size-full block md:hidden object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
            alt="GetAppImageMobile"
          /> */}
        </div>
        <div className="GetAppContent">
          <div className="GetAppContentOne">
            <h2>Download RideON</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis facilisi ultricies
              sed felis mauris ornare et sit arcu. Odio nullam scelerisque dolor
              turpis.
            </p>
          </div>
          <div className="GetAppContentImage">
            <Link href={""} className="group mr-[6.97px] md:mr-4 lg:mr-6">
              {/* Desktop */}
              <Image
                src={GAGooglePlayD}
                alt="GAGooglePlayD"
                className=" w-[189px] h-[56px] hidden md:block md:group-hover:hidden object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={GooglePlay}
                alt="GAGooglePlayD"
                className=" w-[189px] h-[56px] hidden group-hover:hidden md:hidden md:group-hover:block object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              {/* Mobile */}
              <Image
                src={GAGooglePlayM}
                alt="GAGooglePlayM"
                className="w-[135px] h-[40px] block group-hover:hidden md:hidden object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />
              <Image
                src={GooglePlay}
                alt="GAGooglePlayM"
                className="w-[135px] h-[40px] hidden group-hover:block md:group-hover:hidden md:hidden object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <Link href={""} className="group">
              {/* Desktop */}
              <Image
                src={GAAppleStoreD}
                alt="GAAppleStoreD"
                className=" w-[168px] h-[56px] hidden md:block md:group-hover:hidden object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={AppleStore}
                alt="GAAppleStoreD"
                className=" w-[168px] h-[56px] hidden group-hover:hidden md:hidden md:group-hover:block object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              {/* Mobile */}
              <Image
                src={GAAppleStoreM}
                alt="GAAppleStoreM"
                className="w-[120px] h-[40px] block group-hover:hidden md:hidden object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={AppleStore}
                alt="GAAppleStoreM"
                className="w-[120px] h-[40px] hidden group-hover:block md:group-hover:hidden md:hidden object-contain object-center"
                // style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
