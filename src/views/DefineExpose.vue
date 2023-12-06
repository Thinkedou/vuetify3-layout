<script setup>
import {ref} from "vue"
import DefineExposeTester    from '@/components/DefineExposeTester.vue';

const defineExposeRef = ref(null)

const getThatValueFromChild = ()=>{
    const textFieldValue = defineExposeRef.value.firstName
    console.log(textFieldValue)
}




</script>
<template>
    <v-container fluid>
          <v-row >
              <DefineExposeTester ref="defineExposeRef"/>
              
          </v-row>
          <v-row >
            <v-btn
                variant="elevated"
                @click="getThatValueFromChild"
            >Recup info enfant
            </v-btn> 
          </v-row>
          <v-row class="mt-5">
            <span>Valeur du champ text enfant: </span>
          </v-row>
    </v-container>

</template>


