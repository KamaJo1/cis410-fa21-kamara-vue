import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";
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
    },
    clearAuthData(state){
      state.token = null;
      state.user = null;
    },

  },
  actions: {
    getWork({ commit }) {
      axios.get("/work").then((aResponse) => {
        console.log("response in Work", aResponse);
        commit("storeWork", aResponse.data);
      });
    },
    logout({ commit,state }){
axios.post("/Customer/logout",null,{
  headers:{Authorization: `Bearer ${state.token}`
  },
}).then(()=>{
  commit("clearAuthData");
myRoutes.replace("/");
}).catch(()=>{ console.log("error in loggin out")})
    }
  },
});
