import Heading from "@/components/Heading";
import { BiCodeAlt, BiLogoWordpress } from "react-icons/bi";
import { SiCodeceptjs } from "react-icons/si";
import { BsFillMenuAppFill } from "react-icons/bs";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <>
      <section className="about h-screen w-full flex items-center justify-center">
        <main>
          <Heading heading="Services" subHeading="Services we provide" />
          <div className="cards flex flex-wrap items-center justify-center mt-10 gap-5">
            <ServiceCard
              icon={<SiCodeceptjs />}
              text="Web Design"
              link="/web-design"
            />
            <ServiceCard
              icon={<BiCodeAlt />}
              text="Web Development"
              link="/web-development"
            />
            <ServiceCard
              icon={<BsFillMenuAppFill />}
              text="Web Application"
              link="/web-application"
            />
            <ServiceCard
              icon={<BiLogoWordpress />}
              text="Wordpress"
              link="/wordpress-woocommerce"
            />
          </div>
        </main>
      </section>
    </>
  );
}
