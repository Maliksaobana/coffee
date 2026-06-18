import Aboutpic from "/publicImages/wallpaper.jpg";
import {OpeningHours} from "../constant.ts";

const About = ({id}:{id:string}) => {
    return (
        <div id={id} className='padding_main bg-white'>
            <div className="title_component">
                <h1>About Us</h1>
                <p><span>experience</span> this Journey with Us</p>
            </div>
            <div className='mt-8 max-w-4xl mx-auto flex h-max md:h-88 gap-4 flex-col md:flex-row md:items-center'>
                <div className='flex-1 flex max-md:justify-center flex-col'>
                    <h1 className='font-bold text-lg md:text-2xl'>Come join us During our opening hours</h1>
                    <ul className='mt-3 ml-4 flex flex-col space-y-2'>
                        {
                            OpeningHours.map(hrs => (
                                <li key={hrs.id} className='text-mainSubTitleSize'>
                                    <span className='mr-2'>•</span>
                                    {hrs.title} : {' '}
                                    <span className='italic font-semibold'>{hrs.hours}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='h-full flex-1 flex items-center justify-center'>
                    <div className='overflow-hidden h-88 md:h-full flex-1 rounded-xl'>
                        <img src={Aboutpic} alt="coffee picture" className='h-full w-full aspect-square object-cover object-top'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;