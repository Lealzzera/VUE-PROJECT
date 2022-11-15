import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from '../views/HomeView/HomeView.vue';
import LimiterView from "../views/LimiterView/LimiterView.vue";
import DistributeView from "../views/DistributeView/DistributeView.vue";
import ReportView from "../views/ReportView/ReportView.vue";
import RedistributeView from "../views/RedistributeView/RedistributeView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/limitador",
		name: "limitador",
		component: LimiterView,
	},
	{
		path: "/distribuir",
		name: "DistributeView",
		component: DistributeView,
	},
	{
		path: "/relatorio",
		name: "ReportView",
		component: ReportView,
	},
	{
		path: "/redistribuir",
		name: "Redistribute",
		component: RedistributeView,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
