import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaYoutube, } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";

const ConnectUs = () => {
    return (
        <section className="bg-[#0E0E0E] text-white py-10">
            <div className="mt-20 text-white pb-10">
                <div className="uppercase rotate-6 flex justify-center items-center text-center mb-5 p-2 gap-5 bg-[#E26E23]">
                    <div className="flex gap-5 text-3xl">
                        <FaLinkedin />
                        <FaYoutube />
                    </div>
                    <h1 className="text-3xl font-bold">Connect with us</h1>
                    <div className="flex gap-5 text-3xl">
                        <GoArrowDownRight />
                        <FaInstagram />
                        <CiFacebook />
                    </div>
                </div>
                <div className="flex uppercase justify-center items-center rotate-6 text-center p-2 bg-[#E26E23]">
                    <h1 className="text-3xl font-bold">We like to start your project with us</h1>
                    <button className="btn bg-[#fff] btn-sm mt-1 ml-6 text-[#E26E23]">Get started <FaArrowTrendDown /></button>
                </div>
            </div>
        </section>
    );
};

export default ConnectUs;