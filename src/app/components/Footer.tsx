import {
  FacebookLogo,
  FooterLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsAppLogo,
} from "@/assets";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <div className="Footer">
      <div className="FooterOne">
        <div>
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            className="w-full h-auto max-w-12 md:max-w-[95px]"
          />
        </div>
        <div className="FooterOneContent">
          <div className="FooterOneLeft">
            <div className="FooterOneLeftContent mb-4 md:mb-6 lg:mb-8 xl:mb-10 ">
              Lorem ipsum dolor sit amet consectetur. Turpis facilisi ultricies
              sed felis mauris ornare et sit arcu. Odio nullam scelerisque dolor
              turpis.
            </div>
            <div className="FooterSocial">
              <Link href={""}>
                <Image src={FacebookLogo} alt="Facebook" />
              </Link>
              <Link href={""}>
                <Image src={WhatsAppLogo} alt="WhatsApp" />
              </Link>
              <Link href={""}>
                <Image src={LinkedinLogo} alt="Linkedin" />
              </Link>
              <Link href={""}>
                <Image src={InstagramLogo} alt="Instagram" />
              </Link>
            </div>
          </div>
          <div className="FooterOneRight">
            <div>
              <Link href={""}>Terms & Conditions</Link>
              <Link href={""}>Cookies</Link>
              <Link href={""}>Privacy Policy</Link>
            </div>
            <div>
              <Link href={""}>About Us</Link>
              <Link href={""}>Contact Us</Link>
              <Link href={""}>Be a Rider</Link>
            </div>
            <div>
              <Link href={""}>Terms & Conditions</Link>
              <Link href={""}>Privacy Policy</Link>
              <Link href={""}>Cookies</Link>
              <Link href={""}>Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4">© 2024 Demlinks Technologies</div>
    </div>
  );
};

export default Footer;
