import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { About, Bookspage, Contact, Footer, Header, Login, Register } from "./index.js";
import Home from "./pages/Home";
import Book_operations from "./components/books/Book_operations.jsx";
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
        <Route path="/Bookspage" element={<Bookspage/>} />
        <Route path="/Book_operations" element={<Book_operations/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
