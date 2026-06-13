const Footer = () => {
    return (
        <div className='padding_main pb-20 bg-foreground flex flex-col items-center justify-center'>
            <h1 className='font-bold text-mainSubTitleSize text-background inline-flex'><span className='uppercase'>bab</span>  <span><img
                src="/publicIcons/logoIcon.png" className='' alt="logo icon" width={30} height={30} /></span>
                <span className='uppercase'>ery</span> <span className='ml-1'>Services for you and your Family</span></h1>
            <p className='text-xs text-background'>Copyright law 2026. All Right Reserved</p>
        </div>
    );
};

export default Footer;