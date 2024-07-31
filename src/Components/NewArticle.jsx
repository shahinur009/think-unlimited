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
                    <h1 className="text-8xl font-extrabold">Whats our new <br />
                        <span className="text-[#E26E23]">article</span> ?</h1>
                </div>
                <section className="py-6 dark:bg-gray-100 flex justify-center">
                    <div className="container p-4 mx-auto relative">
                        <div className="grid grid-cols-6 gap-1">
                            <img className="w-full h-full aspect-square col-span-3 row-span-2" src={pic} />
                            <img className="w-full h-full aspect-square col-span-2 row-span-1" src={pic2} />
                            <img className="w-full h-full aspect-square col-span-1 row-span-1" src={pic3} />
                            <img className="w-full h-full aspect-square col-span-1 row-span-1" src={pic4} />
                            <img className="w-full opacity-35 h-full aspect-square col-span-2 row-span-2" src={pic7} />
                            <img className="w-full h-full aspect-square col-span-1 row-span-1" src={pic5} />
                            <img className="w-full h-full aspect-square col-span-3 row-span-1" src={pic6} />
                        </div>
                    </div>
                    <div className="object-cover w-1/3 dark:bg-gray-500 aspect-square p-10 absolute mt-[700px] ml-[850px]">
                        <h1 className='text-2xl font-bold mb-5 uppercase'>Current UI TRends</h1>
                        <p>Figma ipsum component variant main layer. Pencil style scrolling shadow blur scrolling list. Undo thumbnail vector outline ellipse. Content polygon layout shadow distribute scale. Style variant move component follower pen layout. Project line select draft select prototype. Style variant move component follower pen layout. Project line select draft select prototype. Style variant move component follower pen layout. Project line select draft select prototype.</p>
                        <button className="btn bg-[#E26E23] btn-sm mt-5 ml-28">Read more <FaArrowTrendDown /></button>
                    </div>

                </section>
            </section>
        </>
    );
};

export default NewArticle;
