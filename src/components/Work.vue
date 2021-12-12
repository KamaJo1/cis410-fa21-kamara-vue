<template>
<div>
  <h1>Work</h1>
  <hr/>
  <table class="table">
    <thead>
      <tr>
        <th>StartDate</th>
        <th>JobType</th>
        <th>NumberOfEmployees</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="aWork in theWork " :key="aWork.WorkID">
<th>{{aWork.StartDate}}</th>
<th>{{aWork.JobType}}</th>
<th>{{aWork.NumberOfEmployees}}</th>
<th> <router-link :to="`/Work/${aWork.WorkID}`"> <button class="btn btn-primary"> Details </button> </router-link></th>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
computed: { 
  theWork(){
    return this.$store.state.work;
  }
}
}
</script>

<style>

</style>