import ClientCard from "./ClientCard";

const ClientAboutUs = () => {
    return (
        <>
            <section className="bg-[#0E0E0E] text-white py-10">
                <div className="flex justify-center items-center gap-5">
                    <div className='text-center'>
                        <p className='font-extrabold text-8xl text-[#E26E23] uppercase -ml-10'><span className="text-white">what</span> clients</p>
                        <p className='font-extrabold text-8xl -mt-4 uppercase'>say <span className="text-[#E26E23] ">about</span> us </p>

                    </div>
                    <div>
                        <p className="text-[#E26E23] text-[150px] font-extrabold mt-5">?</p>
                    </div>
                </div>
                <div>
                    <ClientCard />
                </div>
            </section>
        </>
    );
};

export default ClientAboutUs;