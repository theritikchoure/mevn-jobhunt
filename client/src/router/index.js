import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Index from '../views/Index.vue';
import AboutUs from '../views/Pages/AboutUs.vue';
import ErrorPage from '../views/Pages/404.vue';
import ContactUs from '../views/Pages/ContactUs.vue';
import FAQ from '../views/Pages/FAQs.vue';
import HowItWorks from '../views/Pages/HowItWorks.vue';
import TAndC from '../views/Pages/T&C.vue';

import StudentDashboard from '../views/Student/Dashboard.vue';
import StudentProfile from '../views/Student/Profile.vue';
import StudentChangePassword from '../views/Student/ChangePassword.vue';
import StudentAppliedJobs from '../views/Student/AppliedJob.vue';

import EmployerDashboard from '../views/Employer/Dashboard.vue';
import EmployerProfile from '../views/Employer/Profile.vue';
import EmployerPostNewJob from '../views/Employer/PostNewJob.vue';
import EmployerChangePassword from '../views/Employer/ChangePassword.vue';

import Internships from '../views/Internship/InternshipList.vue';
import InternshipDetail from '../views/Internship/InternshipDetail.vue';

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

  {
    path: '/internships',
    name: 'Internships',
    component: Internships,
    meta: { authorize: [Role.Student, Role.Admin, Role.Employer] } 
  },
  
  {
    path: '/details/:url',
    props: true,
    name: 'InternshipDetail',
    component: InternshipDetail,
    meta: { authorize: [Role.Student, Role.Admin, Role.Employer] } 
  },

  // Student Routes
  {
    path: '/student/dashboard',
    name: 'StudentDashboard',
    component: StudentDashboard,
    meta: { authorize: [Role.Student] } 
  },
  {
    path: '/student/profile',
    name: 'StudentProfile',
    component: StudentProfile,
    meta: { authorize: [Role.Student] } 
  },
  {
    path: '/student/change-password',
    name: 'StudentChangePassword',
    component: StudentChangePassword,
    meta: { authorize: [Role.Student] } 
  },
  {
    path: '/student/applied-jobs',
    name: 'StudentAppliedJobs',
    component: StudentAppliedJobs,
    meta: { authorize: [Role.Student] } 
  },

  // Employer Routes
  {
    path: '/employer/dashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard,
    meta: { authorize: [Role.Employer] } 
  },
  {
    path: '/employer/profile',
    name: 'EmployerProfile',
    component: EmployerProfile,
    meta: { authorize: [Role.Employer] } 
  },
  {
    path: '/employer/post-new-job',
    name: 'EmployerPostNewJob',
    component: EmployerPostNewJob,
    meta: { authorize: [Role.Employer] } 
  },
  {
    path: '/employer/change-password',
    name: 'EmployerChangePassword',
    component: EmployerChangePassword,
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
          // return next({ path: '/', query: { returnUrl: to.path } });
          return next({ path: '/' });
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