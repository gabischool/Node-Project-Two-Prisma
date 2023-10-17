import { ErrorMessage, Field, Form, Formik } from "formik"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { BsTelephoneFill } from "react-icons/bs"
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { PiAddressBookLight } from "react-icons/pi"
import { Link } from "react-router-dom"

const Contact = () => {
	const [ getAuth , setAuth] = useState(false);
	const token = Cookies.get('authToken')
	useEffect(()=>{
		if(token){
			setAuth(true); 
		}else{
			setAuth(false)
		}
	},[token])
	return (
		<div className="w-full mt-24">
			<div className="w-[90%] mx-auto flex flex-col justify-start items-start gap-2">
				<h4 className="p-4 w-full text-xl bg-[#00ABA8] text-white"> <Link to='/'>Home</Link>  / <span>Contact</span></h4>
				<h1 className="w-full mt-8 text-center text-2xl md:text-4xl tracking-widest uppercase">get in touch</h1>
				<p className="w-full mt-4 md:w-[40%] mx-auto text-xl tracking-wide text-center">large online bookstore offer used books for free too individuals wishing to get free books your excited</p>
				<div className="w-full mt-5 grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4">
					<div className="flex flex-row justify-center items-center gap-4">
						<BsTelephoneFill className="text-[#00ABA8]" size={27} />
						<h4 className="text-xl tracking-widest">618302314</h4>
					</div>
					<div className="flex flex-row justify-center items-center gap-5">
						<MdOutlineMarkEmailUnread className="text-[#00ABA8]" size={30} />
						<h4 className="text-xl tracking-widest">miirshe@gmail.com</h4>
					</div>
					<div className="flex flex-row justify-center items-center gap-5">
						<PiAddressBookLight className="text-[#00ABA8]" size={30} />
						<h4 className="text-xl tracking-widest">miirshe@gmail.com</h4>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-4 mt-10">
					<div className="w-full">
						<img className="w-[80%] h-[60%]" src="image/map.png" alt="" />
					</div>
					<Formik>
						<Form className="w-full flex flex-col justify-start items-start space-y-5">
							<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className=" space-y-1">
									<Field className='w-full p-4 shadow outline-[#00ABA8]' type='text' name='name' placeholder='Enter Your Name' />
									<ErrorMessage name="name" component='div' className="text-red-500" />
								</div>
								<div className=" space-y-1">
									<Field className='w-full p-4 shadow outline-[#00ABA8]' type='email' name='email' placeholder='Enter Your Email' />
									<ErrorMessage name="email" component='div' className="text-red-500" />
								</div>
							</div>
							<div className="w-full grid grid-cols-1 space-y-1">
								<Field className='w-full p-4 shadow outline-[#00ABA8]' type='text' name='subject' placeholder='Enter Your Subject' />
								<ErrorMessage component='div' name="subject" className="text-red-500" />
							</div>
							<div className="w-full grid grid-cols-1 space-y-1">
								<Field className='w-full p-4 shadow outline-[#00ABA8]' as='textarea' name='message' placeholder='Enter Your Subject' />
								<ErrorMessage component='div' name="message" className="text-red-500" />
							</div>
							{
								getAuth ? <button className=" w-full text-lg shadow rounded p-3 bg-[#00ABA8] hover:bg-white text-white hover:text-[#00ABA8]" type="submit">submit</button>

								: <Link className=" w-full text-lg shadow rounded p-3 bg-[#00ABA8] hover:bg-white text-white hover:text-[#00ABA8]" to='/Login'>submit</Link>
							}
							
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default Contact