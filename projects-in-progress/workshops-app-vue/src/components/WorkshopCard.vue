<template>
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
</template>

<script>
export default {
    name: 'WorkshopCard',
    props: {
        workshop: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>