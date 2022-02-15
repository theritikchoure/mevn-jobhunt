import InternshipService from '../services/internship.service';

const initialState = { };

export const internship = {
  namespaced: true,
  state: initialState,
  actions: {
    getall({ commit }) {
      return InternshipService.getAll().then(
        (internship) => {
          console.log(internship.data)
          commit('success', internship.data);
          return Promise.resolve(internship.data);
        },
        (error) => {
          commit('failure');
          return Promise.reject(error);
        },
      );
    },
  },
  mutations: {
    success(state, internship) {
      state.internship = internship;
    },
    failure(state) {
      state.internship = [];
    },
  },
};
