import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  },
  mutations: {
    editTask(state, payload) {
      state.tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    setTasks(state, payload) {
      state.tasks = payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {
    editTask({ commit }, payload) {
      commit('editTask', payload);
    },
    fetchTask({ commit }, payload) {
      commit('setTasks', payload);
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
});
