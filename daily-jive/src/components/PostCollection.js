import React, { Component } from 'react'
import PostCard from './PostCard'

export default class PostCollection extends Component {

// map out array from 
    render() {
        return (
            <div className="post-collection">
                <PostCard></PostCard>
            </div>
        )
    }
}
