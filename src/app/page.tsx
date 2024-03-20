import { NextPage } from "next";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import GetApp from "./components/Get App";
import Footer from "./components/Footer";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="font-Urbanist">
      <Home />
      <Services />
      <About />
      <GetApp />
      <Footer />
    </div>
  );
};

export default Page;
