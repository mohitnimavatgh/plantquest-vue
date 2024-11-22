<template>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field label="Asset Name" v-model="assetName" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Asset Description" v-model="assetDescription" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary">Add Asset</v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        assetName: '',
        assetDescription: '',
      };
    }
  };
  </script>
  
  