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
                        accordionArray.map(details => (
                            <details key={details.id} name='accordion' open>
                                <summary>{details.summary}</summary>
                                <p>{details.description}</p>
                            </details>
                        ))
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