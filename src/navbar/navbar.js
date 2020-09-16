import React, { useState } from 'react';
import menu from '../menu.png';
import closem from '../close-window.png';
function Navbar(props) {
    const [isopen, setisopen] = useState(false);
    function abc() {
        if (isopen === false) {
            return true;
        }
        return false;
    }

    const { color, NavbarItems } = props;
    return (
        <nav style={{ backgroundColor: color }} >
            <div className="logo" >LOGO</div>
            <div className={!isopen ? "nav_items " : " nav_items nav_items_s"} >
                {NavbarItems.map(items => <div className="nav_item" key={items}><a href={items + '.html'}>{items}</a></div>)}
            </div>
            <div className="mobile_menu">
                <img src={!isopen ? menu : closem} alt="" onClick={() => setisopen(abc())} />
            </div>
        </nav>
    );
}
export default Navbar;