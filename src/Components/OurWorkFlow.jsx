import image from '../../public/Our-partner/Group 5.png'
import { FaArrowTrendDown } from "react-icons/fa6";

const OurWorkFlow = () => {
    const sentence = 'OUR WORK FLOW';
    const letters = sentence.split("");

    // Colors to use
    const firstColor = 'text-white';
    const secondColor = 'text-[#E26E23]';

    return (
        <>
            <section className="bg-[#0E0E0E] p-10">
                <div className="relative">
                    <div className=" mb-10 mx-auto">
                        <div className="text-center text-9xl font-extrabold flex flex-nowrap justify-between overflow-hidden opacity-50">
                            {letters.slice(0, 5).map((letter, index) => (
                                <span
                                    key={index}
                                    className={`inline-block mr-36 ${index < 4 ? firstColor : secondColor}`}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>
                        <div className="text-8xl font-extrabold absolute inset-0 flex items-center justify-center mt-28">
                            <h1 className="uppercase text-white text-center">
                                OUR <span className="text-[#E26E23]">work flow</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-40 text-white pb-10">
                    <div className="uppercase rotate-6 text-start mb-10">
                        <h1 className="border-b-2 text-7xl pb-10 font-extrabold"> <span className='font-bold text-7xl text-[#E26E23]'>01 </span>concept</h1>

                    </div>
                    <div className="uppercase rotate-6 text-center my-10">
                        <h1 className="border-b-2 pb-10 text-7xl font-extrabold"> <span className='font-bold text-7xl text-[#E26E23]'>02 </span>budget</h1>
                    </div>
                    <div className="">
                        <div className="rotate-6 text-end uppercase">
                            <h1 className="text-7xl font-extrabold"> <span className='font-bold text-7xl text-[#E26E23]'>03 </span>development</h1>
                        </div>
                        <div className="mt-10">
                            <div className='flex'>
                                <div className="rounded-md p-5 w-3/6">
                                    <p>Figma ipsum component variant main layer. Link object connection duplicate overflow distribute. Strikethrough align blur asset layer ipsum rotate. Selection project device ipsum device clip inspect font. Style object list group arrange. Selection draft team underline community polygon. Ellipse team flatten draft align distribute slice. Line pen follower boolean draft. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link. Vector opacity font library link. Ipsum bold clip plugin star overflow invite stroke flows content. </p>
                                </div>
                                <div className='flex justify-end ml-20 mt-20 items-end'>
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-5">
                            <button className="btn bg-[#E26E23] btn-sm mt-2">explore more <FaArrowTrendDown /></button>
                        </div>
                    </div>
                    <div className='rotate-6 border-b-2'>
                    </div>
                    <div className="uppercase rotate-6 text-end mb-40 mt-10">
                        <h1 className="pb-5 text-7xl font-extrabold"> <span className='font-bold text-7xl text-[#E26E23]'>04 </span>Result</h1>
                    </div>
                </div>
            </section>

        </>
    );
};

export default OurWorkFlow;