import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AboutUs from '../views/BasicPages/AboutUs.vue';
import ContactUs from '../views/BasicPages/ContactUs.vue';
import FAQ from '../views/BasicPages/FAQ.vue';
import HowItWorks from '../views/BasicPages/HowItWorks.vue';
import TAndC from '../views/BasicPages/T&C.vue';

import NotFound from '../views/BasicPages/404.vue';

import CreateInternship from '../views/Internships/CreateNew.vue';
import InternshipList from '../views/Internships/List.vue';
import InternshipDetails from '../views/Internships/Details.vue';

import StudentDashboard from "../views/Student/Dashboard.vue";
import StudentProfile from "../views/Student/Profile.vue";

import EmployersProfile from "../views/Profile/Employer.vue";
import EmployerDashboard from "../views/Employer/Dashboard.vue";

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
      authorize: ["student", "employer"],
    },
  },
  {
    path: '/details/:url',
    props: true,
    name: 'InternshipDetails',
    component: InternshipDetails,
    meta: {
      authorize: ["student", "employer"],
    },
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
    path: '/employer/dashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard,
    meta: { 
      authorize: ["employer"],
      title: "Dashboard"
    } 
  },
  
  {
    path: '/employer/create-new-internship',
    name: 'CreateInternship',
    component: CreateInternship,
    meta: { 
      authorize: ["employer"],
      title: "Create New Internship"
    } 
  },

  {
    path: '/employer/:url',
    props: true,
    name: 'EmployersProfile',
    component: EmployersProfile,
    meta: { 
      title: "My Profile"
    } 
  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { 
      title: "Page Not Found"
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
