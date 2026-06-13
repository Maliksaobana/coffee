import {navigationArray} from "./constant.ts";
import {useState} from "react";

const HeaderSection = () => {
    const [currentNav, setCurrentNav] = useState('home')
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className="">
            <div className="flex text-navtext justify-between backdrop-blur-lg bg-background/80 w-full items-center fixed top-0 px-6 py-1.5 4xl:px-12 lg:px-18">
                <div className='flex items-center'>
                    <h1 className='font-bold text-2xl uppercase inline-flex'>bab<span><img
                        src="/publicIcons/logoIcon.png" className='' alt="logo icon" width={30} height={30} /></span>
                        ery</h1>
                </div>
                <nav className='max-4xl:hidden'>
                    <ul className="inline-flex items-center space-x-12">
                        {
                            navigationArray.map(link =>(
                                <li
                                    onClick={() => setCurrentNav(link.label)}
                                    className={`capitalize flex items-center overflow-hidden justify-center transition-all duration-400 rounded-md ${currentNav === link.label ? 'bg-foreground text-background hover:text-background' : 'hover:text-foreground'} font-semibold h-11 w-fit text-navSize cursor-pointer`}
                                    key={link.label}>
                                    <a
                                        className='px-4 h-full flex items-center justify-center'
                                        href={'#'+link.link}>{link.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="max-4xl:hidden">
                    <button className='btn_component text-navSize capitalize  bg-foreground text-background'>contact us</button>
                </div>
                <div className="4xl:hidden flex">
                    <button onClick={()=> setOpenMenu(true)}>H</button>
                </div>
            </div>


            {
                openMenu &&
                <div className={`bg-red-400 h-dvh w-full ${openMenu && 'animate-animate_open'} left-300 transition-all duration-200 flex flex-col space-y-8 absolute items-center py-12 px-6 z-10 4xl:hidden`}>
                    <div className="w-full flex relative">
                        <button
                            onClick={() => {
                                setTimeout(() => setOpenMenu(false), 150)
                            }}
                            className='border absolute right-5 bottom-0'>X</button>
                    </div>
                    <nav className='w-full'>
                        <ul className="inline-flex flex-col items-center w-full space-y-8">
                            {
                                navigationArray.map(link =>(
                                    <li
                                        onClick={() => setCurrentNav(link.label)}
                                        className={`capitalize flex items-center overflow-hidden justify-center transition-all duration-400 rounded-md ${currentNav === link.label ? 'bg-foreground text-background hover:text-background' : 'hover:text-foreground'} font-semibold h-14 w-full text-[18px] cursor-pointer`}
                                        key={link.label}>
                                        <a
                                            className='h-full w-full flex items-center justify-center'
                                            href={'#'+link.link}>{link.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            }

        </header>
    );
};

export default HeaderSection;