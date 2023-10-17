import { SiQuickbooks } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useGetUserProfileQuery } from "../../redux/userSlice";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const Header = () => {
  const [getAuth, setAuth] = useState(false);
  const token = Cookies.get('authToken')
  useEffect(() => {
    if (token) {
      setAuth(true);
    } else {
      setAuth(false)
    }
  }, [token])
  const { data: user = {} } = useGetUserProfileQuery()
  const [menu, setMenu] = useState(true);

  const handleLogout = () => {
    Cookies.remove('authToken')
    toast.success('successfully logged out')
    window.location.replace('/')
  }

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
          className={` ${menu
            ? "hidden md:w-[70%] lg:w-[50%] md:flex  md:flex-row justify-around items-center gap-2"
            : "flex flex-col h-screen md:h-fit overflow-y-auto"
            } md:w-[70%] lg:w-[50%] flex flex-col md:flex-row justify-around items-center gap-2`}
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
          { !getAuth ?  <Link className="text-lg font-medium" to="/Login">Login</Link> : " "}

          { getAuth ? <button className="text-lg font-medium" onClick={() => handleLogout()}>Logout</button>  : " " }

          {
            user?.username ? <span className="flex flex-row justify-start items-center gap-4">
              <BiUserCircle size={20} />
              <span className="text-lg font-medium">Hi,miirshe</span>
            </span> : " "
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
