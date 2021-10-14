import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      title: process.env.VUE_APP_TITLE,
      showCover: true,
    };
  },
  mutations: {
    toggleCover(state) {
      state.showCover = !state.showCover;
    },
  },
  actions: {},
});
