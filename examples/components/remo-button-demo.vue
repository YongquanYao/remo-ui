<template>
    <div>
      <div class="demo-block">
        <div class="title">
          <span>基础用法</span>
                <re-divider/>
        </div>
        <div>
          <re-button>default</re-button>
          <re-button type="primary">Primary</re-button>
          <re-button type="success">Success</re-button>
          <re-button type="warning">Warning</re-button>
          <re-button type="danger">Danger</re-button>
          <re-button type="dashed" >dashed</re-button>
          <re-button type="dotted" >dotted</re-button>
        </div>
      </div>
      <div class="demo-block">
        <div class="title">
          <span >禁用</span>
          <re-divider/>
        </div>
        <div>
          <re-button :disabled="true">default</re-button>
          <re-button :disabled="true" type="primary">Primary</re-button>
          <re-button :disabled="true" type="success">Success</re-button>
          <re-button :disabled="true" type="warning">Warning</re-button>
          <re-button :disabled="true" type="danger">Danger</re-button>
          <re-button :disabled="true" type="dashed" >dashed</re-button>
          <re-button :disabled="true" type="dotted" >dotted</re-button>
        </div>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>圆形</span>
          <re-divider/>
        </div>
        <div>
          <re-button type="primary" circle  icon="remo-user"></re-button>
          <re-button type="warning" circle  icon="remo-phone"></re-button>
          <re-button type="success" circle  icon="remo-plus"></re-button>
          <re-button type="danger" circle  icon="remo-shop"></re-button>
          <re-button type="dashed" circle  icon="remo-download"></re-button>
        </div>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>自定义颜色</span>
          <re-divider/>
        </div>
        <div>
           <re-button type="customize" :color="'#87cefa'"  icon="remo-heart">Customize Color</re-button>
          <re-button type="customize" :color="'#0892d0'"  icon="remo-heart">Customize Color</re-button>
          <re-button type="customize" :color="'#4682b4'"  icon="remo-heart">Customize Color</re-button>
           <re-button type="customize" :color="'#0067a5'"  icon="remo-heart">Customize Color</re-button>
    </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RemoBtnDemo'
}
</script>

<style lang="scss" scoped>
.demo-block{
  margin: 30px auto;
  .title{
    font-size: 19px;
    font-weight: 400;
    margin: 20px 0;
  }
}
</style>
