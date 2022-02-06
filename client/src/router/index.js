import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Index from '../views/Index.vue';
import StudentDashboard from '../views/Student/Dashboard.vue';
import AboutUs from '../views/Pages/AboutUs.vue';
import Error from '../views/Pages/404.vue';
import ContactUs from '../views/Pages/ContactUs.vue';
import FAQ from '../views/Pages/FAQs.vue';
import HowItWorks from '../views/Pages/HowItWorks.vue';
import TAndC from '../views/Pages/T&C.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
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
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks,
  },
  {
    path: '/terms-and-conditions',
    name: 'TAndC',
    component: TAndC,
  },
  {
    path: '/student-dashboard',
    name: 'StudentDashboard',
    component: StudentDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
