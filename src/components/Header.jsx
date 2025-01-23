import { useEffect, useRef, useState } from 'react';
import logo from "../assets/images/logo.png";
import {menuLists} from "../assets/data/data";
import { CustomLink, CustomNavLink } from './CustomComponent';
import {IoSearchOutline } from 'react-icons/io5';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router';
import { Cart } from './cart/Cart';


export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    };
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isHomePage = location.pathname === "/";

  return (
    <>
      <header 
        className={
          isHomePage
            ? `$ header px-12 py-3 space-x-12 bg-white-100 relative z-20 ${
              isScrolled ? "scrolled" : ""
            }`
             : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div 
            className={` ${
              isScrolled ? "lg:bg-none" : " lg:bg-black"
            } lg:h-[86px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}> 
          </div>
        )}

        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div> 
              <img src={logo} alt="Logo" className="h-7"/>
            </div>

            <div className="hidden lg:flex items-center justify-between gap-8">
              {menuLists.map((list) => (
                <li key={list.id} className='uppercase list-none'>
                  <CustomNavLink href={list.path}>
                    {list.link}
                  </CustomNavLink>
                </li>
              ))} 
            </div>
          </div>

          <div className="flex items-center gap-8 icons"> 
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              
              <CustomLink 
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}>
                Login 
              </CustomLink>
              
              <span 
                 className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}>
                /
              </span>
            
              <CustomLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}>
                Register
              </CustomLink>
            </div>

            <div 
              className={`icons flex items-center justify-center gap-7 ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}>
            
              <IoSearchOutline size={25} />

              <Cart />
              
              <button onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                  {isOpen ? (
                    <AiOutlineClose size={25}/>
                  ) : (
                  <AiOutlineMenu size={25}/>
                )}
              </button>
            </div>
          </div>
        
          {/* <div className="flecart item 
          x items-center gap-8 icons"></div> */}
        
          <div ref={menuRef}
            className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "closed"
              }`}
          >
            {menuLists.map((list) => (
              <li key={list.id} className='uppercase list-none'>
                <CustomNavLink href={list.path} className="text-white">
                  {list.link}
                </CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};