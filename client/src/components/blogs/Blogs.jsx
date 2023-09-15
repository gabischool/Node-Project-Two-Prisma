import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {books} from '../../damy_data/data.js';
const Blogs = () => {
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
      <div className="w-[90%] mx-auto px-4 py-10 rounded">
        <h1 className=" text-2xl md:text-4xl mb-10 text-[#00ABA8] tracking-tighter"> Daily Blogs</h1>
        <Carousel responsive={responsive}>
			{
				books.map(res => {
					return(
						<div className=" w-[95%] border-2 rounded bg-white shadow flex flex-col justify-start items-start space-y-2" key={res.id}>
							<img className="w-72 h-80 bg-white mx-auto" src={res.b_image} alt="" />
							<div className=" grid grid-cols-1 w-full p-3 gap-2 border-t-2">
								<p className=" grid grid-cols-2 w-full  gap-2">
									<span className="text-xl tracking-tighter">{res.b_name}</span>
									<span className="text-xl text-right tracking-tighter">10/12/2022</span>
								</p>
								<p className=" text-base">{res.b_description.slice(0,70)+[res.b_description.length > 70 ? 'Read More' : '']}</p>
								<span className="text-base">comment / 12</span>
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

export default Blogs;
