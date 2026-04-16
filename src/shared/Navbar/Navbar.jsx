import logo from "./../../assets/logo.png";
import Container from '../Container/Container';
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";



const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: 'home', pathname: '/' },
        { name: 'timeline', pathname: '/timeline' },
        { name: 'stats', pathname: '/stats' },
    ];

    // menu open and close for small devices
    const handleMenu = () => {
        setOpen(!open);
    };

    // hide menu
    const handleHide = () => {
        // console.log('clicked');
        setOpen(!open);
    };

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md py-4 shadow-xs">
            <Container>
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={logo} alt="Website Logo" />
                    </Link>
                    {/* Desktop Menu */}
                    <ul className=" hidden md:flex justify-between items-center gap-4">
                        {
                            navLinks.map(link => <li key={link.name}><NavLink className={({ isActive }) => `flex items-center justify-center gap-2 capitalize py-2 px-6 rounded-md text-base font-medium transition-all ${isActive ? "text-white bg-[#244d3f]" : "text-[#6F665C]"}`} to={link.pathname}>{link.name === 'home' ? <MdHome /> : link.name === 'timeline' ? <RiTimeLine /> : link.name === 'stats' ? <IoIosStats /> : ''
                            } {link.name}</NavLink></li>)
                        }
                    </ul>

                    {/* Mobile Menu */}
                    <ul
                        className={`absolute md:hidden w-full left-0 top-full bg-[#FAF8F5] py-6 flex flex-col items-center
                        transform transition-all duration-300 ease-in-out px-4 space-y-4

                        ${open
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-4 opacity-0 pointer-events-none"
                            }`}
                    >
                        {
                            navLinks.map(link => <li className="w-full" key={link.name}><NavLink onClick={() => handleHide()} className={({ isActive }) => `w-full flex items-center justify-center gap-2 capitalize py-2 px-6 rounded-md text-base font-medium transition-all ${isActive ? "text-white bg-[#244d3f]" : "text-[#6F665C]"}`} to={link.pathname}>{link.name === 'home' ? <MdHome /> : link.name === 'timeline' ? <RiTimeLine /> : link.name === 'stats' ? <IoIosStats /> : ''
                            } {link.name}</NavLink></li>)
                        }
                    </ul>

                    {/* Icons */}
                    <div
                        onClick={handleMenu}
                        className="block md:hidden rounded-full hover:bg-white text-[#1F1B16] active:text-[#E07A5F] hover:text-[#E07A5F] p-2 transition-colors duration-200"
                    >
                        <div className="relative w-6 h-6">
                            <IoClose
                                className={`absolute text-xl transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                                    }`}
                            />
                            <AiOutlineMenu
                                className={`absolute text-xl transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;