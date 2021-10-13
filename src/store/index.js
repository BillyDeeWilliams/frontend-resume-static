import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      title: process.env.VUE_APP_TITLE,
      showCover: true,
      coverImage: "https://i.ibb.co/wsCy9Y0/splash-desktop-bg.jpg",
      coverImageMobile: "https://i.ibb.co/Xz3dcRr/spash-bg-mobile.png",
      teamLogo: "https://i.ibb.co/C8PYptB/Logo-full.png",
    };
  },
  mutations: {
    toggleCover(state) {
      state.showCover = !state.showCover;
    },
  },
  actions: {},
});
