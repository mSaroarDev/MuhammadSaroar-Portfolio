import Image from "next/image";
import Link from "next/link";

export default function Appnav() {
  const ProfileImage =
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  return (
    <div className="navbar shadow p-0 w-full z-50 top-0 fixed bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex-1">
          <a className="normal-case text-xl">Muhammad Sarowar</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center justify-center">
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Web Design</a>
                  </li>
                  <li>
                    <a>HTML, CSS & JS Template</a>
                  </li>
                  <li>
                    <a>Wordpress Website</a>
                  </li>
                  <li>
                    <a>Web Application</a>
                  </li>
                  <li>
                    <a>React JS Web Application</a>
                  </li>
                  <li>
                    <a>Next JS Web Application</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src={ProfileImage}
                      alt="Image"
                      height={100}
                      width={100}
                    />
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
