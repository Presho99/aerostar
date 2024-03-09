import React from 'react'
import '../components/Sidebar.css'
import WorldMap from '../components/WorldMap'
import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.jpeg'
import four from '../assets/four.jpeg'

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
            <h3>Active Users</h3>
            <div className='circles'>
                <div className='circle'>
                    <img src={one}/>
                </div>
                <div className='circle'>
                     <img src={two}/>
                </div>
                <div className='circle'>
                     <img src={three}/>
                </div>
                <div className='circle'>
                     <img src={four}/>
                </div>
                <div className='circle'>
                    <h3>70+</h3>
                </div>
            </div>

        </div>
        <div className='map'>
            <WorldMap/>
        </div>
    </div>
  )
}

export default Sidebar