import Image from "next/image";
import MainPhoto from "../../../public/main.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div>
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
                    <AiFillInstagram />
                  </Link>
                </div>
                <div>
                  <Link className="text-3xl" href="/github">
                    <BiLogoFacebookCircle />
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-2xl font-medium">Hello, {`I'm`}</p>
                  <h1 className="text-5xl font-black my-2">Muhammad Sarowar</h1>
                  <p className="text-base font-medium">Web Developer</p>
                  <p className="max-w-sm w-full mt-3">
                    Lorem ipsum dolor sit amet cons adipisicing elit. Minima,
                    consectetur ullam?
                  </p>
                  <button className="btn btn-primary mt-4">
                    <FaCloudDownloadAlt /> Downlod CV
                  </button>
                </div>
              </div>
            </div>

            <div className="py-6">
              <Image
                src={MainPhoto}
                height={400}
                width={400}
                alt="Main"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
