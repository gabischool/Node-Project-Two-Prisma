import { SiQuickbooks } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [menu, setMenu] = useState(true);
  return (
    <div className="w-full fixed top-0 left-0 right-0 p-2 shadow z-50 bg-white">
      <div className="w-[90%] mx-auto p-3 flex flex-col items-start md:flex-row justify-between md:items-center gap-4">
        <div className="w-full md:w-fit relative">
          <span className="flex flex-row justify-start items-center">
            <SiQuickbooks size={30} className=" text-[#00ABA8]" />
            <h1 className=" text-2xl font-medium italic">
              open<span className=" text-[#00ABA8]">library </span>
            </h1>
          </span>
          {menu ? (
            <AiOutlineMenu
              className="md:hidden block absolute right-4 top-2"
              size={25}
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <AiOutlineClose
              className="md:hidden block absolute right-4 top-2"
              size={25}
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
        <div
          className={` ${
            menu
              ? "hidden md:w-[80%] lg:w-[70%] md:flex  md:flex-row justify-around items-center gap-2"
              : "flex flex-col h-screen md:h-fit overflow-y-auto"
          } md:w-[80%] lg:w-[70%] flex flex-col md:flex-row justify-around items-center gap-2`}
        >
          <Link className="text-lg font-medium" to="/">
            Home
          </Link>
          <Link className="text-lg font-medium" to="/Bookspage">
            Books
          </Link>
          {/* <Link className="text-lg font-medium" to="/">
            Blogs
          </Link> */}
          <Link className="text-lg font-medium" to="/About">
            About
          </Link>
          <Link className="text-lg font-medium" to="/Contact">
            Contact
          </Link>
          <Link className="text-lg font-medium" to="/Login">
            Login
          </Link>
          <span className="flex flex-row justify-start items-center gap-4">
            <BiUserCircle size={20} />
            <span className="text-lg font-medium">Hi,miirshe</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
