import { FaInstagram, FaLinkedin, FaLocationArrow, FaYoutube } from 'react-icons/fa';
import img from '../../public/logo/logo (1).png';
import { CiFacebook } from 'react-icons/ci';

const Footer = () => {
    return (
        <section className="bg-[#0E0E0E] text-white p-10">
            <div className="container mx-auto flex flex-col md:flex-row gap-10">
                <div className="flex flex-col items-center md:items-start">
                    <img src={img} alt="Logo" className="mb-5" />
                    <div className="flex gap-5 text-2xl md:text-3xl mt-5">
                        <FaLinkedin className="text-[#E26E23]" />
                        <FaYoutube className="text-[#E26E23]" />
                        <FaInstagram className="text-[#E26E23]" />
                        <CiFacebook className="text-[#E26E23]" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-[#E26E23] text-2xl md:text-3xl font-bold mb-6 uppercase">Location</h1>
                    <p className="text-center md:text-left">2096 New Market, New Road <br /> North Carolina, USA</p>
                    <h1 className="text-[#E26E23] text-2xl md:text-3xl font-bold mb-6 uppercase mt-6">Contact Us</h1>
                    <p className="text-center md:text-left">support@rstheme.com <br />(+880)155-69569</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-[#E26E23] text-2xl md:text-3xl font-bold mb-6 uppercase">Services</h1>
                    <ul className="list-disc text-center md:text-left">
                        <li>Web Design</li>
                        <li>PR campaign</li>
                        <li>UI / UX Design</li>
                        <li>Event management</li>
                        <li>Social Media Strategy</li>
                        <li>Mobile App Development</li>
                        <li>Video creation and promotion</li>
                        <li>Online Reputation Management</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-[#E26E23] text-2xl md:text-3xl font-bold mb-6 uppercase">Subscribe</h1>
                    <div className="flex flex-col md:flex-row">
                        <input className="input p-3 md:p-5 input-bordered md:rounded-l-full mb-2 md:mb-0" placeholder="youremail@gmail.com" />
                        <button className="btn bg-[#E26E23] rounded-full md:rounded-r-full md:p-5">
                            <FaLocationArrow className="text-white text-xl md:text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
