import axios from 'axios';
import InternshipService from '../../services/internship.service';
import AuthService from '../../services/auth.service';
import { getAPIResponseError } from '../../helpers/common';
import { getToken } from '../../helpers/authTokenHelper';
const API_URL = 'http://localhost:4000/api';
const token = JSON.parse(localStorage.getItem('token'));

// initial state
const state = () => ({
  internships: null,
  internshipsPaginatedData: null,
  internship: null,
  likedInternship: [],
  appliedInternship: [],
  isLoading: false,
  isCreating: false,
  createdData: null,
  isUpdating: false,
  updatedData: null,
  isDeleting: false,
  deletedData: null
})

// getters
const getters = {
  internships: state => state.internships,
  internshipsPaginatedData: state => state.internshipsPaginatedData,
  internship: state => state.internship,
  likedInternship: state => state.likedInternship,
  appliedInternship: state => state.appliedInternship,
  isLoading: state => state.isLoading,
  isCreating: state => state.isCreating,
  isUpdating: state => state.isUpdating,
  createdData: state => state.createdData,
  updatedData: state => state.updatedData,

  isDeleting: state => state.isDeleting,
  deletedData: state => state.deletedData
};

// actions
const actions = {
  async fetchAllInternships({ commit }) {

    commit('setInternshipIsLoading', true);

    await axios.get(API_URL+'/internships')
      .then(res => {
        console.log(res);
        const products = res.data.data;
        commit('setInternships', products);
        commit('setInternshipIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setInternshipIsLoading', false);
      });
  },

  async fetchDetailInternship({ commit }, url) {

    commit('setInternshipIsLoading', true);

    await axios.get(`${API_URL}/interships/${url}`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(res => {
        console.log(res);
        const internship = res.data.data;
        commit('setInternshipDetail', internship);
        commit('setInternshipIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setInternshipIsLoading', false);
      });
  },
  
  async applyToInternship({ commit }, url) {
    commit('setInternshipIsLoading', true);

    await axios.put(`${API_URL}/apply/${url}`, {}, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(res => {
        console.log(res);
        const internship = res.data.data;
        commit('setInternshipDetail', internship);
        commit('setInternshipIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setInternshipIsLoading', false);
      });
  },

  async getUsersLikedInternship({ commit }) {
    try {
      commit('setIsLoading', true);
      const token = await getToken();
      const { data } = await axios.get(`${API_URL}/auth/myprofile`, {headers: { 'Authorization': `Bearer ${token}` }});
      console.log(data.data)
      commit('setLikedInternship', data.data.liked_internship);
      commit('setIsLoading', false);
      return data.data.liked_internship;
    } catch (error) {
      console.log('error', error);
      commit('setIsLoading', false);   
      return false;
    }
  },

  async likeUnlikeToInternship({ commit }, url) {
    try {
      commit('setIsLoading', true);
      const token = await getToken();
      const { data } = await axios.put(`${API_URL}/internships/like/${url}`, {}, {headers: { 'Authorization': `Bearer ${token}` }});
      if(data) {
        commit('setIsLoading', false);
        commit('setLikedInternship', data.data.liked_internship);
        return data.data.liked_internship;
      }
    } catch (error) {
      console.log('error', error); 
      commit('setIsLoading', false);
      return false;
    }
  },
 
  async appliedInternships({ commit }, url) {
    await InternshipService.getAppliedInternships().then(
      (response) => {
        console.log(response.data.data)
        commit('setAppliedInternships', response.data.data);
        return Promise.resolve(response);
      },
      (error) => {
        console.log('error', error); 
        return Promise.reject(error);
      },
    );
  },

  async storeInternship({ commit }, internship) {
    commit('setInternshipIsCreating', true);
    await InternshipService.createInternship(internship).then(
      (response) => {
        commit('saveNewInternships', response.data.data);
        commit('setInternshipIsCreating', false);
        return Promise.resolve(response);
      },
      (error) => {
        console.log('error', error);
        commit('setInternshipIsCreating', false);
        return Promise.reject(error);
      },
    );
  },

  async updateInternship({ commit }, internship) {
    commit('setInternshipIsUpdating', true);
    commit('setInternshipIsUpdating', true);
    await axios.post(`${process.env.VUE_APP_API_URL}internships/${internship.id}?_method=PUT`, internship)
      .then(res => {
        commit('saveUpdatedInternship', res.data.data);
        commit('setInternshipIsUpdating', false);
      }).catch(err => {
        console.log('error', err);
        commit('setInternshipIsUpdating', false);
      });
  },


  async deleteInternship({ commit }, id) {
    commit('setInternshipIsDeleting', true);
    await axios.delete(`${process.env.VUE_APP_API_URL}internships/${id}`)
      .then(res => {
        commit('setDeleteInternship', res.data.data.id);
        commit('setInternshipIsDeleting', false);
      }).catch(err => {
        console.log('error', err);
        commit('setInternshipIsDeleting', false);
      });
  },

  updateInternshipInput({ commit }, e) {
    commit('setInternshipDetailInput', e);
  },

  resetInternshipState({ commit }) {
    commit('resetInternshipState');
  }
}

// mutations
const mutations = {
  setInternships: (state, internships) => {
    state.internships = internships
  },

  setInternshipsPaginated: (state, internshipsPaginatedData) => {
    state.internshipsPaginatedData = internshipsPaginatedData
  },

  setInternshipDetail: (state, internship) => {
    state.internship = internship
  },
  
  setLikedInternship: (state, likedInternship) => {
    state.likedInternship = likedInternship
  },
  
  setAppliedInternships: (state, appliedInternship) => {
    state.appliedInternship = appliedInternship
  },

  setDeleteInternship: (state, id) => {
    state.internshipsPaginatedData.data.filter(x => x.id !== id);
  },

  setInternshipDetailInput: (state, e) => {
    let internship = state.internship;
    internship[e.target.name] = e.target.value;
    state.internship = internship
  },

  saveNewInternships: (state, internship) => {
    state.internships.unshift(internship)
    state.createdData = internship;
  },

  saveUpdatedInternship: (state, internship) => {
    state.internships.unshift(internship)
    state.updatedData = internship;
  },

  setInternshipIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },

  setInternshipIsCreating(state, isCreating) {
    state.isCreating = isCreating
  },

  setInternshipIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating
  },

  setInternshipIsDeleting(state, isDeleting) {
    state.isDeleting = isDeleting
  },

  resetInternshipState(state) {
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