import React, { Component } from 'react'
import PostCard from './PostCard'

export default class PostCollection extends Component {

 renderPostCard =  () => {
    return  this.props.usersInfo.map((usersInfoObj) => {
return <PostCard key={usersInfoObj.id} usersInfoObj={usersInfoObj}/>

  }) 
 }

// map out array from 
    render() {


        console.log(this.props.usersInfo)
        return (
            <div className="post-collection">
                {this.renderPostCard()}
            </div>
        )
    }
}
