import React from 'react'
import About from '../components/about'
import Home from '../components/home'
import Service from '../components/service'
import Contact from '../components/contact'


export const Routes = [
    {
        url: '/',
        component: () => <Home />,
        exact: true,
    },
    {
        url: '/service',
        component: () => <Service />,
        exact: true,
    },
    {
        url: '/about',
        component: () => <About />,
        exact: true,
    },
    {
        url: '/contact',
        component: () => <Contact/>,
        exact: true,
    },
    
]
