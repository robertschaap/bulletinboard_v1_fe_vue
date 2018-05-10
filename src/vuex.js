import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  comments: [],
  sortDirection: 'desc',
  offset: 0
}

const getters = {
  getComments: state => state.comments,
  getSortDirection: state => state.sortDirection,
  getOffset: state => state.offset
}

const mutations = {
  changeOffset: (state, payload) => {
    state.offset += payload
  },
  appendComments: (state, payload) => {
    state.comments = [
      ...state.comments,
      ...payload
    ]
  },
  changeSortDirection: (state, payload) => {
    if (state.sortDirection != payload) {
      state.sortDirection = payload
    }
    return
  }
}

const actions = {
  changeOffset: (context, payload) => {
    context.commit('changeOffset', payload)
  },
  appendComments: (context, payload) => {
    context.commit('appendComments', payload)
  },
  changeSortDirection: (context, payload) => {
    context.commit('changeSortDirection', payload)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
