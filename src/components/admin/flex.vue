<template>
  <div class="wrap">
    <div class="flex-title">标题测试</div>
    <div class="flex-title" style="margin-top: 10px;" @click="testProxy">标题测试</div>
    <div class="comment-list">
      <div class="left-list">
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
        <p>left</p>
      </div>
      <div class="right-list"></div>
    </div>
    <div class="flex-title">底部</div>
  </div>
</template>
<style scoped>
  .wrap {
    position: fixed;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    background: #fff;
    border: 1px solid green;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
  }

  .flex-title {
    line-height: 40px;
    font-size: 20px;
  }

  .comment-list {
    padding: 10px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .left-list {
    width: 49%;
    float: left;
    height: 100%;

    overflow-y: auto;
  }

  .right-list {
    width: 49%;
    float: right;
    height: 100%;
  }
</style>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      testProxy() {
        this.api.testProxy(
        ).then(data => {
          console.log(data);
        }, err => {
          console.log(err);
        });
      }
    }
  }
</script>