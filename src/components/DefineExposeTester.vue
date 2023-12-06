<script setup>
import {ref,defineExpose} from 'vue'




const firstName = ref("Réré")
defineExpose({firstName})

</script>



<template>
    <v-col>
        <v-card
            title="Test defineExpose()"
        >
            <v-card-text>
                <div >

                    <v-text-field 
                            variant="underlined"
                            density="compact" 
                            hide-details
                            v-model="firstName"
                            height="120"
                        >
                    </v-text-field>

                </div>
            </v-card-text>
        </v-card>
    </v-col>
  




</template>

<style scoped>
:deep(.v-text-field){
      width: 80px;
      margin-left:5px;
      margin-right:5px;
      margin-top: -10px;
}
</style>