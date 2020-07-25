<template>
  <div class="hello">
    <Navbar boughtby="home"/>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data() {
    return {
      err_msg: '',
      name: '',
      storetoken: '',
    }
  },
  methods: {
    verify: function() {
      console.log(this.token);
      fetch('http://192.168.1.33:3000/posts/', {
        headers: {
          'auth-token': this.storetoken,
          'Content-type': 'application/json',
        },  
      })
        .then(response => response.json())
        .then(response => {
          this.name = response[0].name;
          if (response.status === 401) {
            this.msg = 'Not authorized';
          }
          if (response.status === 400) {
            this.msg = 'Wrong Token';
          }
        }) 
        .catch(err => this.msg = err);
    }
  }, 
  beforeMount() {
    this.storetoken = window.localStorage.getItem("token");
    if (this.storetoken)
      this.verify(); 
    else 
      this.$router.push('/login');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
