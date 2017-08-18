<template>
  <div class="resume">
    <div class="resume-name">
      <h2>个人信息</h2>
      <p>姓名：<b>渠景华</b> &nbsp;&nbsp;<Icon type="happy-outline"></Icon></p>
      <p>电话：185-3784-5521</p>
      <p>邮箱：893-510-847@qq.com</p>
      <p>博客：<a href="http://www.qjhua.com">qjhua.com <Icon type="paper-airplane"></Icon></a></p>
      <p>Github：<a href="https://github.com/Qujinghua" target="_blank">Qujinghua <Icon type="social-github"></Icon> </a></p>
    </div>
    <div class="resume-college">
      <h2>教育经历</h2>
      <p>大学：<a href="http://www.scuec.edu.cn/">中南民族大学</a></p>
      <p>专业：计算机科学与技术</p>
      <p>自学方向：Web前端开发</p>
    </div>
    <div class="resume-skill">
      <h2>前端开发技能</h2>
      <div class="resume-skill-echarts">
        <skill-echarts></skill-echarts>
      </div>
      <div class="resume-skill-progress">
        <div class="resume-skill-progress-block">
          <span>HTML</span>
          <template>
            <i-progress :percent="90" status="active"></i-progress>
          </template>
        </div>
        <div class="resume-skill-progress-block">
          <span>CSS/SCSS</span>
          <template>
            <i-progress :percent="90" status="active"></i-progress>
          </template>
        </div>
        <div class="resume-skill-progress-block">
          <span>JavaScript</span>
          <template>
            <i-progress :percent="85" status="active"></i-progress>
          </template>
        </div>
        <div class="resume-skill-progress-block">
          <span>Vue</span>
          <template>
            <i-progress :percent="75" status="active"></i-progress>
          </template>
        </div>
        <div class="resume-skill-progress-block">
          <span>iView/ElementUI</span>
          <template>
            <i-progress :percent="75" status="active"></i-progress>
          </template>
        </div>
        <div class="resume-skill-progress-block">
          <span>Webpack</span>
          <template>
            <i-progress :percent="70" status="active"></i-progress>
          </template>
        </div>
        <div class="resume-skill-progress-one">
          <span>Git</span>
          <template>
            <i-progress :percent="70" status="active"></i-progress>
          </template>
        </div>
      </div>
    </div>
    <div class="resume-internship">
      <h2>实习经历</h2>
      <template>
        <Timeline>
          <Timeline-item>
            <div class="resume-internship-block">
              <h3><span>2017.05-至今</span><span>上海八彦图信息科技有限公司(31会议)</span><span>前端开发工程师</span></h3>
              <ul>
                <li><span></span>负责公司部分前端开发工作，主要使用Vue、webpack技术进行日常的开发</li>
                <li><span></span>主要参与新官网<a href="http://www.31huiyi.com" target="_blank">（www.31huiyi.com）<Icon type="paper-airplane"></Icon> </a>的开发工作</li>
                <li><span></span>参与公司招聘会项目的开发</li>
              </ul>
            </div>
          </Timeline-item>
          <Timeline-item>
            <div class="resume-internship-block">
              <h3><span>2015.09-2017-04</span><span>武汉网酷科技有限公司</span><span>前端开发</span></h3>
              <ul>
                <li><span></span>这段经历其实算不上是实习</li>
                <li><span></span>在学习大学课程的同时，加入老师组织的实验室，学习自己想学的技术，当时就选择了学习前端开发技术</li>
                <li><span></span>通过自学的方式学习前端开发技术</li>
                <li><span></span>有时候会有一些小的网站开发的项目，教授都会拿来分给我们做</li>
                <li><span></span>参与开发湖北亨控集团官网制作（好像公司倒闭了，这里就不贴链接了）</li>
                <li><span></span>负责开发中南民族大学<a href="http://www.scuec.edu.cn/shzyyj/" target="_blank">马克思主义学院子网站（www.scuec.edu.cn/shzyyj/）<Icon type="paper-airplane"></Icon> </a></li>
              </ul>
            </div>
          </Timeline-item>
          <Timeline-item>
            <div class="resume-internship-block">
              <h3>未完待续...</h3>
            </div>
          </Timeline-item>
        </Timeline>
      </template>
    </div>
    <div class="resume-project">
      <h2>项目经历</h2>
      <Timeline-item>
        <div class="resume-project-block">
          <h3>
            <span>2017.05-2017.07</span>
            <span>31会议官网<a href="http://www.31huiyi.com" target="_blank">（www.31huiyi.com）<Icon type="paper-airplane"></Icon> </a></span>
            <span>负责人</span>
          </h3>
          <ul>
            <li><span></span>Github：<a href="https://github.com/Qujinghua/Vue-multipage-application">https://github.com/Qujinghua/Vue-multipage-application</a></li>
            <li><span></span>运用了Vue+Webpack技术解决方案</li>
            <li><span></span>每一个页面都是一个独立的文件夹，开发起来简洁明了</li>
            <li><span></span>全站公用的组件进行独立封装引用，方便后期维护</li>
            <li><span></span>期间遇到增加顶部升级提示需要在所有页面之中加组件，通过组件的嵌套引用使得这类的需求变得更加简单、也使此类需求的解决更加迅速</li>
          </ul>
          <div class="resume-project-block-believe">
            
            <believe></believe>
          </div>
        </div>
      </Timeline-item>

      <Timeline-item>
        <div class="resume-project-block">
          <h3>
            <span>2017.07</span>
            <span>个人网站<a href="http://www.qjhua.com">（qjhua.com）<Icon type="paper-airplane"></Icon> </a></span>
            <span>独立开发</span>
          </h3>
          <ul>
            <li><span></span>Github：
              <!-- <a href="https://github.com/Qujinghua/Vue-multipage-application">https://github.com/Qujinghua/Vue-multipage-application</a> -->
            </li>
            <li><span></span>运用了Vue+Webpack开发的单页网站</li>
            <li><span></span>使用前端路由</li>
            <li><span></span>使用Vuex做状态管理</li>
          </ul>
        </div>
      </Timeline-item>

      <Timeline-item>
        <div class="resume-project-block">
          <h3>
            <span>2017.02-2017.04</span>
            <span><a href="http://www.qjhua.com" target="_blank">基于PHP和MySQL的文章发布系统（www.qjhua.com）<Icon type="paper-airplane"></Icon> </a></span>
            <span>负责人</span>
          </h3>
          <ul>
            <li><span></span>Github：<a href="https://github.com/Qujinghua/Article-publishing-system" target="_blank">https://github.com/Qujinghua/Article-publishing-system</a></li>
            <li><span></span>前台展示部分特效、分类、文章</li>
            <li><span></span>管理员通过登录后台进行文章的增删改查</li>
            <li><span></span>单独封装分页函数，对前后台文章进行分页</li>
            <li><span></span>头部导航、侧边栏单独分开，利于管理和修改</li>
          </ul>
        </div>
      </Timeline-item>

      <Timeline-item>
        <div class="resume-project-block">
          <h3>
            <span>2016.10-2017.12</span>
            <span><a href="http://www.scuec.edu.cn/shzyyj/" target="_blank">中南民族大学马克思主义学院网站（www.scuec.edu.cn/shzyyj/）<Icon type="paper-airplane"></Icon> </a></span>
            <span>负责人</span>
          </h3>
          <ul>
            <li><span></span>本项目是基于webplus网站群系统建设，webplus网站群系统是大多数大学和政府使用的系统</li>
            <li><span></span>通过阅读开发文档即可进行快速开发</li>
            <li><span></span>通过这个项目学到了与客户（老师）的沟通是非常重要的，可能客户的需求有变动，项目就要进行随时的调整，这样大大提高了项目的需求通过率</li>
          </ul>
        </div>
      </Timeline-item>

      <Timeline-item>
        <div class="resume-project-block">
          <h3>未完待续...</h3>
        </div>
      </Timeline-item>
    </div>
    <div class="resume-prize">
      <h2>奖项荣誉（大学）</h2>
      <template>
        <Collapse accordion v-model="collapse.value3">
          <Panel name="1">
            大一学年：
            <div slot="content">
              大一整年两个学期
              <Collapse accordion v-model="collapse.value4">
                <Panel name="1-1">
                  国家励志奖学金
                  <p slot="content">综合素质测评班级第一，专业第六；</p>
                </Panel>
                <Panel name="1-1">
                  专业二等奖学金
                  <p slot="content">学习总成绩占全专业排名前20%；</p>
                </Panel>
              </Collapse>
            </div>
          </Panel>
          <Panel name="1">
            大二学年：
            <div slot="content">
              大二整年两个学期
              <Collapse accordion v-model="collapse.value4">
                <Panel name="1-1">
                  专业三等奖学金
                  <p slot="content">学习总成绩占全专业排名前30%；</p>
                </Panel>
                <Panel name="1-1">
                  三好学生
                  <p slot="content">德、智、体、美、劳全方面发展；<br>活动积极；<br>努力为班级做贡献</p>
                </Panel>
              </Collapse>
            </div>
          </Panel>
        </Collapse>
      </template>
    </div>
  </div>
</template>

<script>
import 
  { 
    Icon, 
    Progress, 
    Timeline,
    Collapse
  } from 'iview'
import skillEcharts from './echarts.vue'
import believe from './carousel.vue'
export default {
  name: 'hello',
  data () {
    return {
      collapse: {
        value3: '1',
        value4: '1-1'
      }
      
    }
  },
  components: {
    'i-icon': Icon,
    skillEcharts,
    'i-progress': Progress,
    'i-timeline': Timeline,
    believe
  },
  created(){
    this.$nextTick(() => { 
      
    });

  },
  computed: {
    
  },
  methods: {
    
  }

}
</script>

<style lang="scss">
.resume{
  margin-left: 400px;
  &-name,
  &-college{
    margin-bottom: 25px;
    & h2{
      margin-bottom: 15px;
    }
    & p{
      margin-bottom: 6px;
      & i{
        font-size: 20px;
      }
    }
  }
  &-skill{
    margin-bottom: 25px;
    &-echarts{
      width: 430px;
      height: 360px;
    }
  }
  &-internship,
  &-project{
    margin-bottom: 15px;
    & h2{
      margin-bottom: 15px;
    }
    &-block{
      & h3{
        font-size: 18px;
        margin-bottom: 10px;
        color: #2d8cf0;
        & span{
          margin-right: 20px;
        }
        
      }
      & ul{
        overflow: hidden;
        & li{
          margin-top: 7px;
          font-size: 14px;
          margin-left: 17px;
          position: relative;
          & span{
            display: block;
            width: 5px;
            height: 5px;
            background: #2d8cf0;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: -15px;
          }
          & i{
            font-size: 20px;
          }
        }
      }
      &-believe{
        width: 700px;
        margin-top: 25px;
        margin-bottom: 25px;
        border-radius: 4px;
      }
    }
  }
  &-prize{
    & h2{
      margin-bottom: 15px;
    }
  }
  
}
</style>
