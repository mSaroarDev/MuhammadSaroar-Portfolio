import Image from "next/image";
import MainPhoto from "../../../public/main.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Link from "next/link";
import styles from "../css/animate.module.css";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <main>
          <div className="h-screen flex w-full items-center justify-between">
            <div className="flex gap-20">
              <div className="icons-links flex flex-col items-center gap-2 justify-center">
                <div>
                  <Link className="text-3xl" href="/github">
                    <AiFillGithub />
                  </Link>
                </div>
                <div className="my-5">
                  <Link className="text-3xl" href="/github">
                    <AiFillInstagram className="text-[#9C09E9]" />
                  </Link>
                </div>
                <div>
                  <Link className="text-3xl" href="/github">
                    <BiLogoFacebookCircle className="text-[#1773EA]" />
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-2xl font-medium text-white">
                    Hello, {`I'm`}
                  </p>
                  <h1 className="text-5xl text-[#FFAB00] font-bold my-2">
                    Muhammad Sarowar
                  </h1>
                  <p className="text-base font-medium text-white">
                    Web Developer
                  </p>
                  <p className="max-w-sm w-full mt-3 text-white">
                    Your strategic partner for web success – expert web
                    development and programming.
                  </p>
                  <button className="btn bg-[#FFAB00] mt-4 text-white hover:bg-[#F67777] border-0">
                    <FaCloudDownloadAlt /> Download CV
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Image
                className={styles.imageContainer}
                src={MainPhoto}
                height={400}
                width={400}
                alt="Main"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
