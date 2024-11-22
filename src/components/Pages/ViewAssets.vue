<template>
    <v-container>
      <h1>View Assets</h1>
      <div>
        <v-card class="mb-3" v-for="asset in assets" :key="asset.id">
          <v-card-title>{{ asset.name }}</v-card-title>
          <v-card-text>
            <p>{{ asset.description }}</p>
            <small>Location: {{ asset.location }}</small>
          </v-card-text>
        </v-card>
  
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        assets: [
          { id: 1, name: "Asset 1", description: "Description for asset 1", location: "Surat" },
          { id: 2, name: "Asset 1", description: "Description for asset 2", location: "Ireland" },
        ],
      };
    }
  };
  </script>
  