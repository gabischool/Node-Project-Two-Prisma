import { Link } from "react-router-dom"
import { Books } from "../index";
const Bookspage = () => {
	return (
		<div className="w-full mt-24">
			<div className="w-[90%] mx-auto flex flex-col justify-start items-start gap-4 bg-white shadow-md rounded">
				<div className="p-4 w-full text-xl bg-[#00ABA8] text-white flex flex-col md:flex-row justify-start items-start gap-5"> 
				<Link to='/'>Home</Link>
				<span className="hiddden md:w-fit "> | </span>
				<Link to='/Book_operations'> AddBook </Link>
				</div>
				<Books/>
			</div>
		</div>
	)
}

export default Bookspage