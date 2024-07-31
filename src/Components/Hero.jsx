/* eslint-disable react/no-unescaped-entities */

import { FaArrowTrendDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <div name="Home" className="hero bg-[#0E0E0E] min-h-screen text-white">
                <div>
                    <div className="uppercase text-center items-center">
                        <h1 className="text-9xl text-[#E26E23] font-extrabold text-center">Marketing</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-center items-center">
                            <p className="text-5xl md:ml-8 md:mt-3">for <br /> by</p>
                        </div>
                        <div className="pl-4 uppercase text-center items-center">
                            <h1 className="text-[#FFBB55] text-9xl font-extrabold">artists</h1>
                        </div>
                    </div>
                    <h3 className="text-right">creative mind, creative works</h3>
                    <div className="align-text-bottom flex justify-center md:mt-10 mt-4 gap-5">
                        <p>modern <span className="text-[#E26E23]">problem</span> requires modern <span className="text-[#E26E23]">solution</span></p>
                        <button className="btn bg-[#E26E23] btn-sm">let's Connects <FaArrowTrendDown /></button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Hero;