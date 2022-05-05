import './App.css';
import { myFriends, friendPost, allAds } from './array';
import NavBar from './Components/NavBar/NavBar';
import Friends from './Components/friends/Friends';
import Post from './Components/post/Post';
import Ads from './Components/ads/Ads';

function App() {
  return (
    <body>
      <div className='container'>
        <div className='all-contents'>
          <div className='navbar'>
            <NavBar />
          </div>

          <div className='content'>
            <div className='lsidebar'>
              <h2>FRIENDS</h2>
              <Friends data={myFriends} />
            </div>

            <div className='center'>
                            
              <h2>POSTS</h2>
              <Post data={friendPost} />
            </div>

            <div className='rsidebar'>
              <h2>ADS</h2>
              <Ads data={allAds}/>
            </div>
          </div>
        </div>
    
      </div>
    </body>

  );
}

export default App;
