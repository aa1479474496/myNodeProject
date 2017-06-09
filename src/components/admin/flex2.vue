<template>
    <div class="wrap">
        <div class="flex-title">标题测试</div>
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
        <div class="flex-title flex-bottom">底部</div>
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
    overflow: hidden;
    box-sizing: border-box;
}

.flex-title {
    line-height: 40px;
    font-size: 20px;
}

.flex-bottom {
    position: absolute;
    bottom: 0;
}

.comment-list {
    width: 100%;
    position: absolute;
    top: 40px;
    bottom: 40px;
    padding: 10px;
    background: #ccc;
    overflow-x: hidden;
    overflow-y: hidden;
}

.left-list {
    width: 49%;
    /*float: left;*/
    height: 100%;
    display: inline-block;
    overflow-y: auto;
}

.right-list {
    width: 49%;
    display: inline-block;
    /*float: right;*/
    height: 100%;
}
</style>
<script>
export default {
    data() {
        return {

        };
    }
}
</script>