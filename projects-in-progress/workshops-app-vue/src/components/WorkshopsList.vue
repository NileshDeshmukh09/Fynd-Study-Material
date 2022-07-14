<template>
  <div>
    <div v-for="workshop in workshops" :key="workshop.id">
        {{workshop.name}}
    </div>
  </div>
</template>

<script>
import { getWorkshops } from "@/services/workshops";

export default {
  name: "WorkshopsList",
  data() {
    console.log( 'component instantiated - data is being created' );
    return {
        workshops: []
    };
  },
  async created() {
    try {
        this.workshops = await getWorkshops();
    } catch( error ) {
        console.log( error.message );
    }
  },
};
</script>

<style>
</style>