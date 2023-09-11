import Heading from "@/components/Heading";
import MainPhoto from "../../../public/main.png";
import Image from "next/image";
import { BiSolidPhone } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function About() {
  return (
    <>
      <section className="about h-screen w-full flex items-center justify-center">
        <main>
          <Heading heading="About" subHeading="Introduction" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Image src={MainPhoto} height={300} width={300} alt="Main" />
            </div>
            <div>
              <div className="about-content p-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, neque non maxime soluta eveniet illo. Maiores
                  expedita, cupiditate vitae laboriosam doloremque temporibus.
                  Velit eum, dolor vitae delectus eveniet quisquam quod?
                </p>
                <div className="icons-details mt-5">
                  <div className="flex gap-4 items-center justify-start mb-3">
                    <FaUserTie /> Muhammad Sarowar
                  </div>
                  <div className="flex gap-4 items-center justify-start mb-3">
                    <BiSolidPhone /> +88017 98 456 380
                  </div>
                  <div className="flex gap-4 items-center justify-start mb-3">
                    <HiOutlineMail /> msaroar.dev@gmail.com
                  </div>
                  <div className="flex gap-4 items-center justify-start mb-3">
                    <AiOutlineInstagram /> instagram.com/msaroardev
                  </div>
                  <div className="flex gap-4 items-center justify-start mb-3">
                    <BsGithub /> github.io/msaroardev
                  </div>
                  <button className="btn btn-primary mt-4">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
