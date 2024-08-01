import { FaArrowTrendDown } from 'react-icons/fa6';
import pic from '../../public/new article/1.png';
import pic2 from '../../public/new article/2.png';
import pic3 from '../../public/new article/3.png';
import pic4 from '../../public/new article/4.png';
import pic5 from '../../public/new article/5.png';
import pic6 from '../../public/new article/6.png';
import pic7 from '../../public/new article/bg-1.png';

const NewArticle = () => {
    return (
        <>
            <section 
            name='blog'
            className="bg-[#0E0E0E] text-white p-10">
                <div className="uppercase text-center">
                    <h1 className="text-3xl md:text-8xl font-extrabold">Whats our new <br />
                        <span className="text-[#E26E23]">article</span> ?</h1>
                </div>
                <section className="py-6 md:flex justify-center">
                    <div className="container p-4 mx-auto md:relative">
                        <div className="grid md:grid-cols-6 grid-cols-1 gap-1">
                            <img className="w-full h-full md:aspect-square md:col-span-3 md:row-span-2" src={pic} />
                            <img className="w-full h-full md:aspect-square md:col-span-2 md:row-span-1" src={pic2} />
                            <img className="w-full h-full md:aspect-square md:col-span-1 md:row-span-1" src={pic3} />
                            <img className="w-full h-full md:aspect-square md:col-span-1 md:row-span-1" src={pic4} />
                            <img className="w-full opacity-35 h-full md:aspect-square md:col-span-2 md:row-span-2" src={pic7} />
                            <img className="w-full h-full md:aspect-square md:col-span-1 md:row-span-1" src={pic5} />
                            <img className="w-full h-full md:aspect-square md:col-span-3 md:row-span-1" src={pic6} />
                        </div>
                    </div>
                    <div className="object-cover md:w-1/3 aspect-square md:p-10 md:absolute md:mt-[700px] md:ml-[850px]">
                        <h1 className='md:text-2xl text-md font-bold mb-5 uppercase'>Current UI TRends</h1>
                        <p>Figma ipsum component variant main layer. Pencil style scrolling shadow blur scrolling list. Undo thumbnail vector outline ellipse. Content polygon layout shadow distribute scale. Style variant move component follower pen layout. Project line select draft select prototype. Style variant move component follower pen layout. Project line select draft select prototype. Style variant move component follower pen layout. Project line select draft select prototype.</p>
                        <button className="btn bg-[#E26E23] btn-sm mt-5 ml-28">Read more <FaArrowTrendDown /></button>
                    </div>

                </section>
            </section>
        </>
    );
};

export default NewArticle;
