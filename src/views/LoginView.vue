<script setup>

</script>

<template>
  <v-card width="480" class="pa-6">
    
    <v-form @submit.prevent>

      <v-text-field 
        variant="solo"
        label="email"
        
      ></v-text-field>
      <v-text-field
        label="Password"
        variant="solo"
        type="password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2" color='primary'>
        Submit
      </v-btn>
    </v-form>

  </v-card>
</template>


