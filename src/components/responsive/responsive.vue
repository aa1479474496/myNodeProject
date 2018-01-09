<!-- <template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav nav-pills nav-stacked">
                  <li role="presentation" class="active"><a href="#">Home</a></li>
                  <li role="presentation"><a href="#">Profile</a></li>
                  <li role="presentation"><a href="#">Messages</a></li>
                </ul>
          </div>
        
      </div>
      <div class="col-md-8">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="glyphicon glyphicon-euro"></span>
            </button>
        <div>主内容区</div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div>
    <div class="sider" v-if="!isNavbar">
      <ul class="nav nav-pills nav-stacked">
        <li role="presentation" class="active">
          <div class="hasChildren">
            新品推荐
            <span class="caret pull-right mt10"></span>
          </div>
          <ul class="children">
            <li><a href="#">新品推荐1</a></li>
            <li><a href="#">新品推荐2</a></li>
            <li><a href="#">新品推荐3</a></li>
            <li><a href="#">新品推荐4</a></li>
          </ul>

        </li>
        <li role="presentation">
          <div class="hasChildren">
            星巴克移动应用
            <span class="caret pull-right mt10"></span>
          </div>
        </li>
        <li role="presentation">
          <a href="#">星享俱乐部</a>
        </li>
      </ul>
    </div>
    <div class="main" :class="[isNavbar ? 'withnavbar' : '']">
      main
      <t></t>
    </div>
  </div>
</template>

<script>
  import './responsive.css'
  export default {
    components: {
      t: require('./t')
    },
    data() {
      return {
        isNavbar: document.body.clientWidth < 769,
        show: false
      }
    },
    mounted() {
      let tid
      let self = this
      window.onresize = function () {
        clearTimeout(tid);
        tid = setTimeout(() => {
          self.isNavbar = document.body.clientWidth < 769
        }, 300);
      }
    }
  }
</script>