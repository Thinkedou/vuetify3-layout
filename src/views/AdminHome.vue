<script setup>
import { onBeforeMount } from 'vue';
import {getAllMonsters,getOneMonster} from '../services/monstersService'



onBeforeMount(async ()=>{
  console.warn('hey')
  // route protégée
  const allMonsters = await getAllMonsters()
  console.log(allMonsters)
  
  // route non protégée
  const oneMonster = await getOneMonster({mId:'651088132f75197b24892744'})
  console.log(oneMonster)

})

</script>


<template>

    
    <v-container fluid>
          <v-row dense>
            <v-col
              cols="12"
            >
              <v-card
                title="Admin Homepage"
                subtitle="Subtitle for Content "
              >
                <v-card-text>
                  Du contenu
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
    </v-container>

</template>


