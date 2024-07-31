import { FaInstagram, FaLinkedin, FaLocationArrow, FaYoutube } from 'react-icons/fa';
import img from '../../public/logo/logo (1).png'
import { CiFacebook } from 'react-icons/ci';
const Footer = () => {
    return (
        <section className="bg-[#0E0E0E] text-white p-10">
            <div className='flex gap-10 justify-center'>
                <div>
                    <div>
                        <img src={img} alt="" />
                        <div className="flex gap-5 text-3xl mt-5 ">
                            <FaLinkedin className='text-[#E26E23]' />
                            <FaYoutube className='text-[#E26E23]' />
                            <FaInstagram className='text-[#E26E23]' />
                            <CiFacebook className='text-[#E26E23]' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#E26E23] text-3xl font-bold mb-6 uppercase'>location</h1>
                    <br />
                    <p>2096 New Market, New Road <br /> North Carolina, USA</p>
                    <br />
                    <h1 className='text-[#E26E23] text-3xl font-bold mb-6 uppercase'>contact us</h1>
                    <br />
                    <p>support@rstheme.com <br />(+880)155-69569</p>
                </div>
                <div>
                    <h1 className='text-[#E26E23] text-3xl font-bold mb-6 uppercase'>services</h1>
                    <ul>
                        <li>Web Design</li>
                        <li>PR campaign</li>
                        <li>UI / UX Design</li>
                        <li>event management</li>
                        <li>Social Media Strategy</li>
                        <li>Mobile App Development</li>
                        <li>video creation and promotion</li>
                        <li>Online Reputation Management</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[#E26E23] text-3xl font-bold mb-6 uppercase'>subscribe</h1>
                    <div className="join">
                        <input className="input p-5 input-bordered join-item" placeholder="youremail@gmail.com" />
                        <button className="btn join-item rounded-r-full bg-[#E26E23]"><FaLocationArrow className='text-white text-3xl' /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;