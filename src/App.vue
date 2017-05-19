<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
 
  components: {
			login: require('./components/login/login.vue')
		
		},
  data() {
    return {

    }
  }
}
</script>



