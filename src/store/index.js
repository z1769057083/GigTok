import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    popupVisible:true,
    popHeaderVisible:false
  },
  mutations: {
    showPopup(state){
      state.popupVisible = true;
    },
    hidePopup(state){
      state.popupVisible = false;
    },
    togglePopHeader(state){
      state.popHeaderVisible = !state.popHeaderVisible;
    }
  }
})
export default store;
