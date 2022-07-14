<template>
  <div class="card p-3">
        <img :src="workshop.imageUrl" class="card-img-top" :alt="workshop.name">
        <div class="card-body">
        <h5 class="card-title">{{workshop.name}}</h5>
        <div class="card-text">
            <!--
                When using mixins
            -->
            <!--
                <div>{{formatDate(workshop.startDate, format)}} - {{formatDate(workshop.endDate, format)}}</div>
            -->

            <div>{{workshop.startDate | formatDate( format )}} - {{workshop.endDate | formatDate( format )}}</div>
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
    // using mixins, we can bring in shared functionality into components
    mixins: [ formatDateMixin ]
}
</script>

<style scoped>
.card:hover {
    box-shadow: 0px 0px 2px 2px rgba(218, 165, 32, 0.5 );
}
</style>