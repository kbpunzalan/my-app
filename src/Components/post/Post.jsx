import './post.css'
import React from 'react'

class Post extends React.Component {
    render() {
        const friendPost = this.props.data
        return(
            <div className='post-container'>
                {
                    friendPost.map((friendPost) => {
                        return(
                            <div className='separate'>
                                <div className='post-items'>
                                    <div className='friend-details'>
                                        <img src={friendPost.image} className='post-image' />
                                        <div className='author-time'>
                                            <span className='author'>{friendPost.author}</span>
                                            <span>{friendPost.timestamp}</span>
                                            <span>{friendPost.time}</span>
                                        </div>
                                    </div>

                                    <div className='content-details'>
                                        {friendPost.content}
                                    </div>

                                </div>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}

export default Post