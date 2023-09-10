import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";
import { useSelector } from "react-redux";
import Logo from "./Icon.png"

const Title = () => (
    <a href = "/">
    <img 
        alt = "logo"
        className = "h-28 w-40 p-2"
        src = {Logo}
    />
    </a>
)

const Header = () => {

    const [isloggedIn , setisloggedIn] = useState(false);
    const isOnline = useOnline();
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className = "flex justify-between  shadow-xl bg-gray-400 ">
            <Title/>
            <div className = "nav-items">
                <ul className="flex py-10">
                    <li className="px-2">
                        <Link to="/">
                           Home
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">
                           About 
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">
                           Contact
                        </Link>
                    </li>
                    {/* <li className="px-2">
                        <Link to="/instamart">
                           Instamart
                        </Link>
                    </li> */}
                    <li className="px-2">
                        <Link to="/cart">
                           Cart -{cartItems.length} items
                        </Link> 
                    </li>
                    <li className="px-2">{isOnline? "✅" : "🔴" }</li>
                </ul>
            </div>
            {isloggedIn? (
                 <button onClick={() => setisloggedIn(false)}>logout</button>) :
                 (<button onClick={() => setisloggedIn(true)}>login</button>
            )}
        </div>
    );
};

export default Header;