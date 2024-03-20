import { NextPage } from "next";
import { Service } from "@/Constant data";
import Image from "next/image";
interface Props {}
interface serviceInterface {
  title: string;
  details: string;
  image: any;
}
const Services: NextPage<Props> = ({}) => {
  return (
    <div className="Services">
      <h1>Our Services</h1>

      <div className="Services-content-container">
        {Service.map((service: serviceInterface, index: number) => {
          return (
            <div key={index} className="Services-content">
              <div className="font-semibold text-2xl leading-[24px] md:text-[28px] md:leading-[28px]">{service.title}</div>
              <div className="text-sm md:text-lg">{service.details}</div>
              <div className="flex justify-center">
                <Image src={service.image} alt={service.image} />
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
