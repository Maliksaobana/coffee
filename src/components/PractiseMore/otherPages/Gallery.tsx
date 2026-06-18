import AccordionComponent from "../miniComponent/AccordionComponent.tsx";
import {GalleryInfo} from "../constant.ts";



const Gallery = ({id}:{id:string}) => {
    return (
        <div id={id} className='padding_main bg-white'>
            <div className="title_component">
                <h1>Our Services</h1>
                <p>your <span>Desires</span> our Priority</p>
            </div>
            <AccordionComponent accordionArray={GalleryInfo} />
        </div>
    );
};

export default Gallery;