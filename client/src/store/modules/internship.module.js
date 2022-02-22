import axios from 'axios';
import InternshipService from '../../services/internship.service';
import AuthService from '../../services/auth.service';

// initial state
const state = () => ({
  internships: [],
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
  internshipList: state => state.internships,
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

    await InternshipService.getAll().then(
        (internship) => {
          console.log(internship.data.data)
          commit('setInternships', internship.data.data);
          commit('setInternshipIsLoading', false);
          return Promise.resolve(internship);
        },
        (error) => {
            console.log('error', error);
            commit('setInternshipIsLoading', false);    
            return Promise.reject(error);
        },
    );
  },

  async fetchDetailInternship({ commit }, url) {
    commit('setInternshipIsLoading', true);
    await InternshipService.getInternshipDetail(url).then(
      (internship) => {
        console.log(internship.data.data)
        commit('setInternshipDetail', internship.data.data);
        commit('setInternshipIsLoading', false);
        return Promise.resolve(internship);
      },
      (error) => {
          console.log('error', error);
          commit('setInternshipIsLoading', false);    
          return Promise.reject(error);
      },
    );
  },
  
  async applyToInternship({ commit }, url) {
    commit('setInternshipIsLoading', true);
    await InternshipService.applyToInternship(url).then(
      (internship) => {
        console.log(internship.data.data)
        commit('setInternshipDetail', internship.data.data);
        commit('setInternshipIsLoading', false);
        return Promise.resolve(internship);
      },
      (error) => {
          console.log('error', error); 
          commit('setInternshipIsLoading', false);
          return Promise.reject(error);
      },
    );
  },

  async getUsersLikedInternship({ commit }) {
    await AuthService.getLoggedInUserDetail().then(
      (response) => {
        console.log(response.data.data)
        commit('setLikedInternship', response.data.data.liked_internship);
        return Promise.resolve(response);
      },
      (error) => {
        console.log('error', error); 
        return Promise.reject(error);
      },
    );
  },

  async likeUnlikeToInternship({ commit }, url) {
    await InternshipService.likeUnlikeToInternship(url).then(
      (response) => {
        console.log(response.data.data)
        commit('setLikedInternship', response.data.data.liked_internship);
        return Promise.resolve(response);
      },
      (error) => {
        console.log('error', error); 
        return Promise.reject(error);
      },
    );
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
    await axios.post(`${process.env.VUE_APP_API_URL}internships`, internship)
      .then(res => {
        commit('saveNewInternships', res.data.data);
        commit('setInternshipIsCreating', false);
      }).catch(err => {
        console.log('error', err);
        commit('setInternshipIsCreating', false);
      });
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

}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}