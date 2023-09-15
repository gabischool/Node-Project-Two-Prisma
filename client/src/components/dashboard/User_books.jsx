import { AiFillEdit } from "react-icons/ai"
import { BiShow } from "react-icons/bi"
import { TiDeleteOutline } from "react-icons/ti"
const User_books = () => {
  return (
	<div className="w-[90%] mx-auto ">
    <table className="w-full table-auto">
      <thead>
        <tr className="p-2 bg-slate-200">
          <th className="trCustom">B_Name</th>
          <th className="trCustom">B_Trending</th>
          <th className="trCustom">B_Price</th>
          <th className="trCustom">B_Category</th>
          <th className="trCustom">B_Image</th>
          <th className="trCustom">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-start">
          <td className="trCustom">Milion to one</td>
          <td className="trCustom">true</td>
          <td className="trCustom">$ 20</td>
          <td className="trCustom">Motivated</td>
          <td className="trCustom">
            <img className="w-14 h-10 rounded" src="image/book.png" alt="" />
          </td>
          <td className="trCustom flex flex-row justify-center items-center gap-2">
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