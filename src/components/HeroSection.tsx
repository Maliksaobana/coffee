const HeroSection = ({id}:{id:string}) => {
    return (
        <section id={id} className="min-h-screen flex items-center justify-center hero_wrapper px-2 py-4 4xl:px-12 lg:px-18">
            <div className="flex-1 text-center">
                <h1 className='4xl:text-6xl text-3xl capitalize font-bold'>freshly <span className='bg-foreground bg-clip-text text-transparent'>baked</span>, perfectly <span className='bg-background bg-clip-text text-transparent'>poured</span> <br/> crafted for every moment</h1>
                <p className='mb-4 4xl:w-1/2 mx-auto text-pretty mt-2 font-semibold max-4xl:text-sm'>Experience the perfect blend of
                    bakery premium and signature drinks in a space made for connection and comfort worth savoring</p>

                <div className="flex justify-center sm:space-x-6 max-sm:space-y-4 max-sm:flex-col items-center">
                    <button className='btn_component bg-foreground text-background'>Reserve a Table</button>
                    <button className='btn_component bg-background text-foreground'>Place Order</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;