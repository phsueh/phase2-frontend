import NavItem from './Navitem'
// import Categorys from '../Category'
import React from 'react'


 class NavBar extends React.Component {
  
  render() {
    return(
      <div className = 'navDiv'>
        <NavItem />
        {/* <Categorys /> */}
      </div>
    )
}
}

export default NavBar 