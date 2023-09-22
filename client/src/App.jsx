import { Route, Routes } from "react-router-dom";
import { About, Contact , Dashboard, Footer, Header, Login, Register, User_blogs, User_books } from "./index.js";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Book_operations from "./components/dashboard/Book_operations.jsx";
const App = () => {
  return (
    <>
    <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Dashboard" element={<Dashboard/>}>
          <Route index element={<User_books/>}/>
          <Route path="User_books" element={<User_books/>}/>
          <Route path="User_blogs" element={<User_blogs/>}/>
          <Route path="Book_operations" element={<Book_operations/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
