import { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

export const Navbar = () => {

    const [click, Setclick] = useState(false);
    const handleClick = () => Setclick(!click);
    const content = <>
        
        <div>
            <ul className='flex gap-8 mr-16 text-[18px]'>
                <Link to="Home">
                    <li>Home</li>
                </Link>
                <Link to="Shop">
                    <li>Shop</li>
                </Link>
                <Link to="Blogs">
                    <li>Blogs</li>
                </Link>
                <Link to="Pages">
                    <li>Pages</li>
                </Link>
                {/* <div to= "me" style={{background: "red", color: "blue"}}> This should have a red background and padding. </div> */}
            </ul>
        </div>
    </>

  return (
    <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 ">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">LOGO</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to="Home">
                            <li>Home</li>
                        </Link>
                        <Link to="Shop">
                            <li>Shop</li>
                        </Link>
                        <Link to="Blogs">
                            <li>Blogs</li>
                        </Link>
                        <Link to="Pages">
                            <li>Pages</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  );
}; 



{/* <div className='h-10vh flex justify-between lg:py-5 px-20 border-b'>
        <div className='flex items-center flex-1'>
        <h2 className="text-3x1" style={{ color: "pink", fontWeight: "bold" }}> 
            Beauty 
        </h2>
        </div>
        <div>
            <div className="group">
            <button className="text" style={{ color: "pink", cursor: "pointer", border: "1px solid white", transition: "border-b-2" }} > Products </button>
                <div className="texts" style={{ display: "flex", flexDirection: "column", background: "white", color: "black", zIndex: 20, transitionDuration: "300ms", overflow: "hidden", top: "250px", position: "absolute", left: "0", padding: "10px", width: "100%", }} >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                </div>
            </div>

            <li className='text hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer'>
              <Link to='/contact'>Contact</Link>
            </li>

        </div>
        <div>
            {click && content}
        </div>
        <button className="block sm:hidden transition-none" onClick={handleClick}>
            {click ? <FaTimes className="Text-black"/>: <CiMenuFries className="Text-black"/>}
        </button>
      </div> */}