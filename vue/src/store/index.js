import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    items: state => {
      return state.items
    }
  },
  actions: {
    add (context, text) {
      context.commit('add', text)
    }
  },
  mutations: {
    add (state, text) {
      state.items.push({
        text: text,
        done: false
      })
    }
  }
})
