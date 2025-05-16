import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

const MainLayout = () => {
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    // পেজ পুরো লোড হতে ২ সেকেন্ড ধরে লোডিং দেখাবে (তুমি চাইলে সময় কম-বেশি করতে পারো)
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

    if (loading) {
    return <Loading />;
  }
    return (
        <div id="home">
                    <Navbar></Navbar>
              <Outlet></Outlet>
                <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;