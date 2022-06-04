import axios from 'axios';
import AuthService from '../../services/auth.service';
import AuthValidation from '../../validations/auth.validation';
import { getAPIResponseError } from '../../helpers/common';
import { deleteAllLocalData, saveUserDetails, getUserDetails } from '../../helpers/localStorageHelper';
import { saveToken, getToken, } from '../../helpers/authTokenHelper';
const API_URL = 'http://localhost:4000/api/auth';

// initial state
const state = () => ({
  user: {},
  isAuthLoading: false,
  authErrorMsg: '',
  authSuccessMsg: '',
  isLoggedIn: false,
  userDetails: {},
})

// getters
const getters = {
  user: state => state.user,
  isAuthLoading: state => state.isAuthLoading,
  isLoggedIn: state => state.isLoggedIn,
  authSuccessMsg: state => state.authSuccessMsg,
  authErrorMsg: state => state.authErrorMsg,
  userDetails: state => state.userDetails
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

    try {
      commit('setIsLoading', true);
      const token = await getToken();
      const { data } = await axios.get(`${API_URL}/myprofile`, {headers: { 'Authorization': `Bearer ${token}` }});
      console.log(data.data)
      commit('setUserDetail', data.data);
      commit('setIsLoading', false);
      return data.data;
    } catch (error) {
      console.log('error', error);
      commit('setIsLoading', false);   
      return false;
    }
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
  
  async userRegister({ commit }, payload) {

    try {

      commit('setIsLoading', true);

      const errors = AuthValidation.register(payload);
      if(errors) {
        commit('setIsLoading', false);
        commit('setAuthErrorMsg', errors);
        return;
      };

      commit('setAuthErrorMsg', "");

      const { data } = await axios.post(`${API_URL}/register`, payload);
  
      if(data) {
        commit('setUser', data.data);
        commit('setToken', data.data.token);
        commit('setIsLoading', false);
        commit('setIsLoggedIn', true);

        saveUserDetails(data.data);
        saveToken(data.data.token);
        
        return true;
      }
      
    } catch (error) {
      console.log(error);
      commit('setIsLoading', false);
      return false;
    }
  },
  
  async updateProfile({ commit }, payload) {

    try {

      commit('setIsLoading', true);

      const errors = AuthValidation.studentProfileUpdate(payload);
      if(errors) {
        commit('setIsLoading', false);
        commit('setAuthErrorMsg', errors);
        return;
      };

      commit('setAuthErrorMsg', "");

      const token = await getToken();
      const { data } = await axios.put(`${API_URL}/profile-update`, payload, { headers: { 'Authorization': `Bearer ${token}` }});
  
      if(data) {
        commit('setUser', data.data);
        commit('setIsLoading', false);
        commit('setIsLoggedIn', true);

        saveUserDetails(data.data);
        
        return data.data;
      }
      
    } catch (error) {
      console.log(error);
      commit('setIsLoading', false);
      return false;
    }
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