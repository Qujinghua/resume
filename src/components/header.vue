<template>
  <div class="header">
    <ul>
      <li @click="navChoose(1)"><router-link :to="{path:'/'}"><span :class="{haveBorder:border==1}">我的简历</span></router-link></li>
      <li @click="navChoose(2)"><router-link :to="{path:'/hobby'}"><span :class="{haveBorder:border==2}">我的爱好</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      border:1,
    }
  },
  created(){

  },
  computed: {
    
  },
  methods: {
    navChoose(index) {
      if(index == 1){
        this.border = 1
      }else{
        this.border = 2
      }
      
    }
  }

}
</script>

<style lang="scss">
.header{
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 350px;
  & ul{
    padding-left: 50px;
    overflow: hidden;
    & li{
      cursor: pointer;
      width: 50%;
      float: left;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
.haveBorder{
  display: block;
  padding-bottom: 15px;
  width:75px;
  border-bottom: 2px solid #2d8cf0;
}
</style>
