import { AiFillEdit } from "react-icons/ai"
import { BiShow } from "react-icons/bi"
import { TiDeleteOutline } from "react-icons/ti"
import { Link } from "react-router-dom"
import { MdOutlineAddCircle } from "react-icons/md"
const User_books = () => {
  return (
	<div className="w-[90%] mx-auto overflow-auto">
    <table className="w-full">
      <thead>
        <tr className="p-2  bg-slate-200">
          <th className="trCustom">B_Name</th>
          <th className="trCustom">B_Trending</th>
          <th className="trCustom">B_Price</th>
          <th className="trCustom">B_Category</th>
          <th className="trCustom">B_Image</th>
          <th className="trCustom">Actions</th>
        </tr>
      </thead>
      <tbody className="whitespace-nowrap">
        <tr className="text-start">
          <td className="text-center md:trCustom">Milion to one</td>
          <td className="text-center md:trCustom">true</td>
          <td className="text-center md:trCustom">$ 20</td>
          <td className="text-center md:trCustom">Motivated</td>
          <td className="text-center md:trCustom">
            <img className="w-14 h-10 rounded" src="image/book.png" alt="" />
          </td>
          <td className="trCustom flex flex-row justify-center items-center gap-2">
            <Link to="/Dashboard/Book_operations"><MdOutlineAddCircle className=" text-[#00ABA8]" size={25} /></Link>
            <BiShow className=" text-[#00ABA8]" size={25}/>
            <AiFillEdit className=" text-blue-500" size={25}/>
            <TiDeleteOutline className=" text-red-500" size={25}/>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
  )
}

export default User_books