import { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useAddbookMutation } from '../../redux/bookSlice'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
const Book_operations = () => {
	const [ addbook ] = useAddbookMutation();
	const [ files , setFiles ] = useState(null);
	const [ selectedFiles , setSelectedFiles ] = useState('');
	const navigate = useNavigate();
	const handleFileChange = (e) => {
		setFiles(e.target.files[0])

		if(files){
			const setFile = URL.createObjectURL(files)
			setSelectedFiles(setFile);
		}
	}
	const initialValues = {
		b_name : '',
		b_category : '',
		b_price : '',
		b_trending :'',
		b_description : ''
	}
	const validationSchemas = Yup.object({
		b_name : Yup.string().required('book name is required'),
		b_category : Yup.string().required('book category is required'),
		b_price : Yup.string().required('book price is required'),
		b_trending : Yup.string().required('book trending is required'),
		b_description : Yup.string().required('book description is required')
	})

	const upload = async () => {
		try {

			let formdata = new FormData();
            formdata.append('file',files);
            const res = await axios.post("http://localhost:9000/api/upload",formdata)
            return res.data;
			
		} catch (error) {
			console.log(`error uploading : ${error.message}`);
		}
	}
	const handleSubmit = async (values , { resetForm }) => {
		try {
			const { b_name , b_category , b_price , b_trending , b_description } = values
			const image = await upload(); 
			await addbook({
				b_name : b_name,
				b_category : b_category,
				b_price : b_price,
				b_trending : b_trending,
				b_description : b_description,
				b_image : image
			}).then((res)=>{
				toast.success(res.message);
				navigate('/Dashboard/User_books')
			}).catch((err)=>{
				console.log(`success ${err}`);
			})
		} catch (error) {
			console.log(`error adding book content ${error.message}`);
		}
		resetForm();
	}
  return (
	<div className='w-full md:w-[90%] bg-slate-50'>
	<h4 className="p-4 w-full text-xl bg-[#00ABA8] text-white"> <Link to='/'>Home</Link>  / <span>Book Operations</span></h4>
		<Formik
		initialValues={initialValues}
		validationSchema={validationSchemas}
		onSubmit={handleSubmit}>
			<Form className='mt-5 flex flex-col justify-start pb-4 items-start gap-2 space-y-2'>
			<div className=' w-full grid grid-cols-1'>
					<div className='w-full relative'>
						{/* <img src="" alt="" /> */}
						<img className='w-32 mx-auto h-28 rounded-[50%]' src={selectedFiles} alt="" />
						<input id='file' name='file' className='w-full hidden absolute right-0 top-7  p-3 rounded outline-[#00ABA8]' type="file"
						onChange={handleFileChange} />
						<label className='absolute left-[55%] top-6 p-2 rounded-xl bg-[#00ABA8] text-white' htmlFor="file">upload</label>
					</div>
				</div>
				<div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mt-20'>
					<div className='w-full space-y-2'>
						<label htmlFor="" className=' text-lg text-[#00ABA8]'>Book Name</label>
						<Field className='w-full shadow p-3 rounded outline-[#00ABA8]' type='text' name='b_name' placeholder='Enter Book Name'/>
						<ErrorMessage name='b_name' component='div'/>
					</div>
					<div className='w-full space-y-2'>
						<label htmlFor="" className=' text-lg text-[#00ABA8]'>Book Category</label>
						<Field className='w-full shadow p-3 rounded outline-[#00ABA8]' as="select" name='b_category' placeholder='Enter Book Category'>
						<option value="science">science</option>
						<option value="motivated">motivated</option>
						<option value="philosophy">philosophy</option>
						<option value="story">story</option>
						</Field>
						<ErrorMessage name='b_category' component='div'/>
					</div>
				</div>
				<div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2'>
					<div className='w-full space-y-2'>
						<label htmlFor="" className=' text-lg text-[#00ABA8]'>Book Price</label>
						<Field className='w-full p-3 shadow rounded outline-[#00ABA8]' type='text' name='b_price' placeholder='Enter Book Price'/>
						<ErrorMessage name='b_price' component='div'/>
					</div>
					<div className='w-full space-y-2'>
						<label htmlFor="" className=' text-lg text-[#00ABA8]'>Book Trending</label>
						<Field className='w-full p-3 shadow rounded outline-[#00ABA8]' as="select" name='b_trending' placeholder='Enter Book Trending'>
						<option value="false">false</option>
						<option value="true">true</option>
						</Field>
						<ErrorMessage name='b_trending' component='div'/>
					</div>
				</div>
				<div className='w-[90%] space-y-2 mx-auto'>
					<label htmlFor="" className=' text-lg text-[#00ABA8]'>Book Description</label>
				<Field className='w-full p-3 rounded shadow outline-[#00ABA8]' as='textarea' name='b_description' placeholder='Enter Book Description'/>
				<ErrorMessage name='b_description' component='div'/>
				</div>
				<button className=" w-[90%] mx-auto text-lg shadow rounded p-3 bg-[#00ABA8] hover:bg-white text-white hover:text-[#00ABA8]" type="submit"> Sumbit </button>
			</Form>
		</Formik>
	</div>
  )
}

export default Book_operations