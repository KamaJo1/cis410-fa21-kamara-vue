<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="Fname-input" class="form-label">First name</label
        ><input
          type="text"
          class="form-control"
          id="Fname-input"
          required=""
          placeholder="First name"
          spellcheck="false"
          data-ms-editor="true"
          v-model="Fname"
        />
      </div>
      <div class="mb-3">
        <label for="Lname-input" class="form-label">Last name</label
        ><input
          type="text"
          class="form-control"
          id="Lname-input"
          required=""
          placeholder="Last name"
          spellcheck="false"
          data-ms-editor="true"

          v-model="Lname"
        />
      </div>
      <div class="mb-3">
        <label for="email-input" class="form-label">Email</label
        ><input
          type="email"
          class="form-control"
          id="email-input"
          required=""
          placeholder="Enter email"
          v-model="Email"
        /><!---->
        <small v-if="dupEmail" class="text-danger">Please chose a diffrent email</small>
      </div>
      <div class="mb-3">
        <label for="password-input" class="form-label">Password</label
        ><input
          type="password"
          class="form-control"
          id="password-input"
          placeholder="Password"
          required=""
          v-model="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      Fname: "",
      Lname: "",
      Email: "",
      Password: "",
      dupEmail : false,
    };
  },
  methods:{
    onSubmit(){
      // console.log("form submitted");
      const myFormData={
        Fname: this.Fname,
        Lname: this.Lname,
        Email: this.Email,
        Password: this.Password
      }
      // console.log(myFormData);
      axios.post("/Customer",myFormData).then((myResponse)=>{
        console.log("the resopnse",myResponse);
        this.$router.replace("/login?signupsuccess=true");
      }).catch((myError)=>{
        if(myError.response.status==409){
          this.dupEmail=  true;
        }else {
          this.errorMessage = "Cannot sign you up, please try again later";
        }
      });
    }
  }
};
</script>

<style>
</style>