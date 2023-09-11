import FramewordCard from "../FrameworkCards";
import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoWordpress,
  BiLogoBlogger,
} from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs, SiShopify } from "react-icons/si";
import { FaNodeJs, FaStoreAlt } from "react-icons/fa";

export default function Frameworks() {
  return (
    <>
      <div className="bg-gray-100 py-5">
        <main>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <FramewordCard
              icon={<AiFillHtml5 />}
              text="HTML"
              iconColor="#DD4B25"
            />
            <FramewordCard
              icon={<BiLogoCss3 />}
              text="CSS"
              iconColor="#254BDD"
            />
            <FramewordCard
              icon={<BiLogoJavascript />}
              text="JavaScript"
              iconColor="#EFD81D"
            />
            <FramewordCard
              icon={<RiReactjsLine />}
              text="React"
              iconColor="#5ED3F3"
            />
            <FramewordCard
              icon={<SiNextdotjs />}
              text="Next JS"
              iconColor="#000"
            />
            <FramewordCard
              icon={<FaNodeJs />}
              text="Node JS"
              iconColor="#87BF00"
            />
            <FramewordCard
              icon={<BiLogoWordpress />}
              text="Wordpress"
              iconColor="#207196"
            />
            <FramewordCard
              icon={<BiLogoBlogger />}
              text="Blogger"
              iconColor="#F75316"
            />
            <FramewordCard
              icon={<SiShopify />}
              text="Shopify"
              iconColor="#91B947"
            />
            <FramewordCard
              icon={<FaStoreAlt />}
              text="WooCommerce"
              iconColor="#96598B"
            />
          </div>
        </main>
      </div>
    </>
  );
}
