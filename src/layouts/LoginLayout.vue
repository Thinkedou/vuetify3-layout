<template>
  <v-app>
    <v-container fluid  class="bg-teal-darken-2">
      <span >Login Layout</span>
            <v-row align="center" justify="center" style="height:99vh">

                <v-col cols="12" class="d-flex flex-column justify-center align-center">
                   <router-view /> <!-- c'est donc ici que sera chargé le composant défini dans la route -->
                </v-col>

            </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
</script>