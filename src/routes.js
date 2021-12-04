import {createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import WorkDetail from "./components/WorkDetail.vue";
import Work from "./components/Work.vue";
import NotFound from "./components/NotFound.vue";
import ReviewCreate from "./components/ReviewCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{path: "/", component: Home},
            {path: '/account', component: Account},
            {path: "/login", component: Login},
            {path: "/work", component: Work},
            {path: "/work/:pk",component: WorkDetail,
                 children: [{path: "review",component: ReviewCreate}]}, 
            {path:"/signup", component: Signup},
            {path: "/:Invalidroute(.*)", component: NotFound}



]

});
export default router;