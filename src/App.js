import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage= () => {
    if (currentPage === 'Home'){
      return <Home /> ;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio /> ;
    }
    if (currentPage === 'Contact'){
      return <Contact/>;
    }
    return <Home />;


  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar handlePageChange={handlePageChange}/>
      <Header />
    {renderPage()}
     <Footer/>
    </div>
  );
}

export default App;