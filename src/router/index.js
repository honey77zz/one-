import Vue from 'vue'
import Router from 'vue-router'
import Pic from '@/page/Pic'
import Home from '@/page/Home'
import Story from '@/page/Story'
import Music from '@/page/Music'
import Movie from '@/page/Movie'
import Login from '@/page/Login'
import About from '@/page/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/one',
      name: 'Pic',
      component: Pic
    },
    {
      path: '/article',
      name: 'Story',
      component: Story
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
