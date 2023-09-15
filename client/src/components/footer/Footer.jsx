import { Link } from "react-router-dom"
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
	<footer className=" bg-[#242820] p-10 w-full mt-20">
		<div className="flex flex-col justify-center items-center gap-2 space-y-3">
			<h3 className="text-center text-lg md:text-3xl tracking-widest text-white uppercase">subscribe to our newsletter</h3>
			<p className="text-center text-base md:text-lg tracking-widestl text-[#818990]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab expedita est neque ex consectetur.</p>
			<div className="flex flex-row justify-start items-start">
				<input type="text" placeholder="Enter your email" className="p-3  md:w-72 outline-[#00ABA8]" />
				<button className="px-7 py-3 bg-[#00ABA8] text-white hover:bg-white hover:text-[#00ABA8]">Subscribe</button>
			</div>
		</div>
		<div className="w-full border-t-2 mt-10 border-t-[#818990] p-2">
			<div className=" flex flex-col md:flex-row justify-between items-center gap-5">
				<p className="text-lg tracking-wide md:tracking-widest text-white mt-3 capitalize">&copy; all researved 2023 by miirshe</p>
				<div className="flex flex-row justify-evenly items-center gap-4">
					<Link to=''><BsFacebook className="text-white hover:text-[#00ABA8]" size={22}/></Link>
					<Link to=''><BsWhatsapp className="text-white hover:text-[#00ABA8]" size={22}/></Link>
					<Link to=''><BsLinkedin className="text-white hover:text-[#00ABA8]" size={22}/></Link>
					<Link to=''><BsGithub className="text-white hover:text-[#00ABA8]" size={22}/></Link>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer