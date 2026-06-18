import {SiCoffeescript } from 'react-icons/si'
import {IconContext} from "react-icons";
import {FiStar} from "react-icons/fi";

/*  Create an Accordion component that will take in props of an array
*       first: Create the component layout
*       second: Map out the props it will take either an OBJECT or ARRAY
*       third: Add transition to the component
*       fourth: Determine the click functions
*    */

// prop will be an array and an object

interface accordionState {
    id: string;
    summary: string;
    description: string;
    price: string;
    rating: number;
    imageUrl: string;
}

type accordionProps = {
    accordionArray : accordionState[];
}


const AccordionComponent = ({accordionArray}: accordionProps) => {


    return (
            <div className="accordion_wrapper">
                <div className="accordion_content">
                    <div className="accordion_text">
                        {
                            accordionArray.map(details => {
                                return (
                                    <details key={details.id} name='accordion' className='group' open>
                                    <summary className='cursor-pointer text-mainSubTitleSize  flex items-center font-semibold capitalize'>
                                        <span className='mr-2 transition-all duration-150 group-hover:block'>
                                            <IconContext value={{className:'w-4 h-4'}}>
                                                <SiCoffeescript />
                                            </IconContext>
                                        </span>{details.summary}</summary>
                                    <div className="flex flex-col w-full space-y-2 py-1 px-5">
                                        <h2 className='text-[15px] font-semibold'>{details.description}</h2>
                                        <h3 className='text-sm font-semibold'>Price: ₦ {details.price}.00</h3>
                                        <div className="flex space-x-1 items-center">
                                            <h3 className='font-semibold capitalize text-sm'>{Number(details.rating) > 100 ? 'rating ' + String(details.rating).slice(0,1) + 'M' : 'rating ' + details.rating + '+'}</h3>
                                            <IconContext value={{
                                                style: {
                                                    fill: 'yellow',
                                                    width: 14,
                                                    height: 14,
                                                }
                                            }}>
                                                <FiStar />
                                            </IconContext>
                                        </div>
                                        <div className="w-full flex items-center justify-center">
                                            <button
                                                onClick={() => {}}
                                                className='capitalize cursor-pointer rounded-4xl px-12 py-1.5 bg-background text-foreground hover:outline hover:outline-offset-2 font-bold text-[15px]'>place order</button>
                                        </div>
                                    </div>
                                </details>
                            )})
                        }
                    </div>
                    <div className="accordion_images">
                        {
                            accordionArray.map(accordionImage => (
                                <img key={accordionImage.id} src={accordionImage.imageUrl} alt={accordionImage.summary} />
                            ))
                        }
                    </div>
                </div>
            </div>
    );
};

export default AccordionComponent;