import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaYoutube, } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";

const ConnectUs = () => {
    return (
        <section
            name='contact'
            className="bg-[#0E0E0E] text-white py-10">
            <div className="md:mt-20 mt-5 text-white md:pb-10">
                <div className="uppercase rotate-6 flex justify-center items-center text-center mb-2 md:mb-5 md:p-2 gap-2 md:gap-5 bg-[#E26E23]">
                    <div className="flex gap-5 md:text-3xl text-sm">
                        <FaLinkedin />
                        <FaYoutube />
                    </div>
                    <h1 className="text-md md:text-3xl font-bold">Connect with us</h1>
                    <div className="flex gap-5 md:text-3xl text-sm">
                        <GoArrowDownRight />
                        <FaInstagram />
                        <CiFacebook />
                    </div>
                </div>
                <div className="flex uppercase justify-center items-center rotate-6 text-center md:p-2 bg-[#E26E23]">
                    <h1 className="text-md md:text-3xl font-bold">We like to start your project with us</h1>
                    <button className="btn bg-[#fff] btn-sm mt-1 ml-0 md:ml-6 text-[#E26E23]">Get started <FaArrowTrendDown /></button>
                </div>
            </div>
        </section>
    );
};

export default ConnectUs;
