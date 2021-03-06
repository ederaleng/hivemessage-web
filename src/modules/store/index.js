import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state from "./states";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// Modules
import app from "./app";
import rooms from "./rooms";
import modals from "./modals";
import channels from "./channels";
import messages from "./messages";
import directory from "./directory";

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    app,
    rooms,
    modals,
    channels,
    messages,
    directory
  }
});
