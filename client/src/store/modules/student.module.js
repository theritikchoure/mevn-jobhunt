import AuthService from '../../services/auth.service';

// initial state
const state = () => ({
  appliedJobs: {},
  isLoading: false,
})

// getters
const getters = {
  appliedJobs: state => state.appliedJobs,
  isLoading: state => state.isLoading,
};

// actions
const actions = {
  
  async appliedJobs({ commit }) {
    commit('setIsLoading', true);
    await AuthService.getStudentAppliedJobs().then(
      (response) => {
        console.log(response.data.data)
        commit('setAppliedJobs', response.data.data);
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

}

// mutations
const mutations = {
  setAppliedJobs: (state, appliedJobs) => {
    state.appliedJobs = appliedJobs
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