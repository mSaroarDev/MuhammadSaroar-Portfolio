import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ContactCard({
  icon,
  iconColor,
  color,
  title,
  value,
  btnText,
  btnLink,
}) {
  return (
    <>
      <div className="w-full md:w-1/3 max-w-full md:max-w-[350px] flex gap-6 shadow rounded mb-10">
        <div className="p-5 flex gap-7 items-center justify-center">
          <div
            style={{ color: iconColor, background: color }}
            className="w-12 h-12 rounded-full text-xl flex items-center justify-center"
          >
            {icon}
          </div>
          <div className="card-content">
            <p>{title}</p>
            <h2 className="w-full font-bold pb-3">{value}</h2>
            <hr />
            <Link href={`${btnLink}`}>
              <button className="mt-2 flex items-center justify-center gap-1 btn btn-ghost btn-sm bg-gray-100">
                {btnText} <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
