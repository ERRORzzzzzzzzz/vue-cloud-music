import VueRouter from 'vue-router'

import Main from '../pages/main/index';
import Recommend from '../pages/main/recommend'
import Rank from '../pages/main/rank'
import Singer from '../pages/main/singer'
import SongList from '../pages/songList'

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Main,
      children: [{
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'singer',
          component: Singer
        },
        {
          path: 'rank',
          component: Rank
        }
      ]
    },
    {
      path: '/songlist/:id',
      component: SongList
    },
    {
      path: '/',
      redirect: '/home/recommend'
    },
    {
      path: '/home',
      redirect: '/home/recommend'
    }
  ]
})


export default router;