import { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const Book_operations = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [filePreview, setFilePreview] = useState('');
  
	const handleFileChange = (event) => {
	  const file = event.target.files[0];
	  setSelectedFile(file);
  
	  if (file) {
		const fileURL = URL.createObjectURL(file);
		setFilePreview(fileURL);
	  }
	};
  
  return (
	<div className='w-full md:w-[90%] mx-auto'>
		<Formik>
			<Form className='flex flex-col justify-start items-start gap-2 space-y-2'>
			<div className=' w-full grid grid-cols-1'>
					<div className='w-full relative'>
						{/* <img src="" alt="" /> */}
						<img className='w-32 mx-auto h-28 rounded-[50%]' src={filePreview} alt="" />
						<input id='file' name='file' className='w-full hidden absolute right-0 top-7  p-3 rounded outline-[#00ABA8]' type="file"
						onChange={handleFileChange} />
						<label className='absolute left-[55%] top-6 p-2 rounded-xl bg-[#00ABA8] text-white' htmlFor="file">upload</label>
					</div>
				</div>
				<div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mt-20'>
					<div className='w-full'>
						<Field className='w-full shadow p-3 rounded outline-[#00ABA8]' type='text' name='b_name' placeholder='Enter Book Name'/>
						<ErrorMessage name='b_name' component='div'/>
					</div>
					<div className='w-full'>
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
					<div className='w-full'>
						<Field className='w-full p-3 shadow rounded outline-[#00ABA8]' type='text' name='b_price' placeholder='Enter Book Price'/>
						<ErrorMessage name='b_price' component='div'/>
					</div>
					<div className='w-full'>
						<Field className='w-full p-3 shadow rounded outline-[#00ABA8]' as="select" name='b_trending' placeholder='Enter Book Trending'>
						<option value="false">false</option>
						<option value="true">true</option>
						</Field>
						<ErrorMessage name='b_trending' component='div'/>
					</div>
				</div>
				<div className='w-[90%] mx-auto'>
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