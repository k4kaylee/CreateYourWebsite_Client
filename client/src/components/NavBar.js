import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MadeBy from './MadeBy'
import { SideBarData } from './SideBarData'
function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const a = sidebar
    return (
        <>
            <button type="button"
                className={sidebar ? 'btn menu-bars active ' : 'btn menu-bars '}
                onClick={showSidebar}>
                <span className="menu-bars__line"></span>
                <span className="menu-bars__line"></span>
                <span className="menu-bars__line"></span>
            </button>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {/*TODO: сделать блокировку скролла  */}
                {/* <div className='column width'> */}
                    <ul className='nav-menu-items'>
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                     {/* </div> */}
                    <MadeBy />
               
                <div className='nav-menu__wrapper'></div>
            </nav>

        </>
    )
}

export default NavBar
