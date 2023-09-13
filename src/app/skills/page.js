import Heading from "@/components/Heading";
import ProgressBar from "@/components/ProgressBar";

export default function Skill() {
  return (
    <>
      <section className="skill bg-gray-100 h-screen w-full flex items-center justify-center">
        <main>
          <Heading heading="Skill" subHeading="My working skills" />
          <div className="flex items-center justify-start gap-20 mt-10">
            <div className="w-full md:1/2 flex items-center justify-end">
              <div className="progress-container">
                <ProgressBar name="HTML" value="94%" color="#DD4B25" />
                <ProgressBar name="CSS" value="80%" color="#254BDD" />
                <ProgressBar name="JavaScript" value="60%" color="#EFD81D" />
                <ProgressBar name="React JS" value="90%" color="#5ED3F3" />
                <ProgressBar name="Next JS" value="80%" color="#000" />
              </div>
            </div>
            <div className="w-full md:1/2">
              <div className="progress-container">
                <ProgressBar name="Node JS" value="60%" color="#87BF00" />
                <ProgressBar name="Wordpress" value="90%" color="#207196" />
                <ProgressBar name="Blogger" value="95%" color="#F75316" />
                <ProgressBar name="Shopify" value="90%" color="#91B947" />
                <ProgressBar name="WooCommerce" value="95%" color="#96598B" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
