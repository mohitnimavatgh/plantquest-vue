import Vue from "vue";
import Router from "vue-router";

import AddUser from "@/components/Pages/AddUser.vue";
import ViewAssets from "@/components/Pages/ViewAssets.vue";
import AddAssets from "@/components/Pages/AddAssets.vue";
import ChangeLog from "@/components/Pages/ChangeLog.vue";
import PQView from "@/components/Pages/PQView.vue";
import NoAccess from "@/components/Pages/NoAccess.vue";

Vue.use(Router);

export const routes = [
  { path: "/add-user", name: "Add User", component: AddUser, meta: { permission: "add_user" } },
  { path: "/view-assets", name: "View Assets", component: ViewAssets, meta: { permission: "view_assets" } },
  { path: "/add-assets", name: "Add Assets", component: AddAssets, meta: { permission: "add_assets" } },
  { path: "/change-log", name: "Change Log", component: ChangeLog, meta: { permission: "change_log" } },
  { path: "/pqview", name: "PQ View", component: PQView, meta: { permission: "pqview" } },
  { path: "/no-access", name: "No Access", component: NoAccess },
  { path: "*", redirect: "/no-access" },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const requiredPermission = to.meta.permission;
  console.log('requiredPermission', requiredPermission);
  if (!requiredPermission) return next();

  const store = require("@/store").default;
  const hasPermission = store.getters.hasPermission(requiredPermission);
  console.log('hasPermission', hasPermission);

  if (hasPermission) {
    next();
  } else {
    next("/no-access");
  }
});

export default router;
