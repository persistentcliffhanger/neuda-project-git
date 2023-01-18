import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import info from "./images/icons8-information-25.png";

function Header() {
  const fixedstyles = `fixed top-6 bottom-0 bg-black opacity-100 rounded-md w-460 md:auto mr:0 p-3 md:static transition-all`;
  const [burgervisable, setvisable] = useState(false);

  const toggleburger = () => {
    setvisable(!burgervisable);
  };

  return (
    <div className="sticky top-0">
      <div className="Header">
        <header className="bg-black text-white">
          <div className="container mx-2 items-center flex justify-between px-2">
            <button onClick={toggleburger} id="toggle" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="hover:animate-pulse mt-2">
              <a className="text-xl text-white pr-2 font-semibold" href="#">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 273.98 318.67"
                  height="100px"
                  width="100px"
                >
                  <defs></defs>
                  <path
                    className="cls-2"
                    d="M119.81,178.89v-40.09m46.67,40.09v101.11c0,3.26,.85,5.74,2.56,7.44,1.7,1.7,3.74,2.93,6.11,3.67l35.78,10.89v16.67H75.37v-16.67l36-10.89c2.67-.89,4.74-2.15,6.22-3.78,1.48-1.63,2.22-4.07,2.22-7.33v-101.11m46.67-39.73v39.73m-46.67-40.09V38.22c0-3.11-.82-5.48-2.44-7.11-1.63-1.63-3.63-2.81-6-3.56l-36-11.33V0H210.93V16.22l-35.78,11.33c-2.37,.74-4.41,1.97-6.11,3.67-1.7,1.7-2.56,4.04-2.56,7v100.94"
                  />
                  <text className="cls-1" transform="translate(16.81 173.11)">
                    <tspan x="0" y="0">
                      IDEMNIFY
                    </tspan>
                  </text>
                </svg>
              </a>
            </div>

            <button onClick={toggleburger} id="" className="md:hidden"></button>

            <nav
              id="nav"
              className={
                burgervisable
                  ? "right-0 " + fixedstyles
                  : "-right-full " + fixedstyles
              }
            >
              <ul className="md:flex">
                <li>{<Search />}</li>

                <li>
                  <h1>
                    <Link
                      to="/about"
                      className="block p-3 hover:text-white text-gray-500"
                    >
                      About
                    </Link>
                  </h1>
                </li>
                <li>
                  <NavLink
                    to="/addclaim"
                    className="block p-3 hover:text-white text-gray-500"
                  >
                    New QuikClaim
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allclaims"
                    className="block p-3 hover:text-white text-gray-500"
                  >
                    All Claims
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/landing"
                    className="block p-3 hover:text-white text-gray-500"
                  >
                    Landing
                  </NavLink>
                </li>
                
                <li>
                  <div className="">
                    <NavLink
                      to="/purpose" className="">
                      <a href="" className="block p-3">
                        <img
                          src={info}
                          alt=""
                          />
                      </a>
                    </NavLink>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
