<template>
    <v-container>
      <h1>Change Log</h1>
      <div>
        <v-card class="mb-3" v-for="log in changeLogs" :key="log.id">
          <v-card-title>{{ log.title }}</v-card-title>
          <v-card-text>
            <p>{{ log.description }}</p>
            <small>Updated at: {{ log.updatedAt }}</small>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        changeLogs: [
          { id: 1, title: "Bug Fix #101", description: "Fixed UI issues", updatedAt: "2024-11-01" },
          { id: 2, title: "Feature Release", description: "Added new dashboard", updatedAt: "2024-11-10" },
        ],
      };
    }
  };
  </script>
  