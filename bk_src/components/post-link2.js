import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/WLUHO9A_xik/1600x900";

export default function PostLink2() {
    return (
        <div className="post-link">
            <div>
                <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
            </div>
            <div className="post-link-text">
                <h2>My second blog post</h2>
                <p className="post-link-body">また、GatsbyでMy second blog </p>
                <p className="post-link-date">2020年7月30日</p>
            </div>
        </div>
    )
}