import {navigationArray, navigationArrayDevice} from "./constant.ts";
import {useEffect, useRef, useState} from "react";
import {IconContext} from "react-icons";
import {BiMenu, BiX} from "react-icons/bi";
import {FiArrowUp} from "react-icons/fi";

const HeaderSection = () => {
    const [currentNav, setCurrentNav] = useState('home')
    const [openMenu, setOpenMenu] = useState(false)
    const toTopMenu = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        window.addEventListener('load', () => {
            toTopMenu.current!.style.display = 'none'
        })
        window.addEventListener('scroll', () => {
            toTopMenu.current!.style.display = 'none'
        })
        window.addEventListener('scrollend', () => {
            setTimeout(() => {
                toTopMenu.current!.style.display = 'block'
            },400)
            setTimeout(() => {
                toTopMenu.current!.style.display = 'none'
            },4000)
        })

        return () => window.removeEventListener('scroll', () => null)
    })
    return (
        <header className="">
            <div className="flex text-navtext justify-between backdrop-blur-lg bg-background/80 w-full items-center px-6 py-1.5 4xl:px-12 lg:px-18">
                <div className='flex items-center'>
                    <h1 className='font-bold text-2xl uppercase inline-flex'>bab<span><img
                        src="/publicIcons/logoIcon.png" className='' alt="logo icon" width={30} height={30} /></span>
                        ery</h1>
                </div>
                <nav className='max-4xl:hidden'>
                    <ul className="inline-flex items-center md:space-x-6">
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
                    <button className='btn_component text-navSize capitalize  bg-foreground text-background'>
                        <a href="#contact">
                            contact us
                        </a>
                    </button>
                </div>
                <div className="4xl:hidden flex">
                    <button className='cursor-pointer' onClick={()=> setOpenMenu(prev => !prev)}>
                        {!openMenu ? <IconContext value={{className: 'w-6 h-6'}}>
                            <BiMenu />
                        </IconContext> :
                        <IconContext value={{
                            className: 'w-6 h-6 text-white',
                        }}>
                            <BiX />
                        </IconContext>
                        }
                    </button>
                </div>
            </div>
            {/* media menu */}
            <div className={`backdrop-blur-xs bg-linear-to-br from-background/30 to-75% to-foreground h-dvh w-full absolute ${openMenu ? 'left-0' : 'left-300'} transition-all duration-450 flex flex-col space-y-8 items-center py-12 px-6 z-10 4xl:hidden`}>
                <nav className='w-full'>
                        <ul className="inline-flex flex-col items-center w-full space-y-8">
                            {
                                navigationArrayDevice.map(link =>(
                                    <li
                                        onClick={() => {
                                            setCurrentNav(link.label)
                                            setOpenMenu(false)
                                        }}
                                        className={`capitalize flex items-center overflow-hidden justify-center text-white transition-all duration-400 rounded-md ${currentNav === link.label ? 'bg-foreground text-background hover:text-background' : 'hover:text-foreground'} font-semibold h-14 w-full text-[18px] cursor-pointer`}
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

            <button ref={toTopMenu} onClick={() => setCurrentNav('home')} className="fixed cursor-pointer z-99 bottom-10 right-5 bg-cyan-500 p-6 md:p-8 rounded-full">
                <a href="#home">
                    <IconContext value={{className:'w-8 h-8 text-white'}}>
                        <FiArrowUp />
                    </IconContext>
                </a>
            </button>

        </header>
    );
};

export default HeaderSection;