<template>
  <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Dashboard Layout</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>

      <v-bottom-navigation
        color="teal"
        grow
      >
        <v-btn>
          <v-icon>mdi-history</v-icon>
          Recents
        </v-btn>

        <v-btn>
          <v-icon>mdi-heart</v-icon>
          Favorites
        </v-btn>

        <v-btn>
          <v-icon>mdi-map-marker</v-icon>
          Nearby
        </v-btn>
      </v-bottom-navigation>



    </v-layout>
</template>

<script setup>
</script>