<template>
  <div class="card p-3">
        <img :src="workshop.imageUrl" class="card-img-top" :alt="workshop.name">
        <div class="card-body">
        <h5 class="card-title">{{workshop.name}}</h5>
        <div class="card-text">
            <div>{{formatDate(workshop.startDate, format)}} - {{formatDate(workshop.endDate, format)}}</div>
        </div>
        <a href="#" class="btn btn-primary">View details</a>
        </div>
    </div>
</template>

<script>
// import { formatDate } from '@/mixins/formatDate';
import formatDateMixin from '@/mixins/formatDate';

export default {
    name: 'WorkshopCard',
    data() {
        return {
            format: 'indian'
        }
    },
    props: {
        workshop: {
            type: Object,
            required: true
        }
    },
    // methods: {
    //     formatDate: formatDate
    // }
    mixins: [ formatDateMixin ]
}
</script>

<style>

</style>