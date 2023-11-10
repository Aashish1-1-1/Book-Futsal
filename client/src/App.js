import React, {useState} from 'react';
import Navbar from './component/NavBar/NavBar';
import Footer from './component/NavBar/Footer';
import MainPage from './component/MainPage/MainPage';
import SignUp from './component/SignUp/SignUp';
import  PageValue  from './component/Contex';
import SignIn from './component/SignIn/SignIn'

function App() {
  const [pageState, setpageState] = useState("main");
  return (
    <div className="App">
     <PageValue.Provider value={{ pageState, setpageState}}>
      <Navbar />
      {pageState === "main" && <MainPage />}
      {pageState === "SignUp" && <SignUp />}
      {pageState === "SignIn" && <SignIn />}
      {pageState === "Contact" && <MainPage />}
      <Footer />
    </PageValue.Provider>
    </div>
  );
}

export default App;
