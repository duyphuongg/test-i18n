export default [
  {
    path: "/design",
    component: () =>
      import(/* webpackChunkName: "country-pricing" */ "./views/index.vue"),
  },
];
