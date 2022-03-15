import axios from 'axios';
import AuthService from '../../services/auth.service';
import AuthValidation from '../../validations/auth.validation';
import { getAPIResponseError } from '../../helpers/common';
import { deleteAllLocalData, saveUserDetails, getUserDetails } from '../../helpers/localStorageHelper';
import { saveToken } from '../../helpers/authTokenHelper';
const API_URL = 'http://localhost:4000/api/auth';

// initial state
const state = () => ({
  user: {},
  isAuthLoading: false,
  authErrorMsg: '',
  authSuccessMsg: '',
  isLoggedIn: false,
})

// getters
const getters = {
  user: state => state.user,
  isAuthLoading: state => state.isAuthLoading,
  isLoggedIn: state => state.isLoggedIn,
  authSuccessMsg: state => state.authSuccessMsg,
  authErrorMsg: state => state.authErrorMsg,
};

// actions
const actions = {

  async loggedInUser({ commit }) {
    if(getUserDetails()) {
        commit('setIsLoggedIn', true);
        commit('setUser', getUserDetails());
    } else {
        commit('setIsLoggedIn', false);
    }
  },
  
  async loggedInUserCompleteDetails({ commit }) {
    commit('setIsLoading', true);
    await AuthService.getLoggedInUserDetail().then(
      (response) => {
        console.log(response.data.data)
        commit('setUserDetail', response.data.data);
        commit('setIsLoading', false);
        return Promise.resolve(response);
      },
      (error) => {
          console.log('error', error);
          commit('setIsLoading', false);    
          return Promise.reject(error);
      },
    );
  },

  async userLogin({ commit }, payload) {

    try {
      const errors = AuthValidation.login(payload);
      if(errors) {
        commit('setAuthErrorMsg', errors);
        return;
      };
  
      commit('setIsLoading', true);

      const { data } = await axios.post(`${API_URL}/login`, payload);

      commit('setUser', data.data);
      commit('setIsLoading', false);
      commit('setIsLoggedIn', true);

      saveUserDetails(data.data);
      saveToken(data.data.token);
      
      return true;
    } catch (error) {
      commit('setIsLoading', false);
      commit('setAuthErrorMsg', getAPIResponseError(error) || 'Unable to login please try again');
      return false;
    }
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
}

// mutations
const mutations = {
  setUser: (state, user) => {
    state.user = user
  },
  
  setUserDetail: (state, userDetails) => {
    state.userDetails = userDetails
  },

  setIsLoggedIn: (state, isLoggedIn) => {
    state.isLoggedIn = isLoggedIn
  },

  setIsLoading(state, isAuthLoading) {
    state.isAuthLoading = isAuthLoading
  },

  setAuthSuccessMsg(state, authSuccessMsg) {
    state.authSuccessMsg = authSuccessMsg
  },
  
  setAuthErrorMsg(state, authErrorMsg) {
    state.authErrorMsg = authErrorMsg
  },

  setClearAuthSuccessMsg(state) {
    state.authSuccessMsg = ''
  },

  setClearAuthErrorMsg(state) {
    state.authErrorMsg = ''
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}