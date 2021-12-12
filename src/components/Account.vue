<template>
  <div>
      <h1>Account</h1>
      <hr/>
      <h3>{{FirstName}}'s Reviews</h3>
      <p v-if="accountError" class="text-danger">Cannot get your account informatio, please try again later.</p>


      <table v-if="reviewsByUser" class="table">
        <thead>
        <th>Work</th>
        <th>Summary</th>
        <th>Rating</th>
        </thead>
          <tbody>
            <tr v-for="thisReview in reviewsByUser" :key="thisReview.ReviewID">
              <th><router-link :to='`/Work/${thisReview.WorkFK}`'>{{thisReview.Work}}</router-link></th>
              <th>{{thisReview.WorkFK}}</th>
              <th>{{thisReview.Summary}}</th>
              <th>{{thisReview.Rating}}</th>
            </tr>
          </tbody>
       

      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      reviewsByUser: null,
      accountError: false,
    }
  },
  computed:{
    FirstName(){
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.Fname;
    },
  },

  created(){
    axios.get("/Customer/me",{
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`
      }
    }).then((theResponse)=>{
      console.log("here is the response",theResponse);

      this.reviewsByUser = theResponse.data;
    }).catch(()=>{
    this.accountError=true;
    });
  }

}
</script>

<style>

</style>