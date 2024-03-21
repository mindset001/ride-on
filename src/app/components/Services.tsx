import { NextPage } from "next";
import { Service } from "@/Constant data";
import Image from "next/image";
import Link from "next/link";
interface Props {}
interface serviceInterface {
  title: string;
  details: string;
  image: any;
  button: string;
}
const Services: NextPage<Props> = ({}) => {
  return (
    <div className="Services">
      <h1>Our Services</h1>

      <div className="Services-content-container">
        {Service.map((service: serviceInterface, index: number) => {
          return (
            <div key={index} className="Services-content group">
              <div className="font-semibold text-xl sm:text-2xl leading-[24px] md:text-[28px] md:leading-[28px]">
                {service.title}
              </div>
              <div className="text-sm md:text-lg pt-9 group-hover:translate-y-[-16px] hover:duration-500 duration-500">
                {service.details}
              </div>
              <div className="flex justify-center pt-2 group-hover:translate-y-[-32px] group-hover:scale-90 hover:duration-500 duration-500">
                <Image
                  src={service.image}
                  alt={service.image}
                  className="size-[224px]"
                  style={{width: "auto", height: "auto"}}
                />
              </div>

              <Link
                href={""}
                className=" mb-7 text-center  text-nowrap opacity-0 group-hover:opacity-100 hover:duration-500 duration-500 font-bold py-3 px-10 rounded-lg shadow bg-[rgba(93,_98,_239,_1)] text-[rgba(250,251,252,1)]
"
              >
                {service.button}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
