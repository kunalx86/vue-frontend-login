<template>
  <div id="sign-up">
    <Navbar boughtby="signup"/>
    <form @submit.prevent="postInfo">
      <fieldset id="form-signup">
        <div v-if="err_msg" class="alert alert-dismissible alert-danger">
          <strong>{{ err_msg }}</strong>
        </div>
        <legend>
          <h1>Sign up</h1>
        </legend>
        <div class="form-group row signup-form">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="user.name"
              class="form-control-plaintext"
              id="name"
              required
            />
          </div>
        </div>
        <div class="form-group row signup-form">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="user.email"
              class="form-control-plaintext"
              id="staticEmail"
              required
            />
          </div>
        </div>
        <div class="form-group row signup-form">
          <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input
              type="password"
              v-model="user.password"
              class="form-control-plaintext"
              id="password"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <div class="form-group row signup-form">
          <label for="staticEmail" class="col-sm-2 col-form-label">Password Repeat</label>
          <div class="col-sm-10">
            <input
              type="password"
              v-model="password_r"
              class="form-control-plaintext"
              id="password_r"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { validate } from "../verify";

const API_URL = "http://192.168.1.33:3000/auth/signup";

export default {
  name: "Signup",
  components: {
    Navbar
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      },
      err_msg: "",
      password_r: ""
    };
  },
  methods: {
    postInfo: function() {
      if (this.user.password === this.password_r) {
        const result = validate(this.user);
        console.log(result);

        if (!result.error) {
          fetch(API_URL, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(result.value)
          })
            .then(res => res.json())
            .then(res => {
              window.localStorage.setItem("token", res.token);
              this.$router.push('/');
            })
            .catch(err => console.log(err));
        } else {
          this.err_msg = result.error;
        }
      } else {
        this.err_msg = "Password's don't match.";
      }
    }
  }
};
</script>

<style scoped>
.signup-form {
  justify-content: center;
}

#password,
#password_r,
#staticEmail,
#name {
  width: 40vw;
}
</style>>
