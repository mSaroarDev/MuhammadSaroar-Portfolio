import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function ServiceCard({ icon, link, text }) {
  return (
    <div className="card bg-white w-64 h-40 p-6 border-b-2 border-[#FFAB00] rounded-md flex flex-col items-center justify-center shadow">
      <span className="text-5xl text-[#033a80]">{icon}</span>
      <h2 className="mt-3 text-lg font-bold">{text}</h2>
      <Link
        className="flex items-center justify-center gap-2 mt-2 text-[#033a80]"
        href={link}
      >
        See More <AiOutlineArrowRight />
      </Link>
    </div>
  );
}
