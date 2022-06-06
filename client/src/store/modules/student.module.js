import axios from 'axios';
import { getToken } from '../../helpers/authTokenHelper';
const API_URL = 'http://localhost:4000/api';

// initial state
const state = () => ({
  appliedInternships: [],
  isLoading: false,
})

// getters
const getters = {
  appliedInternships: state => state.appliedInternships,
  isLoading: state => state.isLoading,
};

// actions
const actions = {
  async fetchAppliedInternships({ commit }) {

    commit('setIsLoading', true);

    await axios.get(API_URL+'/students/applied-internships', 
    {headers: { 'Authorization': `Bearer ${getToken()}` }}
    )
      .then(res => {
        console.log(res);
        const internships = res.data.data;
        commit('setAppliedInternships', internships);
        commit('setIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setIsLoading', false);
      });
  },
}

// mutations
const mutations = {
  setAppliedInternships: (state, internships) => {
    state.appliedInternships = internships
  },

  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },

}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}