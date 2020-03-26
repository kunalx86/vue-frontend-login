<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Navbar,
  },
  props: {
    token: String,
  },
  data() {
    return {
      msg: String,
    }
  },
  methods: {
    verify: function() {
      fetch('http://localhost:3000/posts/', {
        headers: {
          'auth-token': this.token,
          'Content-type': 'application/json',
        },  
      })
        .then(response => {
          console.log(response);
          
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
    this.verify();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
