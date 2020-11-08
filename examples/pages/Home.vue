<template>
    <div class="home">
        <div class="header">
            <div class="container">
                Remo UI
            </div>
        </div>
        <div class="main">
            <div class="sidebar"></div>
            <div class="content">
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    .header {
        // 不会被覆盖属于置顶
        z-index: 100;
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 80px;
        line-height: 80px;  // 字体居中
        background: #fff;
        .container{ //里面的容器
            height: 100%; // 撑开
            width: 1140px;
            margin: 0 auto;
            padding: 0 10px;
            border-bottom: 1px solid #dcdfe6; // 分界线
        }
    }
    .main{
        position: relative;
        width: 1140px;
        height: -webkit-calc(100%-80px);
        height: -moz-calc(100%-80px);
        height: calc(100%-80px);
        margin: 0 auto;
        padding: 10px 0;
        top: 80px;
        display: flex;
        .sidebar{
            position: fixed;
            margin-right: 40px;
            width: 200px;
            height: 80%;
            top: 135px;
            visibility: hidden; // 鼠标在才触发滚动条
            overflow: auto;
            &:hover{
                visibility: visible; // 鼠标在才触发滚动条
            }
            > ul{
                visibility: visible; // 始终显示列表
            }
            .nav-item{

            }
        }
        .content {
            flex: 1;
            width: 100%;
            padding: 0 50px 0 10px;
            margin-left: 240px;
        }
    }
}
</style>
