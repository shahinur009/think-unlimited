import pic from '../../public/about us/pic.png'
import pic2 from '../../public/about us/pic2.png'
import pic3 from '../../public/about us/pic3.png'
import pic4 from '../../public/about us/pic4.png'
import pic5 from '../../public/about us/pic5.png'
import pic6 from '../../public/about us/pic6.png'
import pic7 from '../../public/about us/pic7.png'
const AboutUs = () => {
    return (
        <>
            <section className="p-6 bg-[#E26E23] text-white">
                <div className='text-center'>
                    <p className='font-extrabold text-8xl text-[#E26E23] uppercase -mt-28 -ml-24'>results tells</p>
                    <p className='font-extrabold text-8xl uppercase -mt-7'>more about us</p>
                </div>
                {/* <h1 className='font-extrabold text-8xl text-center uppercase -mt-32'>results tells <br /> more about us</h1> */}
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic} />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic2} />
                        <div className="object-cover w-full dark:bg-gray-500 aspect-square p-10">
                            <h1 className='text-2xl font-bold mb-5 uppercase'>create your brand</h1>
                            <p>Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link.</p>
                        </div>
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic3} />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic4} />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic5} />
                        <div className="object-cover w-full dark:bg-gray-500 aspect-square p-10">
                            <h1 className='text-2xl font-bold mb-5 uppercase'>make it famous</h1>
                            <p>Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link.</p>
                        </div>
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic6} />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={pic7} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;