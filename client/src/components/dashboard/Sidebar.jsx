import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
	<div className="w-[90%] italic text-white  bg-[#00ABA8] mx-auto shadow rounded p-5">
		<div className="flex flex-col md:flex-row justify-between items-start gap-1 ">
			<Link className=" text-lg" to='/Dashboard/User_dash'>Dashboard</Link>
			<Link className=" text-lg" to='/Dashboard/User_books'>Books</Link>
			<Link className=" text-lg" to='/Dashboard/User_blogs'>Blogs</Link>
			<Link className=" text-lg" to='/Dashboard/User_blogs'>Users</Link>
			<Link className=" text-lg" to='/Dashboard/User_profile'>Profile</Link>
		</div>
	</div>
  )
}

export default Sidebar