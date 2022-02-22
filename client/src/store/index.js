import { createStore, createLogger } from 'vuex';
// import { auth } from './auth.module';
// import { internship } from './internship.module';
import auth from './modules/auth.module';
import internship from './modules/internship.module';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
    internship,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
