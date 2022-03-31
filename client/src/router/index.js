import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AboutUs from '../views/BasicPages/AboutUs.vue';
import ContactUs from '../views/BasicPages/ContactUs.vue';
import FAQ from '../views/BasicPages/FAQ.vue';
import HowItWorks from '../views/BasicPages/HowItWorks.vue';
import TAndC from '../views/BasicPages/T&C.vue';

import InternshipList from '../views/Internships/List.vue';
import InternshipDetails from '../views/Internships/Details.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
    meta: {
      title: "Frequently Asked Questions",
    },
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks,
    meta: {
      title: "How It Works",
    },
  },
  {
    path: '/terms-and-conditions',
    name: 'TAndC',
    component: TAndC,
    meta: {
      title: "Terms & Conditions",
    },
  },
  {
    path: '/internships',
    name: 'Internships',
    component: InternshipList,
    meta: {
      title: "Internship List",
    },
  },
  {
    path: '/details/:url',
    props: true,
    name: 'InternshipDetails',
    component: InternshipDetails,
    // meta: { 
    //   authorize: [Role.Student],
    //   title: "Internship Detail"
    // } 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
