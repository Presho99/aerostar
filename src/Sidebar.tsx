import React from 'react'

interface SidebarProps {
    onSelect: (selectedItem: string) => void
}

const Sidebar = () =>{
    const navItems: string[] = ['Dashboard', 'Flights', 'Wallet', 'Statistics', 'Settings']

   
  return (
    <div className='sidebar'>
        <ul>
            {navItems.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar