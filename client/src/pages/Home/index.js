import React from 'react';
import Navbar from '../../components/navbars/Navbar';
import Footer from '../../components/footers/Footer';

const HomePage = () => {
    return (
        <>
           <Navbar /> 
           <div className='width-100 h-96'></div>
           <Footer />
        </>
    );
};

export default HomePage;