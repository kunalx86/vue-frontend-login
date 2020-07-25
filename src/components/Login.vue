<template>
  <div id="login">
    <Navbar boughtby="login"/>
    <h1>Login</h1>
    <form @submit.prevent="postAuth">
      <fieldset id="form-login">
        <div v-if="err_msg" class="alert alert-dismissible alert-danger">
          <strong>{{ err_msg }}</strong>
        </div>
        <div class="form-group row login-form">
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
        <div class="form-group row login-form">
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { validateLogin } from "../verify";

const API_URL = "http://192.168.1.33:3000/auth/login";

export default {
  name: "Login",
  components: {
    Navbar
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      err_msg: ""
    };
  },
  methods: {
    postAuth: function() {
      const result = validateLogin(this.user);
      if (!result.error) {
        fetch(API_URL, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(this.user)
        })
          .then(res => res.json())
          .then(res => {
            window.localStorage.setItem("token", res.token);
            this.$router.push('/');
          })
          .catch(err => {
            this.err_msg = err;
          });
      }
    }
  }
};
</script>

<style scoped>
.login-form {
  justify-content: center;
}

#password,
#password_r,
#staticEmail,
#name {
  width: 40vw;
}
</style>