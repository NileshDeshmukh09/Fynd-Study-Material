<template>
  <div>
    <div v-if="status === 'LOADING'">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">
            Please wait while we fetch workshops
          </span>
        </div>
      </div>
    </div>
    <div v-else-if="status === 'ERROR'">
      <div class="alert alert-danger" role="alert">
        {{error.message}}
      </div>
    </div>
    <div v-else>
        <h1>
          List of workshops
          <div class="float-end">
            <button class="btn btn-sm btn-primary me-2" @click="previous">Previous</button>
            <button class="btn btn-sm btn-primary" @click="next">Next</button>
          </div>
        </h1>
        <hr />
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-3 d-flex my-3" v-for="workshop in workshops" :key="workshop.id">
            <div class="card p-3">
              <img :src="workshop.imageUrl" class="card-img-top" :alt="workshop.name">
              <div class="card-body">
                <h5 class="card-title">{{workshop.name}}</h5>
                <div class="card-text">
                  <div>{{workshop.startDate}} - {{workshop.endDate}}</div>
                </div>
                <a href="#" class="btn btn-primary">View details</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getWorkshopsByPage } from "@/services/workshops";

export default {
  name: "WorkshopsList",
  data() {
    // console.log( 'component instantiated - data is being created' );
    return {
        status: 'LOADING',
        workshops: [],
        error: null,
        page: 1
    };
  },
  methods: {
    async fetchWorkshops() {
      try {
        this.workshops = await getWorkshopsByPage( this.page );
        this.status = 'LOADED';
      } catch( error ) {
          console.log( error.message );
          this.status = 'ERROR';
          this.error = error;
      }
    },
    previous() {
      if( this.page !== 1 ) {
        this.page = this.page - 1;
        this.fetchWorkshops();
      }
    },
    next() {
      this.page = this.page + 1;
      this.fetchWorkshops();
    }
  },
  created() {
    this.fetchWorkshops();
  },
};
</script>

<style>
</style>