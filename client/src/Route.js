import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './component/MainPage/MainPage';
import Login from './component/LogIn/Login';
import SignUp from './component/SignUp/SignUp';
import Navbar from './component/NavBar/NavBar';
import Footer from './component/NavBar/Footer'; 
import NotFoundPage from './component/Notfound/Notfound';
import UserPage from './component/User/User';
import Book from './component/Book/Book';
import Registerfutsal from './component/Futsal/Registerfutsal';
import LoginAsowner from './component/Futsal/LoginAsowner';
const Approuter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/registerfutsal" element={<Registerfutsal/>} />
          <Route path="/loginasowner" element={<LoginAsowner/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard/:id' element={<UserPage />} />
          <Route path='/futsal/:id' element={<Book />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Approuter;
