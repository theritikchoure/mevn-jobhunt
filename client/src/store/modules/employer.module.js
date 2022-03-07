import AuthService from '../../services/auth.service';

// initial state
const state = () => ({
  dashboardEmployer: {},
  isLoading: false,
})

// getters
const getters = {
  dashboardEmployer: state => state.dashboardEmployer,
  isLoading: state => state.isLoading,
};

// actions
const actions = {
  async employerDashboard({ commit }) {

    commit('setEmployerDashboardIsLoading', true);

    await AuthService.getLoggedInUserDetail().then(
        (response) => {
          console.log(response.data.data)
          commit('setEmployerDashboard', response.data.data);
          commit('setEmployerDashboardIsLoading', false);
          return Promise.resolve(response);
        },
        (error) => {
            console.log('error', error);
            commit('setEmployerDashboardIsLoading', false);    
            return Promise.reject(error);
        },
    );
  },

  resetInternshipState({ commit }) {
    commit('resetEmployerDashboardState');
  }
}

// mutations
const mutations = {
  setEmployerDashboard: (state, dashboardEmployer) => {
    state.dashboardEmployer = dashboardEmployer
  },

  setEmployerDashboardIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },

  resetEmployerDashboardState(state) {
    Object.assign(state, state())
  }

}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}