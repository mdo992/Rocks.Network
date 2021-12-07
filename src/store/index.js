import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    loggedIn: false,
    loginForm: false,
    user: null,
    errorCount: 0,
    error: false,
    errorMsg: ""
  }
});
