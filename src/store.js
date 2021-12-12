import {createStore} from 'vuex'

export default createStore({
    State: {
        token: null,
        user: null, 
        work: [],
    },
    mutations: {
        storeTokenInApp(state,myToken){
state.token = myToken
        },
        storeUserInApp(state,theUser){
            state.user = theUser
        }
    }, 
    actions:{},

});