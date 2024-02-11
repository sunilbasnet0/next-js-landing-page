import React from 'react'
import MenuItems from './MenuItems'

const Dropdown = ({ dropdownItems, depthLevel, dropdown }) => {
  return (
    // 
    <div className={`dropdown-menu  ${dropdown ? "show" : ""}`}>
      <ul>
        {dropdownItems.map((submenu, index) => (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    </div>

  )
}

export default Dropdown