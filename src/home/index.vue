<template>
  <div class="blog">>
    <h2 @click="goResume()">Resume</h2>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'blog',
  data () {
    return {
      
    }
  },

  created(){
    this.$nextTick(() => { 
      
    });

  },
  computed: {
    
  },
  methods: {
    goResume(){
      this.$router.push('/resume')
    }
  }

}
</script>

<style scoped>

</style>
