import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Index from '../views/Index.vue';
import StudentDashboard from '../views/Student/Dashboard.vue';
import EmployerDashboard from '../views/Employer/Dashboard.vue';
import AboutUs from '../views/Pages/AboutUs.vue';
import ErrorPage from '../views/Pages/404.vue';
import ContactUs from '../views/Pages/ContactUs.vue';
import FAQ from '../views/Pages/FAQs.vue';
import HowItWorks from '../views/Pages/HowItWorks.vue';
import TAndC from '../views/Pages/T&C.vue';

import authService from '../services/auth.service';

import { Role } from '../helpers/role';

const routes = [
  // Public Routes
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

  // Student Routes
  {
    path: '/student-dashboard',
    name: 'StudentDashboard',
    component: StudentDashboard,
    meta: { authorize: [Role.Student] } 
  },

  // Employer Routes
  {
    path: '/employer-dashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard,
    meta: { authorize: [Role.Employer] } 
  },

  // 404 Page Route
  {
    path: '/404',
    name: 'ErrorPage',
    component: ErrorPage,
  },
  { path: '/:catchAll(.*)', redirect: '/404' }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = authService.currentUser();

  if (authorize) {
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return next({ path: '/', query: { returnUrl: to.path } });
      }

      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser.role)) {
        // role not authorised so redirect to home page
        return next({ path: '/' });
      }
  }

  next();
})

export default router;