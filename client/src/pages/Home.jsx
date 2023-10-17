import { Books, Navbar, Services, Trending } from "../index";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      <Services />
      <Trending />
      <Books />
    </div>
  );
};

export default Home;

