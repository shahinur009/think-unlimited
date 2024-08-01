import pic from '../../../public/Services/girl-1.png';
import pic2 from '../../../public/Services/girl-2.png';
import Services from './Services';

const OurServices = () => {
    return (
        <div
            name="services"
            className='text-white bg-[#0E0E0E] min-h-screen md:py-10 py-5'>
            <div className='flex justify-center uppercase'>
                <div
                    className="w-full md:w-1/6 h-[400px] md:h-[600px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${pic})`,
                    }}>
                    <h1 className='text-3xl md:text-8xl mt-24 md:mt-48 text-center md:text-left -ml-0 md:-ml-28 font-bold'>our</h1>
                </div>
                <div
                    className="w-full md:w-1/6 h-[400px] md:h-[600px] mt-4 md:mt-16 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${pic2})`,
                    }}>
                    <h1 className='text-3xl md:text-8xl flex mt-24 md:mt-44 font-bold ml-0 md:ml-5 text-[#E26E23] text-center md:text-left'>services</h1>
                </div>
            </div>
            <div className='mt-10 bg-[#0E0E0E]'>
                <Services />
            </div>
        </div>
    );
};

export default OurServices;
