import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {books} from '../../damy_data/data.js';
const Books = () => {
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
      <div className="w-[90%] mx-auto bg-[#00ABA8] px-4 py-10 rounded">
        <h1 className=" text-2xl md:text-4xl mb-10 text-white tracking-tighter"> Collection Books</h1>
        <Carousel responsive={responsive}>
			{
				books.map(res => {
					return(
						<div className=" w-[95%] border-2 rounded bg-white shadow flex flex-col justify-start items-start space-y-2" key={res.id}>
							<img className="w-72 h-80 bg-white mx-auto" src={res.b_image} alt="" />
							<div className="flex flex-col justify-start w-full p-3 gap-2 border-t-2">
								<p className=" text-xl">{res.b_name}</p>
								<p className=" text-lg text-right">${res.b_price}</p>
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

export default Books;
