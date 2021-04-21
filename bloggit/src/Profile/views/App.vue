<template>
  <div>
  <Navbar
          name="Blogg It"
          :navLinks="[

        { name: 'About', link: '/', dropdown: false },
        {
          name: 'Home',
          link: '/homepage.html',
          dropdown: false
        },
        { name: 'Bloggs', link: '/signin,html', dropdown: false },
         { name: 'Blogg it', link: '/bloggit.html', dropdown: false },
        // {
        //   name: 'Contacts',
        //   link: '/contact',
        //   dropdown: true,
        //   dropdownLinks: [
        //     { name: 'A', link: '/pA', dropdown: false },
        //     { name: 'B', link: '/pB', dropdown: false },
        //   ],
        // },

      ]"
  />

<router-view></router-view>
  </div>
</template>

<script>

  import Navbar from '../../Common/components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 20px;
  margin-right: 20px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

  #end-container{
    margin-top: 135px;
    background-color: #f7f7f7;
    width: 100%;
    height: 323px;
    display: flex;justify-content: center;align-items: center;
  }

  #end-text{
    font-size: 25px;
    font-weight: bolder;
  }

</style>


