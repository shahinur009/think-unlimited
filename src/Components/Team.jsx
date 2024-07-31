import { FaArrowTrendDown } from "react-icons/fa6";
import pic from '../../public/team member/1.png'
import pic2 from '../../public/team member/2.png'
import pic3 from '../../public/team member/3.png'
import pic4 from '../../public/team member/4.png'
import pic5 from '../../public/team member/5.png'
const Team = () => {
    return (
        <>
            <section
                name='portfolio'
                className="bg-[#0E0E0E] text-white p-10">
                <div className="px-10 grid grid-cols-2 gap-10">
                    <div>
                        <div className="flex uppercase">
                            <div>
                                <h1 className="text-8xl font-extrabold">The Minds <br />
                                    <span className="text-[#E26E23]">behind</span></h1>
                            </div>
                        </div>
                        <div className="flex uppercase">
                            <div>
                                <p className="text-4xl font-extrabold">our <span className="text-[#E26E23]">creative</span> team</p>
                            </div>
                            <div>
                                <button className="btn bg-[#E26E23] btn-sm ml-5 mt-2">Explore More <FaArrowTrendDown /></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={pic} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-3 relative gap-5">
                    <div>
                        <img src={pic2} alt="" />

                    </div>
                    <div className="mt-14">
                        <img src={pic3} alt="" />
                    </div>
                    <div className="mt-40">
                        <img src={pic4} alt="" />
                    </div>

                </div>
                <div className="-mt-60 ml-[550px] absolute">
                    <img src={pic5} alt="" />
                </div>
            </section>
        </>
    );
};

export default Team;