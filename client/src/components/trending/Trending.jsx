import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetbooksQuery } from "../../redux/bookSlice.js";
const Trending = () => {
  const { data : books = [] } = useGetbooksQuery();
  const trending_books = books?.filter(book => {
    return book?.b_trending == "true";
  })
  console.log('trending_books',trending_books)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full p-2 mt-10">
      <div className="w-full">
        <h1 className=" text-2xl mb-10 text-[#00ABA8] tracking-tighter">Trending Books</h1>
        <Carousel responsive={responsive}>
			{
				trending_books?.map(res => {
					return(
						<div className=" w-[95%] border-2 shadow flex flex-col justify-start items-start space-y-2" key={res.id}>
							<img className="w-72 h-80 mx-auto" src={`../../../public/uploads/${res?.b_image}`} alt="" />
							<div className="flex flex-row justify-start items-center w-full p-3 gap-5 border-t-2">
								<span className=" w-fit text-lg">{res?.b_name}</span>
								<span className="w-fit text-lg text-right">{res?.b_price}</span>
							</div>
						</div>
					)
				})
			}
		</Carousel>
		
      </div>
    </div>
  );
};

export default Trending;
