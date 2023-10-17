const Navbar = () => {
  return (
	<nav className="w-full h-screen p-2 mt-20">
		<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
			<div className=" flex flex-col justify-start items-start gap-4 mt-16 space-y-7">
				<p className=" text-3xl text-[#00ABA8] tracking-tighter">all time bestseller books</p>
				<h1 className="text-2xl tracking-tighter md:w-7/12 md:text-5xl">Get Your New Book Collections</h1>
				<p className="text-xl md:text-2xl md:w-10/12 leading-relaxed tracking-tighter">When your found the book you want the well shipping qualifying order to your door for free 100%</p>
				<button className="px-10 py-2 shadow rounded bg-[#00ABA8] text-white hover:bg-white hover:text-[#00ABA8]">Buy</button>
			</div>
			<div className="w-full overflow-hidden">
				<img className="h-[90%]" src="image/book.png" alt="book"/>
			</div>
		</div>
	</nav>
  )
}

export default Navbar