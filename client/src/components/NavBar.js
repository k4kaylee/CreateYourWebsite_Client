import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import MadeBy from './MadeBy'
import { SideBarData } from './SideBarData'
import { Context } from '..';
function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    // const showSidebar = () => setSidebar(!sidebar) 
    const showSidebar = () => {
        setSidebar(!sidebar);
        // sidebar ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
      }
    // const hi = () =>{
    //     if (button.className)
    //     console.log('hi');
    // }
    const a = sidebar
    const { store } = useContext(Context)
    return (
        <>
            <button type="button"
                className={sidebar ? 'btn menu-bars active ' : 'btn menu-bars '}
                onClick={showSidebar}
                // onClick={hi}
                >
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
                                <li key={index} className={item.cName}
                                    >
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                                
                            )
                        })}
                    </ul>
                    <Link to="/login">
                        <button  onClick={()=>store.logout()}
                                style={{ color: "red", height: "44px", marginRight:"0px" }} className="btn__clickable">Выйти</button>
                    </Link>

                     {/* </div> */}
                    <MadeBy />
               
                <div className='nav-menu__wrapper'></div>
            </nav>

        </>
    )
}

export default NavBar
