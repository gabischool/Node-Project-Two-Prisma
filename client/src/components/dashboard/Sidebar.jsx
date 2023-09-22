import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
	<div className="w-[20%] h-[60vh]  text-white  bg-[#00ABA8] shadow rounded p-5">
		<div className="flex flex-col justify-between items-start gap-1 ">
			<Link className=" text-lg tracking-tighter" to='/Dashboard/User_books'>MyBooks</Link>
			<Link className=" text-lg tracking-tighter" to='/Dashboard/User_blogs'>MyBlogs</Link>
			<Link className=" text-lg tracking-tighter" to='/Dashboard/Book_operations'>AddBooks</Link>
			<Link className=" text-lg tracking-tighter" to='/Dashboard/User_profile'>MyProfile</Link>
		</div>
	</div>
  )
}

export default Sidebar