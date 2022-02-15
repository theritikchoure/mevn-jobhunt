import axios from 'axios';
import AuthService from '../../services/auth.service';

// initial state
const state = () => ({
  user: {},
  token: null,
  isLoading: false,
  isLoggedIn: false,
})

// getters
const getters = {
  user: state => state.user,
  token: state => state.token,
  isLoading: state => state.isLoading,
  isLoggedIn: state => state.isLoggedIn,
};

// actions
const actions = {

  async loggedInUser({ commit }) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')): {};
    const userToken = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')): null;
    commit('setUser', currentUser);
    commit('setToken', userToken);
    if(JSON.parse(localStorage.getItem('user'))) {
        commit('setIsLoggedIn', true);
    } else {
        commit('setIsLoggedIn', false);
    }
  },

  async userLogin({ commit }, object) {

    commit('setIsLoading', true);

    await AuthService.login(object).then(
        (response) => {
          console.log(response);
          commit('setUser', response.data);
          commit('setToken', response.data.token);
          commit('setIsLoading', false);
          commit('setIsLoggedIn', true);
          return Promise.resolve(response);
        },
        (error) => {
            console.log('error', error);
            commit('setIsLoading', false);    
            return Promise.reject(error);
        },
    );
  },
  
  async userRegister({ commit }, object) {

    commit('setIsLoading', true);

    await AuthService.register(object).then(
        (response) => {
          console.log(response);
          commit('setUser', response.data);
          commit('setToken', response.data.token);
          commit('setIsLoading', false);
          commit('setIsLoggedIn', true);
          return Promise.resolve(response);
        },
        (error) => {
            console.log('error', error);
            commit('setIsLoading', false);    
            return Promise.reject(error);
        },
    );
  },

  async fetchDetailInternship({ commit }, url) {
    commit('setIsLoading', true);
    await InternshipService.getInternshipDetail(url).then(
      (internship) => {
        console.log(internship.data.data)
        commit('setInternshipDetail', internship.data.data);
        commit('setIsLoading', false);
        return Promise.resolve(internship);
      },
      (error) => {
          console.log('error', error);
          commit('setIsLoading', false);    
          return Promise.reject(error);
      },
    );
  },
}

// mutations
const mutations = {
  setUser: (state, user) => {
    state.user = user
  },

  setToken: (state, token) => {
    state.token = token
  },

  setIsLoggedIn: (state, isLoggedIn) => {
    state.isLoggedIn = isLoggedIn
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