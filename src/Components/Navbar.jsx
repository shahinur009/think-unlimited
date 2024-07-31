import { useState } from 'react';
import pic from '../../public/logo/logo (1).png'
import { Link } from 'react-scroll';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "services",
        },
        {
            id: 3,
            text: "features",
        },
        {
            id: 4,
            text: "portfolio",
        },
        {
            id: 5,
            text: "blog",
        },
        {
            id: 6,
            text: "contact",
        },
    ];
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto py-2 px-4 md:px-20 h-20 shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="flex justify-between items-center h-16 bg-[#0E0E0E]">
                    <div className=" flex space-x-2 w-32 md:w-48">
                        <img src={pic} alt="" />
                    </div>
                    {/* desktop navbar */}
                    <div className='text-white'>
                        <ul className="hidden md:flex space-x-8 uppercase">
                            {navItems.map(({ id, text }) => (
                                <li
                                    className="hover:scale-105 duration-200 cursor-pointer "
                                    key={id}
                                >
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden text-white">
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                {menu && (
                    <div className="text-white">
                        <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-md uppercase">
                            {navItems.map(({ id, text }) => (
                                <li
                                    className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                                    key={id}
                                >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;