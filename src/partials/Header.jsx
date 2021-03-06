import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-center flex-wrap items-center">
              <li>
                <Link to="/" className="btn-sm text-white bg-red-300 hover:bg-red-400 ml-3 rounded-full">
                  <span>Home</span>           
                </Link>
              </li>
              <li>
                <Link to="/why" className="btn-sm text-white bg-red-300 hover:bg-red-400 ml-3 rounded-full">
                  <span>Why</span>           
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="btn-sm text-white bg-red-300 hover:bg-red-400 ml-3 rounded-full">
                  <span>Testimonials</span>           
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
