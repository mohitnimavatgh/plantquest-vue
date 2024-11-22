<template>
  <v-app>
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Layout/AppSidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
