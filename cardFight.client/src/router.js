import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/cardForm/:deckId',
    name: 'CardForm',
    component: loadPage('CardForm'),
  },
  {
    path: '/cardPage',
    name: 'CardPage',
    component: loadPage('CardPage')
  },
  {
    path: '/deckFormPage',
    name: 'DeckFormPage',
    component: loadPage('DeckFormPage')
  },
  {
    path: '/deckPage',
    name: 'DeckPage',
    component: loadPage('DeckPage')
  },
  {
    path: '/deckDetailsPage/:deckId',
    name: 'DeckDetailsPage',
    component: loadPage('DeckDetailsPage')
  },
  {
    path: '/battlePage/:deckId',
    name: 'BattlePage',
    component: loadPage('BattlePage')
  },
  {
    path: '/rulesPage',
    name: 'RulesPage',
    component: loadPage('RulesPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
