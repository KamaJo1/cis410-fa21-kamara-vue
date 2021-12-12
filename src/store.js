import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  State: {
    token: null,
    user: null,
    work: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeWork(state, Work){
        state.work = Work;
    }
  },
  actions: {
    getWork(commit) {
      axios.get("/Work").then((aResponse) => {
        console.log("response in Work", aResponse);
        commit("storeWork", aResponse.data);
      });
    },
  },
});
