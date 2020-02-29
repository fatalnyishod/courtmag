import Vue from 'vue';
import VueRouter from 'vue-router';

//modules
import User from '@/router/modules/user';
import Admin from '@/router/modules/admin';

Vue.use(VueRouter);

const routes = [...User, ...Admin];

const router = new VueRouter({
	routes,
	linkExactActiveClass: 'header__nav-item--active'
});

export default router;
