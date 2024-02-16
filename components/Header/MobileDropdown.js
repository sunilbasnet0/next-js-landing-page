import React from 'react'
import MobileMenuItem from './MobileMenuItem'

const MobileDropdown = () => {
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItem items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>

  )
}

export default MobileDropdown
