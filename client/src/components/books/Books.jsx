import { FaRegEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteBookMutation, useGetbooksQuery } from "../../redux/bookSlice.js";
import { useGetUserProfileQuery } from "../../redux/userSlice.js";
const Books = () => {
  const { data: user = {} } = useGetUserProfileQuery()
  const { data: books = [] } = useGetbooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete')) {
      deleteBook(id).then((res) => {
        const status = res.data.status;
        if (status) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
    }
  }
  return (
    <div className="w-full p-2 mt-10">
      <div className="w-full mx-auto px-4 py-10 rounded">
        <h1 className=" text-2xl md:text-4xl mb-10 text-[#00ABA8] tracking-tighter"> Collection Books</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-start items-start">
          {
            books?.map(res => {
              return (
                <div className=" w-[95%] border-2 rounded bg-white shadow flex flex-col justify-start items-start space-y-2" key={res.id}>
                  <img className="w-72 h-72 bg-white mx-auto" src={`../../../public/uploads/${res.b_image}`} alt="" />
                  <hr />
                  <div className="flex flex-col justify-start w-full p-2 gap-2">

                    <div className="w-full flex flex-row justify-between items-center gap-4">
                      <span className="w-fit text-xl">{res.b_name}</span>
                      {/* <span className=" text-lg">{res.b_category}</span> */}
                      <span className="w-fit text-lg text-right">${res.b_price}</span>
                    </div>
                    {
                      user?.id == res?.userId && (
                        <div className="mt-3 flex flex-row justify-end items-center gap-4">
                          <Link to={`/Book_operations/${res?.id}`} state={res}><FaRegEdit size={20} className="text-[#00ABA8] cursor-pointer" /></Link>
                          <TiDelete size={25} className="text-red-500 cursor-pointer" onClick={() => handleDelete(res?.id)} />
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Books;
