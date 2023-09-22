// import { LiaBlogSolid } from "react-icons/lia"
// import { PiBooksLight } from "react-icons/pi"
// import { useGetbooksQuery } from "../../redux/bookSlice";

// const User_dash = () => {
// 	const { data : books = [] } = useGetbooksQuery();
//   return (
// 	<div className="w-[90%] bg-slate-50">
// 		<div className="w-full grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
// 			<div className="p-5 bg-[#00ABA8] rounded text-white shadow flex flex-row justify-center items-center gap-5">
// 				<LiaBlogSolid size={70}/>
// 				<div className=" space-y-2">
// 					<p className=" text-lg uppercase">Blogs</p>
// 					<p className=" text-lg italic">300</p>
// 				</div>
// 			</div>

// 			<div className="p-5 bg-red-500 rounded text-white shadow flex flex-row justify-center items-center gap-5">
// 				<PiBooksLight size={70}/>
// 				<div className=" space-y-2">
// 					<p className=" text-lg uppercase">Books</p>
// 					<p className=" text-lg italic">{books.length}</p>
// 				</div>
// 			</div>
// 			<div className="p-5 bg-blue-500 rounded text-white shadow flex flex-row justify-center items-center gap-5">
// 				<PiBooksLight size={70}/>
// 				<div className=" space-y-2">
// 					<p className=" text-lg uppercase">Orders</p>
// 					<p className=" text-lg italic">300</p>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
//   )
// }

// export default User_dash