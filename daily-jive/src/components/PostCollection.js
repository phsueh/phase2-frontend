import React, { Component } from 'react'
import PostCard from './PostCard'
import { Card } from 'semantic-ui-react'

export default class PostCollection extends Component {

 renderPostCard =  () => {
    return  this.props.usersInfo.map((usersInfoObj) => {
return <PostCard key={usersInfoObj.id} usersInfoObj={usersInfoObj}/>

  }) 
 }

// map out array from 
    render() {
        return (
        // console.log(this.props.usersInfo)
        <Card.Group itemsPerRow={4}>
            {/* <div className="post-collection" style={{padding: 10}}> */}
                {this.renderPostCard()}
            {/* </div> */}
        </Card.Group>
        )
    }
}
