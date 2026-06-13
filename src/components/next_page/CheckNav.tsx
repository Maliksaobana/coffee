import {navigation} from "./nav.ts";

const CheckNav = () => {
    return (
        <>
            <div className="self-start h-20 w-full flex justify-between px-2 items-center">
                <div className="">
                    <h1>logo</h1>
                </div>
                <nav>
                    <ul className="inline-flex space-x-4 capitalize">
                        {navigation?.map(item => {
                            return (
                                <li
                                    className={`cursor-pointer nav_bg hover:text-fuchsia-700`}
                                    key={item.id}>{item.page}</li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default CheckNav;