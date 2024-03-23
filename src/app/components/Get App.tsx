import {
  GAAppleStoreD,
  GAAppleStoreM,
  GAGooglePlayD,
  GAGooglePlayM,
  GetAppImageD,
  GetAppImageM,
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
            src={GetAppImageD}
            className="size-full hidden md:block object-contain object-center"
            // style={{ width: "auto", height: "auto" }}
            alt="GetAppImageDesktop"
          />
          <Image
            src={GetAppImageM}
            className="size-full block md:hidden object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
            alt="GetAppImageMobile"
          />
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
          <div className="GetContentImage">
            <Link href={""}>
              <Image
                src={GAGooglePlayD}
                alt="GAGooglePlayD"
                className="w-[189px] mr-6 h-[56px] hidden md:block object-cover object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={GAGooglePlayM}
                alt="GAGooglePlayM"
                className="w-[135px] mr-[6.97px] h-[40px] block md:hidden object-cover object-center"
                // style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <Link href={""}>
              <Image
                src={GAAppleStoreD}
                alt="GAAppleStoreD"
                className="w-[168px] h-[56px] hidden md:block object-cover object-center"
                // style={{ width: "auto", height: "auto" }}
              />

              <Image
                src={GAAppleStoreM}
                alt="GAAppleStoreM"
                className="w-[120px] h-[40px] block md:hidden object-cover object-center"
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
