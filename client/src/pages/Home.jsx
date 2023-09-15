import { Blogs, Books, Navbar, Services, Trending } from "../index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Services />
      <Trending />
      <Books />
      <Blogs />
    </>
  );
};

export default Home;
