import ContactCard from "@/components/ContactCard";
import Heading from "@/components/Heading";
import { AiOutlinePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiPaperPlane, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

export default function About() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <main>
          <Heading heading="Contact" subHeading="Connect With Us" />
          <div className="cards mt-10 flex flex-wrap items-center justify-between">
            <ContactCard
              icon={<AiOutlinePhone />}
              iconColor="#fff"
              color="#000"
              title="Phone"
              value="+88017 98 456 380"
              btnText="Call"
              btnLink="#"
            />

            <ContactCard
              icon={<BiPaperPlane />}
              iconColor="#fff"
              color="#E94335"
              title="Email"
              value="msaroar.dev@gmail.com"
              btnText="Send Email"
              btnLink="mail:msaroa.dev@gmail.com"
            />

            <ContactCard
              icon={<AiOutlineInstagram />}
              iconColor="#fff"
              color="#F302C6"
              title="Instagram"
              value="M Saroar"
              btnText="Go to Profile"
              btnLink="#"
            />

            <ContactCard
              icon={<FaFacebookF />}
              iconColor="#fff"
              color="#1773EA"
              title="Facebook"
              value="Muhammad Saroar"
              btnText="Facebook Profile"
              btnLink="#"
            />

            <ContactCard
              icon={<BiLogoLinkedin />}
              iconColor="#fff"
              color="#0963BC"
              title="Linkedin"
              value="Saroar Jahan"
              btnText="Check"
              btnLink="#"
            />

            <ContactCard
              icon={<PiGithubLogoFill />}
              iconColor="#fff"
              color="#000"
              title="Github"
              value="mSaroarDev"
              btnText="See Portfolio"
              btnLink="#"
            />
          </div>
        </main>
      </div>
    </>
  );
}
