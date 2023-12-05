<script setup>
import {ref} from 'vue'

const rawQuestionFromSQL = "Quel est la capitale du Yemen ##ANSWER##?, et combien d'habitant à peu près: ##ANSWER##"

const splittedQuestionWithSeparator = rawQuestionFromSQL.split('##')


const cleanObjectWithLabelAndType = splittedQuestionWithSeparator.map((txt)=>{
    if(txt==="ANSWER"){
        return {type:'answer',label:"<Saisir votre réponse>"}
    }
    return {type:'text',label:txt}
})


const inputTestObject = ref(cleanObjectWithLabelAndType)

const dynamicModelForAnswers = ref([])

</script>



<template>
    <v-col>
        <v-card
        title="Avec contenteditable"
    >
        <v-card-text>
            <p >
                <span 
                    v-for="(rawText,idx) in inputTest" 
                    :contenteditable="rawText?rawText=='response':false"
                >
                    {{ rawText=='response'?'<Saisir votre réponse>':rawText }}
                </span>
                
            </p>
        </v-card-text>
    </v-card>
    <v-card
        title="Avec dyn components"
    >
        <v-card-text>
            <div class="d-flex">
                <span 
                    v-for="(obj,idx) in inputTestObject"
                >
                    <v-text-field 
                            variant="underlined" v-if="obj.type=='answer'" 
                            density="compact" 
                            hide-details
                            v-model="dynamicModelForAnswers[idx]"
                            height="120"
                        >
                    </v-text-field>
                    {{ obj.type=='answer'?'':obj.label }}
                </span>
                
            </div>
            <v-divider class="my-2"></v-divider>
            <p >
                {{ dynamicModelForAnswers[1] }}
                {{ dynamicModelForAnswers[3] }}
            </p>
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