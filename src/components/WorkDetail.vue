<template>
<div>
  <div class="card">
<div class="card-body">
  <h2 class="text-primary">{{work.JobType}}</h2>
  <br/>

<p>Job Type: <br/> <strong>{{work.JobType}}</strong></p>
<p>NumberOfEmployees: <br/> <strong>{{work.NumberOfEmployees}}</strong></p>
<p>StartDate: <br/> <strong>{{work.StartDate}}</strong></p>

  </div> 
    
  </div>
<br/>

<router-link v-if="auth" :to="`/work/${this.$route.params.pk}/review`"> <button class="btn btn-sucess"> Add a Review </button ></router-link>
<router-link v-else :to="`/login`"> <button class="btn btn-outline-sucess"> Sign in to add a Review </button ></router-link>


  </div>
</template>

<script>
export default {
  computed: {
    work(){
      let allWork = this.$store.state.work;

      let thisWork = allWork.find((aWork)=>{
        return aWork.WorkID == this.$route.params.pk;
      });
      return thisWork;
    },
    // formattedDate(){
    //   return new int1.NumberFormat("en-US",{
    //     style: "Date",
    //     Date: "m/d/y"

    //   }).format(this.work.StartDate)
    // },
    auth(){
      return this.$store.state.token;
    }
  }

}
</script>

<style>

</style>