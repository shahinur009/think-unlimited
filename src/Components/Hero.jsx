/* eslint-disable react/no-unescaped-entities */

import { FaArrowTrendDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <div name="Home" className="hero bg-[#0E0E0E] min-h-screen text-white flex flex-col justify-center">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-7xl md:text-9xl text-[#E26E23] font-extrabold uppercase">Marketing</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-4">
                    <div className="text-center md:text-left">
                        <p className="text-xl sm:text-4xl md:text-5xl">for <br /> by</p>
                    </div>
                    <div className="text-center md:text-left md:pl-4 uppercase">
                        <h1 className="text-[#FFBB55] text-3xl sm:text-7xl md:text-9xl font-extrabold">artists</h1>
                    </div>
                </div>
                <h3 className="text-center md:text-right mt-4 md:mt-6 text-xl md:text-2xl">creative mind, creative works</h3>
                <div className="flex flex-col md:flex-row justify-center items-center md:mt-10 mt-6 gap-5 text-center">
                    <p className="text-lg sm:text-xl md:text-2xl">modern <span className="text-[#E26E23]">problem</span> requires modern <span className="text-[#E26E23]">solution</span></p>
                    <button className="btn bg-[#E26E23] btn-sm mt-1 md:mt-4">let's Connect <FaArrowTrendDown className="inline ml-2" /></button>
                </div>
            </div>
        </>
    );
};

export default Hero;
