import Link from "next/link";
import Heading from "../Heading";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export default function ContactForm() {
  return (
    <div className="bg-gray-100 py-24">
      <main>
        <Heading heading="Contact" subHeading="Contact with us" />
        <div className="w-full max-w-2xl mx-auto mt-6">
          <form className="flex flex-col gap-1 items-center justify-center mb-16">
            <input
              type="text"
              placeholder="Input Your Name"
              className="input input-bordered w-full"
            />
            <br />
            <input
              type="text"
              placeholder="Input Your Email"
              className="input input-bordered w-full"
            />
            <br />
            <input
              type="text"
              placeholder="Input Your Mobile"
              className="input input-bordered w-full"
            />
            <br />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Input Message"
            ></textarea>
            <br />
            <button className="btn btn-wide btn-neutral">Send Message</button>
          </form>
        </div>

        <Heading heading="Follow us" />
        <div className="flex gap-5 items-center justify-center mt-6">
          <Link className="text-2xl text-[#033a80]" href="#">
            <GrFacebookOption />
          </Link>
          <Link className="text-2xl text-[#033a80]" href="#">
            <AiOutlineTwitter />
          </Link>
          <Link className="text-2xl text-[#033a80]" href="#">
            <AiFillInstagram />
          </Link>
          <Link className="text-2xl text-[#033a80]" href="#">
            <AiFillYoutube />
          </Link>
        </div>
      </main>
    </div>
  );
}
