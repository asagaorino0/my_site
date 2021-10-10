import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/user/erondu/1600x900";

export default function PostLink2() {
    return (
        <div className="post-link">
            <div>
                <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
            </div>
            <div className="post-link-text">
                <h2>The most powerful photo engine in the world.</h2>
                <p className="post-link-body">The Unsplash API is a modern JSON API that surfaces all of the info you’ll need to build any experience for your users. It’s so simple to use that we even run unsplash.com on it!</p>
                <p className="post-link-date">2020年5月30日</p>
            </div>
        </div>
    )
}