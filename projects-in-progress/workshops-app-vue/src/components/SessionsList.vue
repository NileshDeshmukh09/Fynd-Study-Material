<template>
  <div>
    <h2>
        List of sessions
        <router-link :to="`/workshops/${$route.params.id}/add`" class="btn btn-sm btn-primary float-end">Add a session</router-link>
    </h2>
    <hr />
  </div>
</template>

<script>
export default {
    name: 'SessionsList'
}
</script>

<style>

</style>