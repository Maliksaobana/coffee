import MenuPic from '../../assets/coffeeImages/herryway-bread.jpg'
import {SiCoffeescript} from "react-icons/si";
import {IconContext} from "react-icons";
const Menu = ({id}:{id:string}) => {
    return (
        <div id={id} className='padding_main bg-white'>
            <div className="title_component">
                <h1>Menu</h1>
                <p>connection <span>with</span> every Taste</p>
            </div>
            <div className='mt-8 max-w-4xl mx-auto flex h-max md:h-88 gap-4 flex-col md:flex-row md:items-center'>
                <div className='w-full md:w-1/2 flex max-md:justify-center max-md:text-center'>
                    <h1 className='font-bold text-lg md:text-2xl capitalize'>Start your day with that faithful <br className='md:hidden flex'/> companion</h1>
                </div>

                <div className='h-full w-full md:w-1/2 flex relative items-center justify-center'>
                    <div className='absolute border-4 p-2 items-center justify-center w-20 h-20 rounded-full z-99 hidden bg-white md:flex top-1/2 left-0 -translate-y-1/2'>
                        <IconContext value={{className:'w-16 h-16'}}>
                            <SiCoffeescript />
                        </IconContext>
                    </div>

                    {/* need to fix breakpoint 560 to 595 for the image */}
                    <div className='overflow-hidden rounded-full max-xs:h-auto max-xs:w-full h-86 w-86 border-6 p-px '>
                        <img src={MenuPic} alt="coffee picture" className='rounded-full border  h-full w-full aspect-square'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;