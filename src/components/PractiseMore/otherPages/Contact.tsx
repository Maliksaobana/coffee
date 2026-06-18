const Contact = ({id}:{id:string}) => {
    return (
        <div id={id} className='padding_main bg-white'>
            <div className="flex flex-col flex-nowrap justify-center items-center">
                <div className="title_component">
                    <h1>Contact <span>Us</span></h1>
                    <p>we will love to <span>hear</span> from you</p>
                </div>
                <div className="max-w-4xl w-full mt-7">
                    {/* contact method should include email address, location and textarea and submit button */}
                    <form>
                        <div className="w-full flex flex-col items-center">
                            <div className="grid grid-cols-1 grid-rows-[repeat(3,1fr)_180px] md:grid-cols-2 w-full md:grid-rows-3 gap-x-8 gap-y-2">
                                <label className='capitalize flex flex-col font-semibold text-mainContactSize'>
                                    email address
                                    <span className='mt-2'>
                                        <input type="email" placeholder='Enter Your Email Address' className='border border-foreground p-2 w-full rounded-md outline-none text-[15px]' />
                                    </span>
                                </label>
                                <label className='capitalize flex flex-col font-semibold text-mainContactSize'>
                                    phone
                                    <span className='mt-2'>
                                        <input type="tel" placeholder='Enter Phone Number' className='border border-foreground p-2 w-full rounded-md outline-none text-[15px]' />
                                    </span>
                                </label>
                                <label className='capitalize flex flex-col font-semibold text-mainContactSize'>
                                    location
                                    <span className='mt-2'>
                                        <input type="text" placeholder='Enter Your Address (State only)' className='border border-foreground p-2 w-full rounded-md outline-none text-[15px]' />
                                    </span>
                                </label>
                                <label className='md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-4 capitalize flex flex-col font-semibold text-mainContactSize'>
                                    message:
                                    <span className='h-full flex-1 mt-2'>
                                        <textarea
                                            placeholder='Enter Your Message'
                                            className='border border-foreground p-2 h-full resize-none w-full rounded-md outline-none text-[15px]'></textarea>
                                    </span>
                                </label>
                            </div>
                            <div className="mt-7.5">
                                <button className='bg-foreground text-background btn_component capitalize'>send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;