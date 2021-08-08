import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';


import React from 'react';


export const SidebarData = [
    {
        title: 'Home',
        path: '/Hauptfragen',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Admin Page',
        path: '/admin-page',
        icon: <RiIcons.RiAdminLine/>,
        cName: 'nav-text'
    },

    {
        title: 'Abmelden',
        path: '/logout',
        icon: <BiIcons.BiLogOut/>,
        cName: 'nav-text'
    }
]