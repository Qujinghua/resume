<template>
<div class="believe">
  <h2>我觉得做的还可以的几个页面</h2>
  <span>{{value+1}}/3</span>
  <Carousel
  autoplay 
  :autoplay-speed="setting.autoplaySpeed"
  :dots="setting.dots"
  v-model="value">
    <Carousel-item>
      <div class="demo-carousel">
        <a href="http://www.31huiyi.com/ServiceSource/list" target="_blank">
          <img src="../../assets/images/show1.jpg" title="点击查看" />
        </a>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <a href="http://www.31huiyi.com/2017/casecenter" target="_blank">
          <img src="../../assets/images/show2.jpg" title="点击查看"/>
        </a>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <a href="http://www.31huiyi.com/marketevent/list" target="_blank">
          <img src="../../assets/images/show3.jpg" title="点击查看"/>
        </a>
      </div>
    </Carousel-item>
  </Carousel>
</div>
    
</template>
<script>
import { Carousel } from 'iview'
export default {
  data () {
    return {
      value: 0,
      setting: {
        autoplaySpeed: 4000,
        dots: 'outside'
      }
    }
  }
}
</script>
<style lang="scss">
.believe{
  position: relative;
  & h2{
    margin: 0 auto;
    width: 300px;
    text-align: center;
    border-bottom: 1px solid #2d8cf0;
    padding-bottom: 8px;
    margin-bottom: 15px;
  }
  &>span{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: #1c2438;
  }
}
.demo-carousel{
  // border: 2px solid #2d8cf0;
  border-radius: 5px;
  width: 700px;
  height: 325px;
  & a{
    & img{
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>