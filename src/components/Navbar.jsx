import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../dataLinks/NavLinks";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <nav className="bg-slate-900 text-white p-3">
      <section className="max-w-[90%] lg:max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="mb-2 md:mb-0">
          <h1 className="text-2xl font-bold">
            <Link to="/">SlamBook</Link>
          </h1>
        </div>
        <div className="flex items-center text-lg gap-2 list-none">
          {navLinks?.map((navlink) => {
            return (
              <li
                key={navlink?.id}
                className={`text-white/90 ${
                  location?.pathname === navlink?.redirectUrl &&
                  "text-white border-b-2 border-white"
                } `}
              >
                <Link to={navlink?.redirectUrl}>{navlink?.title}</Link>
              </li>
            );
          })}
        </div>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="search"
            className="p-2 rounded-md text-black outline-none"
          />
          <button
            type="submit"
            className="text-lg bg-pink-500 font-semibold rounded-md px-4 py-2"
          >
            Search
          </button>
        </div>
      </section>
    </nav>
  );
}
