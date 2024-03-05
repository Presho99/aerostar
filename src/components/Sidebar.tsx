import React from 'react'
import '../components/Sidebar.css'
import WorldMap from '../components/WorldMap'

interface SidebarProps {
    onSelect: (selectedItem: string) => void
}

const Sidebar = () =>{
    const navItems: string[] = ['Dashboard', 'Flights', 'Wallet', 'Statistics', 'Settings']

   
  return (
    <div className='sidebar'>
        <div className='profile'>
            <img src=""/>
            <h3>Precious Omondi</h3>
            <p>omondiprecious@gmail.com</p>
        </div>
        <ul>
            {navItems.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
        <div className='users'>

        </div>
        <div className='map'>
            <WorldMap/>
        </div>
    </div>
  )
}

export default Sidebar