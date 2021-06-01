import React, { Component } from 'react'

export default class PostCard extends Component {
    render() {
        return (
            <div className="post_card">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut scelerisque lacus, vitae scelerisque ex. Proin sit amet augue dignissim dolor aliquet scelerisque. Nam nec eleifend diam, pellentesque varius augue. Nulla ullamcorper arcu odio, quis porttitor urna mattis sit amet. Praesent molestie nisi nulla, vitae varius nunc vulputate et. Vestibulum egestas vitae odio eu tincidunt. Praesent porttitor urna nec massa pharetra pulvinar. Pellentesque dolor mi, dapibus a cursus quis, aliquam id ligula.</p>
                <br></br>
                <button className="like-btn"></button>
            </div>

        )
    }
}
