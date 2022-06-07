import axios from 'axios';
import AuthService from '../../services/auth.service';
const API_URL = 'http://localhost:4000/api';
import { getToken } from '../../helpers/authTokenHelper';

// initial state
const state = () => ({
  dashboardEmployer: {},
  employerDetails: {},
  isLoading: false,
})

// getters
const getters = {
  dashboardEmployer: state => state.dashboardEmployer,
  isLoading: state => state.isLoading,
  employerDetails: state => state.employerDetails,
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

  async fetchEmployerByUrl({ commit }, url) {

    commit('setIsLoading', true);
    const token = await getToken();
    await axios.get(`${API_URL}/employers/${url}`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(res => {
        console.log(res);
        const employerDetails = res.data.data;
        commit('setEmployersDetails', employerDetails);
        commit('setIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setIsLoading', false);
      });
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

  setIsLoading: (state, isLoading) => {
    state.isLoading = isLoading
  },

  setEmployersDetails: (state, employerDetails) => {
    state.employerDetails = employerDetails
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