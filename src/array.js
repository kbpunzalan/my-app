import teteng from './pics/friends/teteng.jpg'
import ponzy from './pics/friends/ponzy.jpg'
import buknoy from './pics/friends/buknoy.jpg'
import merlita from './pics/friends/merlita.jpg'
import florencia from './pics/friends/florencia.jpg'
import yor from './pics/friends/yor.jpg'

import earth from './pics/ads/earth.jpg'
import ref from './pics/ads/ref.jpg'

const myFriends = [
    { name: "Teteng Batumbakal  ", image: teteng, mutual: 150, id: 1},
    { name: "Ponzy Mari", image: ponzy, mutual: 1000, id: 2 },
    { name: "Buknoy di Mauga", image: buknoy, mutual: 69, id: 3 },
    { name: "Merlita Ligalig", image: merlita, mutual: 666, id: 4}, 
    { name: "Florencia Balimbing", image: florencia, mutual: 75, id: 5},
    { name: "Yor Cutie", image: yor, mutual: 9999999, id: 6} 
];

const friendPost = [
    { author: myFriends[3].name, image: myFriends[3].image, timestamp: "01/18/2022 | 11:37", content: "Nak ung cnaing! Pataye n at bka msunog!" },
    { author: myFriends[3].name, image: myFriends[3].image, timestamp: "01/18/2022 | 11:40",content: "Sorry, Metuhh friends. I thought the previous post was a direct message. Will delete the post later." },
    { author: myFriends[5].name, image: myFriends[5].image, timestamp: "05/05/2022 | 16:19", content: "Anime Waifus for LENI-KIKO! 🌸🌸" }
];




const allAds = [
    { description: 'Mother Earth, flat na nga ba!?', image: earth, id: 1 },
    { description: 'Ano itong pinasok sa ref na tumigas? Alamin!', image: ref, id: 2 }
];

export { myFriends, friendPost, allAds }