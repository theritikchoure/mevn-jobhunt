import { createStore, createLogger } from 'vuex';
import auth from './modules/auth.module';
import internship from './modules/internship.module';
import employer from './modules/employer.module';
import student from './modules/student.module';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
    internship,
    employer,
    student,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
