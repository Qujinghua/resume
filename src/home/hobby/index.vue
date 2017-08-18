<template>
<div class="classify">
  <h1>致力于打造一个可以帮助所有人选择手机的小平台</h1>
  <div class="classify-content">
    <div class="classify-content-block">
      <div class="classify-content-block-typeLists" :class="{'block-show':blockShow.typeIsShow=='show','block-hide':blockShow.typeIsShow=='hide'}">
        <span>系统</span>
        <ul>
          <li @click="systemList('0')" :class="{classifyChangeClick:choose.system===''}">不限</li>
          <li @click="systemList(item)" v-for="(item,index) in system" :key="index" :class="{classifyChangeClick:choose.system==item.name}">{{item.name}}</li>
        </ul>
      </div>
      <div class="classify-content-block-dashed"></div>
      <div class="classify-content-block-typeLists" :class="{'block-show':blockShow.typeIsShow=='show','block-hide':blockShow.typeIsShow=='hide'}">
        <span>指纹</span>
        <ul>
          <li @click="fingerprintList('0')" :class="{classifyChangeClick:choose.fingerprint===''}">不限</li>
          <li @click="fingerprintList(item)" v-for="(item,index) in fingerprint" :key="index" :class="{classifyChangeClick:choose.fingerprint==item.name}">{{item.name}}</li>
        </ul>
      </div>
      <div class="classify-content-block-dashed"></div>
      <div class="classify-content-block-industryLists">
        <span>价格</span>
        <ul>
          <li @click="priceList(0)" :class="{classifyChangeClick:choose.price===''}">不限</li>
          <li @click="priceList(item)" v-for="(item,index) in price" :key="index" :class="{classifyChangeClick:choose.price==item.name}" >{{item.name}}</li>
        </ul>
      </div>
      <div class="classify-content-block-dashed"></div>
      <div class="classify-content-block-productLists">
        <span>屏幕大小</span>
        <ul>
          <li @click="screenList(0)" :class="{classifyChangeClick:choose.screen===''}">不限</li>
          <li @click="screenList(item)" v-for="(item,index) in screen" :key="index" :class="{classifyChangeClick:choose.screen==item.name}">{{item.name}}</li>
        </ul>
      </div>
      <div class="classify-content-block-dashed"></div>
      <div class="classify-content-block-cityLists">
        <span>处理器</span>
        <ul>
          <li @click="performanceList(0)" :class="{classifyChangeClick:choose.performance===''}">不限</li>
          <li @click="performanceList(item)" v-for="(item,index) in performance" :key="index" v-bind:class="{classifyChangeClick:choose.performance==item.name}">{{item.name}}</li>
        </ul>
      </div>
      <div class="classify-content-block-cityLists">
        <span>电池/续航</span>
        <ul>
          <li @click="cityList(0)" :class="{classifyChangeClick:choose.battery===''}">不限</li>
          <li @click="batteryList(item)" v-for="(item,index) in battery" :key="index" v-bind:class="{classifyChangeClick:choose.battery==item.name}">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="classify-choose">
    <!-- v-if="chooseShow.system!=''||chooseShow.price!=''||chooseShow.performance!=''||chooseShow.screen!=''||chooseShow.battery!=''" -->
    <font>已选条件</font>
    <ul>
      <li v-if="chooseShow.system!='' ">{{chooseShow.system}}<span @click="deleteSystemList(index)"><Icon type="close-round"></Icon></span></li>
      <li v-if="chooseShow.fingerprint!='' ">{{chooseShow.fingerprint}}<span @click="deleteFingerprintList(index)"><Icon type="close-round"></Icon></span></li>
      <li v-if="chooseShow.price!='' ">{{chooseShow.price}}<span @click="deletePriceList(index)"><Icon type="close-round"></Icon></span></li>
      <li v-if="chooseShow.screen!='' ">{{chooseShow.screen}}<span @click="deleteScreenList(index)"><Icon type="close-round"></Icon></span></li>
      <li v-if="chooseShow.performance!='' ">{{chooseShow.performance}}<span @click="deletePerformanceList(index)"><Icon type="close-round"></Icon></span></li>
      <li v-if="chooseShow.battery!='' ">{{chooseShow.battery}}<span @click="deleteBatteryList(index)"><Icon type="close-round"></Icon></span></li>
    </ul>
    <span @click="emptyList()">
      <!-- <img src="../../images/classifys/classify-empty.png" alt=""> -->
      清空条件</span>
  </div>  
  <div class="phone-list">
    <div class="phone-list-content">
      <div class="phone-list-content-block" v-for="(item,index) in dataList" :key="index">
        <div class="phone-list-content-block-img">
          <ul>
            <li v-for="(image,imgIndex) in item.imgPath" :key="imgIndex" v-show="imgIndex==item.showIndex">
              <img :src="image"/>
            </li>
          </ul>
          
        </div>
        <div class="phone-list-content-block-imgdot">
          <ul>
            <li v-for="(bullet,bulletIndex) in item.imgPath" :class="{active:bulletIndex===item.showIndex}" @mouseenter="bulletChange(index,bulletIndex)" :key="bulletIndex">
              <img :src="bullet"/>
            </li>
          </ul>
        </div>
        <div class="phone-list-content-block-detail">
          <h3>{{item.name}}</h3>
          <p>屏幕：<span>{{item.screen}}</span></p>
          <p>处理器：<span>{{item.performance}}</span></p>
          <p>电池：<span>{{item.battery}}</span></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Icon,Carousel } from 'iview'
export default {
  data () {
    return {
      mark:0,
      chooseShow: {system:'',price:'',screen:'',performance:'',battery:'',fingerprint:''},   
      choose: {system:'',price:'',screen:'',performance:'',battery:'',fingerprint:''},  
      system: [
        {
          id: "1",
          name: "Android",
        },
        {
          id: "2",
          name: "iOS"
        }
      ],
      fingerprint: [
        {
          id: "1",
          name: "无指纹"
        },
        {
          id: "2",
          name: "前置"
        },
        {
          id: "3",
          name: "后置"
        }
      ],
      price: [
        {
          id:"1",
          name:"不差钱"
        },
        {
          id:"2",
          name:"500-1000"
        },
        {
          id:"3",
          name:"1001-1500"
        },
        {
          id:"4",
          name:"1501-2000"
        },
        {
          id:"5",
          name:"2001-2500"
        },
        {
          id:"6",
          name:"2501-3000"
        },
        {
          id:"7",
          name:"3001-4000"
        },
        {
          id:"8",
          name:"4000以上"
        }
      ],
      screen: [
        {
          id:"1",
          name:"5.0寸以下",
        },
        {
          id:"2",
          name:"5.0-5.2寸",
        },
        {
          id:"3",
          name:"5.3-5.5寸",
        },
        {
          id:"4",
          name:"5.6-6.0",
        },
        {
          id:"5",
          name:"6.0寸以上",
        }
      ],  
      performance: [
        {
          id:"1",
          name:"够用党"
        },
        {
          id:"2",
          name:"骁龙"
        },
        {
          id:"3",
          name:"联发科"
        },
        {
          id:"4",
          name:"游戏/性能发烧友"
        }
      ],
      battery: [
        {
          id: "1",
          name: "3000mAh以下"
        },
        {
          id: "2",
          name: "3000mAh-4000mAh"
        },
        {
          id: "3",
          name: "4000mAh以上"
        },
      ],
      blockShow: {
        typeIsShow: 'hide',
      },
      dataList: [
        {
          name: '红米4X',
          system: 'Android',
          screen: '5.0寸',
          performance: '骁龙425/625',
          battery: '4100mAh',
          fingerprint: '后置',
          showIndex: 0,
          imgPath: ['//img13.360buyimg.com/n1/s450x450_jfs/t6400/251/1498502133/126650/2ade0e70/5951fa4aN6c972662.jpg',
                '//img13.360buyimg.com/n1/s450x450_jfs/t6217/95/1468954696/97908/ded44c2c/5951fa24N11d6dcff.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t6358/171/1467244927/118126/b8767dea/5951fd88Nc7286a1f.jpg'
              ],
          label: ['Android','后置','500-1000','5.0-5.2寸','够用党','骁龙','4000mAh以上']
        },
        {
          name: '红米note4X',
          system: 'Android',
          screen: '5.5寸',
          performance: '骁龙625',
          battery: '4100mAh',
          showIndex: 0,
          imgPath: ['//img13.360buyimg.com/n1/s450x450_jfs/t6553/346/1473938601/145939/f7796bfa/59521206N527bb108.jpg',
                '//img14.360buyimg.com/n1/s450x450_jfs/t4621/258/2224761053/195204/fa95be0d/58ed8c2fN2a4c2cc6.jpg',
                '//img11.360buyimg.com/n1/s450x450_jfs/t3076/42/8593902551/206108/fdb1a60f/58c60fc3Nf9faa2fa.jpg',
                '//img11.360buyimg.com/n1/s450x450_jfs/t5698/100/4596147819/145612/2cce3ed1/59521259Ne7404ff7.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t5050/1/1165634167/293759/f54c5ed2/58ed8800N261978fb.jpg'
              ],
          label: ['Android','后置','500-1000','5.3-5.5寸','够用党','骁龙','4000mAh以上']
        },
        {
          name: '红米note4',
          system: 'Android',
          screen: '5.5寸',
          performance: '联发科x25',
          battery: '4100mAh',
          showIndex: 0,
          imgPath: ['//img11.360buyimg.com/n1/s450x450_jfs/t5746/114/5095948289/270694/1bc7eb6/595a002aN3f0ba555.jpg',
                '//img10.360buyimg.com/n1/s450x450_jfs/t6118/193/3883590685/142056/e2a93032/595a00a6N99dac68b.jpg',
                '//img13.360buyimg.com/n1/s450x450_jfs/t5890/56/5110767062/148363/5c33993b/595a1522N36eeb9a2.jpg',
                '//img13.360buyimg.com/n1/s450x450_jfs/t6262/131/1936535545/164241/7a503cf/595a0201N85aa2bd9.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t6496/211/1945613672/140116/192ec72b/595a01a9Nb11cd829.jpg'
              ],
          label: ['Android','后置','500-1000','5.3-5.5寸','够用党','联发科','4000mAh以上']
        },
        {
          name: '小米5X',
          system: 'Android',
          screen: '5.5寸',
          performance: '骁龙625',
          battery: '3000mAh',
          showIndex: 0,
          imgPath: ['//img14.360buyimg.com/n1/s450x450_jfs/t6859/270/720868896/241631/c96fb342/59795016N17ef8bc4.jpg',
                '//img11.360buyimg.com/n1/s450x450_jfs/t5662/104/8259845325/224733/6d43c72f/59794ff4N99b6861e.jpg',
                '//img11.360buyimg.com/n1/s450x450_jfs/t6949/112/748627371/254612/4a8d00a4/59795035Nbb1e57c4.jpg'
              ],
          label: ['Android','后置','1001-1500','5.3-5.5寸','够用党','骁龙','3000mAh-4000mAh']
        },
        {
          name: '小米Max2',
          system: 'Android',
          screen: '6.44寸',
          performance: '骁龙625',
          battery: '5300mAh',
          showIndex: 0,
          imgPath: ['//img12.360buyimg.com/n1/s450x450_jfs/t6010/111/3843138696/73795/bf58700d/5959ab7fN154e56b4.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t6115/117/184172293/230947/33fe413c/59267f87N8682e899.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t6064/70/179072405/94796/231566a0/59267f88N8ec0a337.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t5806/162/1446662913/220238/3951c99/59267f8fNca0b0e92.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t5704/329/1459117714/81627/ba4ba828/59267f92N78dde35d.jpg'
              ],
          label: ['Android','后置','1501-2000','6.0寸以上','够用党','骁龙','4000mAh以上']
        },
        {
          name: '小米5S',
          system: 'Android',
          screen: '5.15寸',
          performance: '骁龙821',
          battery: '5300mAh',
          showIndex: 0,
          imgPath: ['//img11.360buyimg.com/n1/s450x450_jfs/t3361/206/1956093146/236604/f9a4f245/5837e160N6014925f.jpg',
                '//img11.360buyimg.com/n1/s450x450_jfs/t3217/99/2978816326/256547/faf98e40/57ea2fbaN71d47509.jpg',
                '//img13.360buyimg.com/n1/s450x450_jfs/t3460/2/995144814/199069/d0cb0224/5819b279N77e81d78.jpg',
                '//img10.360buyimg.com/n1/s450x450_jfs/t3349/361/1818822106/241315/7a0833ae/5835536bN74f0979b.jpg'
              ],
          label: ['Android','后置','1501-2000','5.0-5.2寸','游戏/性能发烧友','骁龙','3000mAh-4000mAh']
        },
        {
          name: '小米6',
          system: 'Android',
          screen: '5.15寸',
          performance: '骁龙835',
          battery: '3100mAh',
          showIndex: 0,
          imgPath: ['//img14.360buyimg.com/n1/s450x450_jfs/t6064/58/7189204959/124999/fe3c993c/597ae1efNc6dd8fe4.jpg',
                '//img10.360buyimg.com/n1/s450x450_jfs/t5605/311/8382706075/111343/aef09cc5/597ae1c8N8efcf0bb.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t6124/87/7172724623/188001/ae6d83fc/597ae1caN8e47fdc8.jpg',
                '//img12.360buyimg.com/n1/s450x450_jfs/t7051/215/922726682/128282/477b7294/597ae1a1Nefe332ad.jpg'
              ],
          label: ['Android','后置','2001-2500','5.0-5.2寸','游戏/性能发烧友','骁龙','3000mAh-4000mAh']
        },
        {
          name: '小米MIX',
          system: 'Android',
          screen: '6.4寸',
          performance: '骁龙821',
          battery: '4400mAh',
          showIndex: 0,
          imgPath: ['//img14.360buyimg.com/n1/s450x450_jfs/t3457/335/2158323307/437481/f8fdf0fe/584a7a5dN39c2ef36.jpg',
                '//img14.360buyimg.com/n1/s450x450_jfs/t3478/355/578758545/85028/7987e88e/580f135eNbb877e90.jpg',
                '//img14.360buyimg.com/n1/s450x450_jfs/t3649/151/643948531/25885/df128de2/580f1362Nc22a56a1.jpg',
                '//img14.360buyimg.com/n1/s450x450_jfs/t3430/133/612705993/48298/a92f6641/580f1365N2a2754f7.jpg',
                '//img14.360buyimg.com/n1/s450x450_jfs/t3094/239/4532438507/39700/9a4cc2fc/584a7cb8N770ef289.jpg'
              ],
          label: ['Android','后置','3001-4000','6.0寸以上','游戏/性能发烧友','骁龙','4000mAh以上']
        },
      ]
    }
  },
  components: {
    Icon,
    Carousel
  },
  created() {
    
  },
  methods: {
    arrowChange(index){
      if(this.blockShow.typeIsShow=='show'){
        this.blockShow.typeIsShow='hide'
      }else{
        this.blockShow.typeIsShow='show'
      }
    },
    systemList(item){
      // 点击不限数组置空
      // console.log(item==0);
      if(item==0){
        this.choose.system = '';
        this.chooseShow.system = '';
      }else{
        // 点击其他内容向数组中添加
        this.choose.system = item.name;
        this.chooseShow.system = item.name;
      }      
    },  
    fingerprintList(item){
      // 点击不限数组置空
      // console.log(item==0);
      if(item==0){
        this.choose.fingerprint = '';
        this.chooseShow.fingerprint = '';
      }else{
        // 点击其他内容向数组中添加
        this.choose.fingerprint = item.name;
        this.chooseShow.fingerprint = item.name;
      }      
    },  
    priceList(item){     
      // 点击不限数组置空
      if(item==0){
        this.choose.price = '';
        this.chooseShow.price = '';
      }else{
        // 点击其他内容向数组中添加
        this.choose.price = item.name;
        this.chooseShow.price = item.name;
      }
      
    }, 
    screenList(item){ 
      // 点击不限数组置空
      if(item==0){
        this.choose.screen = '';
        this.chooseShow.screen = '';
      }else{
        // 点击其他内容向数组中添加
        this.choose.screen = item.name;
        this.chooseShow.screen = item.name;
        console.log(this.choose);
        console.log(this.chooseShow)
      }
        
    }, 
    performanceList(item){
      // 点击不限数组置空
      if(item==0){
        this.choose.performance = item.name;
        this.chooseShow.performance = item.name;
      }else{
        // 点击其他内容向数组中添加
        this.choose.performance = item.name;
        this.chooseShow.performance = item.name;     
      }
      
    }, 
    batteryList(item){
      // 点击不限数组置空
      if(item==0){
        this.choose.battery = item.name;
        this.chooseShow.battery = item.name;
      }else{
        // 点击其他内容向数组中添加
        this.choose.battery = item.name;
        this.chooseShow.battery = item.name;     
      }
    },
    deleteSystemList(index){ 
      this.choose.system = '';
      this.chooseShow.system = '';
    },
    deleteFingerprintList(index){ 
      this.choose.fingerprint = '';
      this.chooseShow.fingerprint = '';
    },
    deletePriceList(index){ 
      this.choose.price = '';
      this.chooseShow.price = '';
    },
    deleteScreenList(index){ 
      this.choose.screen = '';
      this.chooseShow.screen = '';
    },
    deletePerformanceList(index){ 
      this.choose.performance = '';
      this.chooseShow.performance = '';
    },
    deleteBetteryList(index){ 
      this.choose.battery = '';
      this.chooseShow.battery = '';
    },
    emptyList(){
      this.choose.system = '';
      this.chooseShow.system = '';
      this.choose.fingerprint = '';
      this.chooseShow.fingerprint = '';
      this.choose.price = '';
      this.chooseShow.price = '';
      this.choose.screen = '';
      this.chooseShow.screen = '';
      this.choose.performance = ''; 
      this.chooseShow.performance = '';
      this.choose.battery = ''; 
      this.chooseShow.battery = '';
    },
    bulletChange(str1,str2){
      this.dataList[str1].showIndex = str2
    }
  }
}
</script>

<style lang="scss">
.classifyChangeClick{
  background: #0AA1E5;
  color: #FFFFFF;
  border-radius: 2px;
}
.block-show ul{
  height: auto;
}
.block-hide ul{
  height: 45px;
}
.classify{
  margin-left: 400px;
  & h1{
    margin-bottom: 20px;
    font-size: 20px;
  }
  &-content{
    width: 910px;
    margin-bottom: 20px;
    &-block{
      border-top: 2px solid #0AA1E5;
      border-right: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;
      border-left: 1px solid #d8d8d8;
      &-dashed{
        height: 1px;
        width: 95%;
        margin: 0 auto;
        border-top: 1px dashed #d8d8d8;
      }
      &-typeLists,
      &-industryLists,
      &-productLists,
      &-cityLists{
        position: relative;
        padding: 16px 10px 0px 10px;
        // height: 80px;
        & span{
          height: 28px;
          width: 80px;
          text-align: center;
          line-height: 28px;
          display: block;
          border-radius: 2px;
          background: #d8d8d8;
          float: left;
          margin-right: 20px;
        }
        & ul{
          overflow: hidden;
          & li{
            cursor: pointer;
            float: left;
            height: 28px;
            line-height: 28px;
            margin: 0 15px 10px 0;
            padding: 0px 5px 0px 5px;
          }
        }
        & i{
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
    }
  }
  &-choose{
    width: 910px;
    line-height: 54px;
    height: 56px;
    border: 1px solid #0AA1E5;
    padding: 0px 10px 0px 10px;
    & font{
      display: block;
      float: left;
      margin-right: 15px;
    }
    &>span{
      cursor: pointer;
      &:hover{
        color: #0AA1E5;
      }
    }
    & ul{
      float: left;
      overflow: hidden;
      & li{
        height: 28px;
        line-height: 25px;
        float: left;
        border: 1px solid #0AA1E5;
        border-radius: 2px;
        margin: 14px 15px 10px 0;
        padding: 0px 0px 0px 5px;
        & span{
          margin-left: 5px;
          display: block;
          float: right;
          width: 30px;
          color: #FFFFFF;
          text-align: center;
          height: 100%;
          background: #0AA1E5;
          cursor: pointer;
        }
      }
    }
  }
}
.phone-list{
  margin-top: 20px;
  &-content{
    &-block{
      padding: 2px 2px 2px 2px;
      width: 290px;
      margin-bottom: 20px;
      margin-right: 20px; 
      float: left;
      -webkit-box-shadow: 0 0 2px 2px #f8f8f8; 
      -moz-box-shadow: 0 0 2px 2px #f8f8f8; 
      box-shadow: 0 0 2px 2px #f8f8f8; 
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9),{
        margin-right: 0px;
      }
      &-img{
        position: relative;
        height: 286px;
        & ul {
          overflow: hidden;
          & li{
            height: 286px;
            position: absolute;
            & img{
              width: 100%;
            }
          }
        }
        
      }
      &-imgdot{
        padding: 10px 0px 10px 10px;
        & ul{
          overflow: hidden;
          & li{
            border: 2px solid #FFFFFF;
            float: left;
            & img{
              width: 50px;
            }
          }
        }
        & .active{
          border: 2px solid #E53E41;
        }
      }
      &-detail{
        padding: 0px 0px 20px 20px; 
      }
    }
  }
}


</style>