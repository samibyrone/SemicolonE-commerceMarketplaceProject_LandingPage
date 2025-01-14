import { useEffect, useRef, useState } from 'react';
import logo from "../assets/images/logo.png";
import {menuLists} from "../assets/data/data";
import { Badges, CustomeLink, CustomeNavLink } from './CustomComponent';
import {IoSearchOutline, IoHeartOutline, IoCartOutline} from 'react-icons/io5';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router';


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
            ? `$ header px-1 py-3 space-x-12 bg-white-100 relative z-20 ${
              isScrolled ? "scrolled" : ""
            }`
             : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div 
            className={` ${
              isScrolled ? "lg:bg-none" : " lg:bg-black"
            } lg:h-[105px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}> 
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
                  <CustomeNavLink href={list.path}>
                    {list.link}
                  </CustomeNavLink>
                </li>
              ))} 
            </div>
          </div>

          <div className="flex items-center ml-10 gap-10 icons"> 
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              
              <CustomeLink 
                className={`${
                  isScrolled || !isHomePage ? "text-white" : "text-primary"
                }`}>
                Login 
              </CustomeLink>
              
              <span 
                 className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}>
                /
              </span>
            
              <CustomeLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}>
                Register
              </CustomeLink>
            </div>

            <div 
              className={`icons flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}>
            
              <IoSearchOutline size={25} />

              <div className="relative z-20">

                <IoHeartOutline size={25} />
                
                <div className="absolute -top-2 -right-1.5">

                  <Badges color="bg-primary-green">10</Badges>
                
                </div>

                <div className="relative z-20">
                
                  <IoCartOutline size={25} />
                
                  <div className="absolute -top-2 -right-1.5">
                
                    <Badges color="bg-primary-green">0</Badges>
                
                  </div>
                </div>
              </div>
              
              <button onClick={toggleMenu}
                // className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                  {isOpen ? (
                    <AiOutlineClose size={25}/>
                  ) : (
                  <AiOutlineMenu size={25}/>
                )}
              </button>
            </div>
          </div>
        
          <div className='flex items-center gap-8 icons'>
          </div>
        
          <div ref={menuRef}
            className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "closed"
              }`}
          >
            {menuLists.map((list) => (
              <li key={list.id} className='uppercase list-none'>
                <CustomeNavLink href={list.path} className="">
                  {list.link}
                </CustomeNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};