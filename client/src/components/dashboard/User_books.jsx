import { AiFillEdit } from "react-icons/ai"
import { BiShow } from "react-icons/bi"
import { TiDeleteOutline } from "react-icons/ti"
import { Link } from "react-router-dom"
import { MdOutlineAddCircle } from "react-icons/md"
import { useDeleteBookMutation, useGetbooksQuery } from "../../redux/bookSlice"
const User_books = () => {
  const { data : books = [] } = useGetbooksQuery();
  const [ deleteBook ] = useDeleteBookMutation();
  console.log('books',books);

  const handle_delete_books = async (id) =>{
    try {
      if(confirm('Are you sure you want to delete')){
        await deleteBook(id);
      }
    } catch (error) {
      console.log('error',error);
    }
  }
  return (
	<div className="w-[90%] mx-auto overflow-auto">
  <h4 className="p-4 w-full text-xl bg-[#00ABA8] text-white"> <Link to='/'>Home</Link>  / <span>User Books</span></h4>
   <div className="mt-5 grid lg:xl:grid-cols-4 gap-4 justify-start items-start">
    {
      books?.map(book =>{
        return(
          <div className="bg-white shadow rounded flex flex-col justify-start items-start space-y-2" key={book?.id}>
            <img className=" w-[80%] h-60  bg-center mx-auto" src={`../../../public/uploads/${book?.b_image}`} alt=""/>
            <div className="flex flex-col justify-start items-start ml-5 w-full space-y-3">
              <h5 className=" text-xl tracking-tighter w-[95%]">{book?.b_name.substring(0,20)}</h5>
              <div className="w-full mr-5 pb-4 mt-4 flex flex-row justify-start items-start gap-3">
                <AiFillEdit size={20} className=" text-blue-500 inline"/>
                <TiDeleteOutline onClick={()=>handle_delete_books(book?.id)} size={20} className=" text-red-500 inline"/>
              </div>
            </div>
          </div>
        )
      })
    }
   </div>
  </div>
  )
}

export default User_books