import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
export const  SideBarData = [
    {
        title : 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title : 'Editor',
        path: '/',
        icon: <AiIcons.AiFillEdit/>,
        cName:'nav-text',
    },
    {
        title : 'About the project',
        path: '/about',
        icon: <AiIcons.AiFillQuestionCircle/>,
        cName:'nav-text'
    },
    {
        title : 'Roma',
        path: '/roma',
        icon: <IoIcons.IoPersonCircleOutline/>,
        cName:'nav-text'
    },
    {
        title : 'Sergey',
        path: '/sergey',
        icon: <IoIcons.IoPersonCircleOutline/>,
        cName:'nav-text'
    },
] 
