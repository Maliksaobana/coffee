import {useContext, useRef, useState} from "react";
import {MainContext} from "./ContextProvider.tsx";



const MainApp = () => {
    const {users,setUsers} = useContext(MainContext);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const inputUserRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputCheckboxRef = useRef<HTMLInputElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    const logInUser = () => {
        setUsers({name: inputUserRef.current?.value , email: inputEmailRef.current?.value , password: inputPasswordRef.current?.value });
        setIsLoggedIn(true);
    }

    const checkRemember = () => {
        if(spanRef.current && inputCheckboxRef.current?.checked) spanRef.current.style.color = 'oklch(51.8% 0.253 323.949)'
        if(spanRef.current && !inputCheckboxRef.current?.checked) spanRef.current.style.color = 'black'
    }

    return (
         <>
            {!isLoggedIn && <div>
                <form onSubmit={logInUser}>
                    <div className='container sm:w-110 flex flex-col flex-nowrap px-5 py-3 rounded-sm shadow-xl backdrop-blur-lg'>
                        <div className='pointer-events-none'>
                            <h1 className='text-center uppercase font-semibold text-xl'>login</h1>
                            <h4 className='text-center capitalize font-normal text-[1rem] '>continue your journey with us</h4>
                        </div>
                        <div className='mt-3 flex flex-col space-y-2 flex-nowrap w-full'>
                            <div className=''>
                                <h3 className='mb-2 capitalize'>username</h3>
                                <div className='relative'>
                                    <input type='text'
                                           ref={inputUserRef}
                                           required
                                           placeholder='enter username'
                                           className='input_wrapper'/>
                                </div>
                            </div>
                            <div className=''>
                                <h3 className='mb-2 capitalize'>email</h3>
                                <div className='relative'>
                                    <input type='email'
                                           required
                                           ref={inputEmailRef}
                                           placeholder='enter email'
                                           className='input_wrapper'/>
                                </div>
                            </div>
                            <div className=''>
                                <h3 className='mb-2 capitalize'>password</h3>
                                <div className='relative'>
                                    <input type='text'
                                           ref={inputPasswordRef}
                                           required
                                           placeholder='enter password'
                                           className='input_wrapper'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-1'>
                            <div className='flex items-center group'>
                                <input type="checkbox" ref={inputCheckboxRef}
                                       onChange={checkRemember}
                                       className='accent-fuchsia-700 cursor-pointer'/>
                                <span
                                    ref={spanRef}
                                    className={`capitalize`}
                                >remember me</span>
                            </div>
                            <span>
                                <a href="#" className='capitalize transition-all duration-150 hover:underline-offset-4 hover:underline'>forgot password?</a>
                            </span>
                        </div>
                        <div className='flex justify-center items-center mt-6 mb-3'>
                            <button
                                className='bg-red-300 cursor-pointer hover:outline-2 hover:outline-offset-3 flex justify-center items-center w-40 h-10 capitalize text-[1rem] rounded-3xl font-bold'>login</button>
                        </div>
                        <div className='w-9/12 m-auto text-center text-pretty pointer-events-none text-xs'>
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, hic nulla
                                obcaecati quibusdam ratione repellendus velit
                            </h5>
                        </div>
                        <div className='my-3 flex justify-center items-end'>
                            <a href="#"
                               className='capitalize transition-all duration-150 hover:underline-offset-4 hover:underline'>
                                sign up
                            </a>
                            <span className='border mx-1 h-5'></span>
                            <a href="#"
                               className='capitalize transition-all duration-150 hover:underline-offset-4 hover:underline'>
                                learn more
                            </a>
                        </div>
                    </div>
                </form>
            </div>}
            {isLoggedIn && <div className='px-5 py-3 rounded-sm shadow-xl backdrop-blur-lg'>
                <div className='flex flex-col flex-wrap'>
                    <div className='pointer-events-none text-center mb-3'>
                        <h1 className='capitalize'>welcome <span className='uppercase'>{users?.name}</span></h1>
                        <h5 className='text-sm'>{users?.email}</h5>
                    </div>
                    <div className='w-[90%] mx-auto my-3 pointer-events-none'>
                        <h2 className='font-bold leading-normal text-2xl underline underline-offset-5'>Data Breading:</h2>
                        <h5 className='mb-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                        <p className='leading-normal text-[1rem] text-pretty font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem excepturi
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur corporis deserunt dolorem eius eum fugiat, illum iusto necessitatibus officia officiis omnis perferendis porro provident quo quos, repellendus veritatis. Reiciendis!</p>
                    </div>
                    <div className='mb-3 flex items-center justify-center'>
                        <button
                            className='border flex rounded cursor-pointer font-bold capitalize items-center justify-center w-30 h-8'
                            onClick={() => {
                                setIsLoggedIn(false)
                                setUsers({...users, name: '', email:'',password: undefined})
                            }}
                        >log out</button>
                    </div>
                </div>
            </div>}
        </>

    );
};

export default MainApp;