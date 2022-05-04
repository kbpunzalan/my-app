import teteng from './pics/friends/teteng.jpg'
import ponzy from './pics/friends/ponzy.jpg'
import buknoy from './pics/friends/buknoy.jpg'
import merlita from './pics/friends/merlita.jpg'
import florencia from './pics/friends/florencia.jpg'
import yor from './pics/friends/yor.jpg'

const friendImages = [teteng, ponzy, buknoy, merlita, florencia, yor];
const myFriends = [
    { name: "Teteng Batumbakal  ", image: friendImages[0], mutual: 150, id: 1},
    { name: "Ponzy Mari", image: friendImages[1], mutual: 1000, id: 2 },
    { name: "Buknoy di Mauga", image: friendImages[2], mutual: 69, id: 3 },
    { name: "Merlita Ligalig", image: friendImages[3], mutual: 666, id: 4}, 
    { name: "Florencia Lumacad", image: friendImages[4], mutual: 75, id: 5},
    { name: "Yor Cutie", image: friendImages[5], mutual: 9999999, id: 6} 
];

const mainContent = [

];

const allAds = [
    { description: 'Utot na pinasok sa ref, tumigas!', id: 1 },
    { description: 'Utot na pinasok sa ref, tumigas!', id: 2 }
];

export { myFriends, mainContent, allAds }