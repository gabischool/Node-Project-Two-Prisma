import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { TbPrinter } from 'react-icons/tb'
import { FcIdea } from 'react-icons/fc'
const Services = () => {
  return (
	<section className="w-full p-2 mt-16">
		<div className="grid grid-cols-1 md:grid-cols-4 gap-5">

			<div className="p-5 cursor-pointer rounded border-2 shadow hover:border-[#00ABA8] hover:shadow-2xl flex flex-col justify-center items-center gap-2 space-y-2">
				<MdOutlineDeliveryDining className='text-[#00ABA8]' size={40}/>
				<h1 className='text-2xl tracking-tighter'>Free Shipping</h1>
				<p className='text-xl tracking-tighter text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo.</p>
			</div>

			<div className="p-5 cursor-pointer rounded border-2 shadow hover:border-[#00ABA8] hover:shadow-2xl flex flex-col justify-center items-center gap-2 space-y-2">
				<BiUserCircle className='text-[#00ABA8]' size={40}/>
				<h1 className='text-2xl tracking-tighter'>Engage New User</h1>
				<p className='text-xl tracking-tighter text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo.</p>
			</div>

			<div className="p-5 cursor-pointer  rounded border-2 shadow hover:border-[#00ABA8] hover:shadow-2xl flex flex-col justify-center items-center gap-2 space-y-2">
				<TbPrinter className='text-[#00ABA8]' size={40}/>
				<h1 className='text-2xl tracking-tighter'>Printed Books Available</h1>
				<p className='text-xl tracking-tighter text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo.</p>
			</div>

			<div className="p-5 cursor-pointer  rounded border-2 shadow hover:border-[#00ABA8] hover:shadow-2xl flex flex-col justify-center items-center gap-2 space-y-2">
				<FcIdea className='text-[#00ABA8]' size={40}/>
				<h1 className='text-2xl tracking-tighter'>Develop An Idea</h1>
				<p className='text-xl tracking-tighter text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo.</p>
			</div>
			
		</div>
	</section>
  )
}

export default Services