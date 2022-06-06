import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AboutUs from '../views/BasicPages/AboutUs.vue';
import ContactUs from '../views/BasicPages/ContactUs.vue';
import FAQ from '../views/BasicPages/FAQ.vue';
import HowItWorks from '../views/BasicPages/HowItWorks.vue';
import TAndC from '../views/BasicPages/T&C.vue';

import InternshipList from '../views/Internships/List.vue';
import InternshipDetails from '../views/Internships/Details.vue';

import StudentDashboard from "../views/Student/Dashboard.vue";
import StudentProfile from "../views/Student/Profile.vue";
import StudentAppliedJobs from '../views/Student/AppliedJobs.vue';

import { getUserDetails } from '../helpers/localStorageHelper';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home",
    },
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
      authorize: ["student"],
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
  
  {
    path: '/student/dashboard',
    name: 'StudentDashboard',
    component: StudentDashboard,
    meta: { 
      authorize: ["student"],
      title: "Dashboard"
    } 
  },
  {
    path: '/student/profile',
    name: 'StudentProfile',
    component: StudentProfile,
    meta: { 
      authorize: ["student"],
      title: "My Profile"
    } 
  },
  {
    path: '/student/applied-jobs',
    name: 'StudentAppliedJobs',
    component: StudentAppliedJobs,
    meta: { 
      authorize: ["student"],
      title: "Applied Jobs"
    } 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  // Add Meta Title
  document.title = to.meta.title ? `${to.meta.title} | JobHunt - Remote Internship Platform` : 'JobHunt - Remote Internship Platform';

  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = getUserDetails();

  console.log(currentUser)

  if (authorize) {
      if (!currentUser) {
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

export default router
