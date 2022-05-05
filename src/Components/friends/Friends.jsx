import React from 'react';
import './friends.css';

class Friends extends React.Component {
    render() {
        const myFriends = this.props.data;
        return (
            <div className='friends'>
                {
                    myFriends.map((myFriends) => {
                        return (
                            <div className='separate'>
                                <div className='items' key={myFriends.id}>
                                    <img src={myFriends.image} className='f-image' />
                                    <div className='friends-text'>
                                        <span className='friend-name'>{myFriends.name}</span>
                                        <span> {myFriends.mutual} Mutual Friends</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default Friends;