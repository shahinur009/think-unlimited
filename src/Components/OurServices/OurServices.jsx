import pic from '../../../public/Services/girl-1.png'
import pic2 from '../../../public/Services/girl-2.png'
import Services from './Services';

const OurServices = () => {
    return (
        <div className='text-white bg-[#0E0E0E] min-h-screen'>
            <div className='flex justify-center uppercase'>
                <div
                    className="w-1/6 h-[600px]"
                    style={{
                        backgroundImage: `url(${pic})`,
                    }}>
                    <h1 className='text-8xl mt-48 -ml-28 font-bold'>our</h1>
                </div>
                <div
                    className="w-1/6 h-[600px] mt-16"
                    style={{
                        backgroundImage: `url(${pic2})`,
                    }}>
                    <h1 className='text-8xl flex mt-44 font-bold ml-5 text-[#E26E23]'>services</h1>
                </div>
            </div>
            <div className='mt-10 bg-[#0E0E0E]'>
                <Services />
            </div>
        </div>
    );
};

export default OurServices;