import NavItem from './Navitem'
import React from 'react'


 class NavBar extends React.Component {
  
  render() {
    return(
      <div>
        <NavItem setLoginState={this.props.setLoginState}/>
      </div>
    )
}
}

export default NavBar 