import { FaArrowTrendDown } from "react-icons/fa6";
import pic from '../../public/team member/1.png';
import pic2 from '../../public/team member/2.png';
import pic3 from '../../public/team member/3.png';
import pic4 from '../../public/team member/4.png';
import pic5 from '../../public/team member/5.png';

const Team = () => {
    return (
        <>
            <section name='portfolio' className="bg-[#0E0E0E] text-white p-4 sm:p-10">
                <div className="px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                        <div className="flex flex-col sm:flex-row uppercase">
                            <div>
                                <h1 className="text-4xl sm:text-8xl font-extrabold">The Minds <br />
                                    <span className="text-[#E26E23]">behind</span></h1>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row uppercase mt-4 sm:mt-0">
                            <div>
                                <p className="text-2xl sm:text-4xl font-extrabold">our <span className="text-[#E26E23]">creative</span> team</p>
                            </div>
                            <div>
                                <button className="btn bg-[#E26E23] btn-sm ml-0 sm:ml-5 mt-2 sm:mt-0">Explore More <FaArrowTrendDown /></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={pic} alt="Team Member 1" className="w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 relative gap-5 mt-10">
                    <div>
                        <img src={pic2} alt="Team Member 2" className="w-full" />
                    </div>
                    <div className="mt-0 sm:mt-14">
                        <img src={pic3} alt="Team Member 3" className="w-full" />
                    </div>
                    <div className="mt-0 sm:mt-40">
                        <img src={pic4} alt="Team Member 4" className="w-full" />
                    </div>
                </div>
                <div className="mt-10 sm:-mt-60 sm:ml-[550px] relative sm:absolute">
                    <img src={pic5} alt="Team Member 5" className="w-full" />
                </div>
            </section>
        </>
    );
};

export default Team;
