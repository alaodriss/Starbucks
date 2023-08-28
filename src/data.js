import icon1 from './assets/images/getting-started-1_2x.jpg'
import icon2 from './assets/images/getting-started-2_2x.jpg'
import icon3 from './assets/images/getting-started-3_2x.jpg'
/** */

import img1 from './assets/images/025.png'
import img2 from './assets/images/100.png'
import img3 from './assets/images/200.png'
import img4 from './assets/images/300.png'
import img5 from './assets/images/400.png'


import $img1 from './assets/images/1-fun-freebies.jpg'
import $img2 from './assets/images/2-order-and-pay-ahead.jpg'
import $img3 from './assets/images/3-get-to-free-faster.jpg'
import { Link } from 'react-router-dom'


export  const Gettings = [
    {
        id:1,
        icon: icon1,
        title: 'Create an account',
        text:'To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.'
    },
    {
        id:2,
        icon:icon2,
        title: 'Order and pay how you’d like',
        text:'Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how'
    },
    {
        id:3,
        icon:icon3,
        title: 'Earn Stars, get Rewards',
        text:'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!'
    }
]



export const tabData = [
    {
      number:25,
      img: img1,
      title: 'Customize your drink',
      text:'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.'
    },
    {
        number:100,
        img: img2,
        title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        text:'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.'
      },
      {
        number:200,
        img: img3,
        title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        text:'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.'
      },
      {
        number:300,
        img: img4,
        title: 'Customize your drink',
        text:'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.'
      },
      {
        number:400,
        img: img5,
        title: 'Sandwich, protein box or at-home coffee',
        text:'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.'
      },
  ];





  
export const dataEndless = [
  {
    id:1,
    img: $img1,
    title: 'Fun freebies',
    text:'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
    Link:"https://www.starbucks.com/"
  },
  {
      id:2,
      img: $img2,
      title: 'Order & pay ahead',
      text:'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.', 
      Link:"https://www.starbucks.com/"
    },
    {
      id:2,
      img: $img3,
      title: 'Get to free faster',
      text:'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
      Link:"https://www.starbucks.com/"
    },
];