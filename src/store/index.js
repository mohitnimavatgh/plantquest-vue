import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"; 
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      profile: "obr", 
    },
    permissions: {
      gea: ["add_user", "view_assets", "add_assets", "change_log", "pqview"],
      sea: ["add_user", "view_assets", "add_assets", "change_log", "pqview"],
      eng: ["view_assets", "add_assets", "change_log"],
      opr: ["view_assets", "pqview"],
      obr: ["pqview"],
    },
  },
  getters: {
    hasPermission: (state) => (action) => {
      const profile = state.user.profile;
      return state.permissions[profile]?.includes(action);
    },
    getUserRole: (state) => state.user.profile,
  },
  mutations: {
    setUserRole(state, role) {
      state.user.profile = role;
    },
  },
  plugins: [
    createPersistedState({
      key: "user_profile",
      paths: ["user.profile"]
    }),
  ],
});
