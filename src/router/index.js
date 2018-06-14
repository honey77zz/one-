import Vue from 'vue'
import Router from 'vue-router'
import One from '@/page/One'
import Home from '@/page/Home'
import Article from '@/page/Article'
import Music from '@/page/Music'
import Movie from '@/page/Movie'
import Login from '@/page/Login'
import About from '@/page/About'
import Details from '@/page/Details'
import Register from '@/page/Register'
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
      name: 'One',
      component: One
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
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
          path: '/register',
          name: 'Register',
          component: Register
      },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
