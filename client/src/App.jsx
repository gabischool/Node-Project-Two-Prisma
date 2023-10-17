import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { About, Book_operations, Bookspage, Contact, Footer, Header, Home, Login, Private_Routes, Register } from "./index.js";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bookspage" element={<Bookspage />} />
        <Route path="Book_operations" element={<Private_Routes />}>
          <Route path="/Book_operations" element={<Book_operations />} />
        </Route>
        <Route path="/Book_operations/:id" element={<Private_Routes />}>
          <Route path="/Book_operations/:id" element={<Book_operations />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
