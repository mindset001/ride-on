import {
  About1,
  About2,
  About3,
  // AboutMobile1,
  // AboutMobile2,
  // AboutMobile3,
} from "@/assets";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <div className="About">
      <div className="About-Containers">
        <div className="About-Images">
          <Image
            src={About1}
            alt="About1"
            className="size-full block object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
          />
          {/* <Image
            src={AboutMobile1}
            alt="About1"
            className="size-full block md:hidden object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
          /> */}
        </div>
        <div className="About-Contents ml-0 md:ml-14">
          <h2>Faster Travel Times</h2>
          <p>
            Experience the thrill of arriving at your destination in record
            time. Our agile motorbikes maneuver through traffic with ease,
            ensuring you reach your destination.
          </p>
        </div>
      </div>
      <div className="About-Containers ">
        <div className="About-Contents mr-0 md:mr-14">
          <h2>Cost-Effective Rides</h2>
          <p>
            Enjoy affordable transportation without compromising on quality. Our
            motorbike rides come with competitive fares, helping you save money
            on your daily commute or spontaneous trips around town.
          </p>
        </div>
        <div className="About-Images">
          <Image
            src={About2}
            alt="About2"
            className="size-full block object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
          />
          {/* <Image
            src={AboutMobile2}
            alt="About2"
            className="size-full block md:hidden object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
          /> */}
        </div>
      </div>
      <div className="About-Containers">
        <div className="About-Images">
          <Image
            src={About3}
            alt="About3"
            className="size-full block object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
          />
          {/* <Image
            src={AboutMobile3}
            alt="About3"
            className="size-full block md:hidden object-cover object-center"
            // style={{ width: "auto", height: "auto" }}
          /> */}
        </div>
        <div className="About-Contents ml-0 md:ml-14">
          <h2>Convenient Pickup and Drop-off</h2>
          <p>
            Say goodbye to parking hassles and long walks to your destination.
            Our motorbike riders can pick you up and drop you off at your
            desired location, ensuring a seamless and convenient travel
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
