import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';   
import MainPage from './component/MainPage/MainPage';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Navbar from './component/NavBar/NavBar';
import Footer from './component/NavBar/Footer'; 
import NotFoundPage from './component/Notfound';

const Approuter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path='/Contact' element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Approuter;