import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {books} from '../../damy_data/data.js';
const Trending = () => {
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
      <div className="w-[90%] mx-auto">
        <h1 className=" text-2xl mb-10 text-[#00ABA8] tracking-tighter">Trending Books</h1>
        <Carousel responsive={responsive}>
			{
				books.map(res => {
					return(
						<div className=" w-[95%] border-2 shadow flex flex-col justify-start items-start space-y-2" key={res.id}>
							<img className="w-72 h-80 mx-auto" src={res.b_image} alt="" />
							<div className=" grid grid-cols-2 w-full p-3 gap-2 border-t-2">
								<p className=" text-xl">{res.b_name}</p>
								<p className=" text-lg text-right">{res.b_price}</p>
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
