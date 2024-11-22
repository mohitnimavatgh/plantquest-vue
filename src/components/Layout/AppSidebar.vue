<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item>
        <v-select
          :items="roles"
          v-model="selectedRole"
          label="Select Role"
          @change="changeRole"
        ></v-select>
      </v-list-item>

      <v-list-item
        v-for="route in filteredRoutes"
        :key="route.path"
        :to="route.path"
        link
      >
        <v-list-item-title>{{ route.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "@/router";

export default {
  computed: {
    roles() {
      return Object.keys(this.$store.state.permissions);
    },
    filteredRoutes() {
      return routes.filter((route) => {
        return route.meta && route.meta.permission && this.canAccess(route.meta.permission);
      });
    },
    selectedRole: {
      get() {
        return this.$store.state.user.profile;
      },
      set(newRole) {
        this.$store.commit("setUserRole", newRole);
      },
    },
  },

  methods: {
    changeRole(role) {
      this.$store.commit("setUserRole", role);
      const firstAccessibleRoute = this.filteredRoutes[0];
      if (firstAccessibleRoute && this.$router.currentRoute.path !== firstAccessibleRoute.path) {
        this.$router.push({ path: firstAccessibleRoute.path });
      }
    }
  },
};
</script>
