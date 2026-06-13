import AccordionComponent from "../miniComponent/AccordionComponent.tsx";

const tryProp = [
    {
        id: 'rice',
        summary: 'rice',
        description: 'rices',
        imageUrl: '/../../src/assets/userImages/user_2.jpg'
    },
    {
        id: 'beans',
        summary: 'beans',
        description: 'beans we eat',
        imageUrl: '/../../src/assets/userImages/user_1.jpg'
    },
]

const Gallery = ({id}:{id:string}) => {
    return (
        <div id={id} className='padding_main bg-white'>
            <div className="title_component">
                <h1>Our Services</h1>
                <p>your <span>Desires</span> our Priority</p>
            </div>
            <AccordionComponent accordionArray={tryProp} />
        </div>
    );
};

export default Gallery;