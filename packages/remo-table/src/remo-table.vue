<template>
    <table class="remo-table">
        <thead :style="{'textAlign':align}">
            <tr>
                <th v-for="item in thead" :key="item">
                    {{item}}
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- data 为对象数组[{ },{ },{ },{ }] -->
            <tr v-for="(object,index) in data" :key="index">
                <td v-for="(value,key) in object" :key="key">
                    <span v-if="value !== '' && value !==null "
                    :class="{'paramter': key==='parameter'&& type==='demo','dataTypes':key === 'dataTypes'  && type === 'demo' ,'description':key === 'description'  && type === 'demo'}"
                    >
                        {{value}}
                    </span>
                     <span v-else>
                        —
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'ReTable',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    thead: {
      type: Array,
      default: function () {
        if (this.type === 'default') {
          return ['日期', '姓名', '地址', '操作']
        } else if (this.type === 'demo') {
          return ['参数', '说明', '类型', '可选值', '默认值']
        }
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.remo-table{
  width: 100%;
  border-collapse: collapse;
  &:before{
    content: "";
  }
  thead{
    tr{
      border-bottom: 1px solid #dcdfe6;
      th {
        padding: 15px;
        max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #909399;
        white-space: nowrap;
        &:first-child {
          padding-left: 10px;
        }
      }
    }
  }
  tbody{
    tr{
      border-bottom: 1px solid #dcdfe6;
      td{
        padding: 15px;
        font-size: 14px;
        font-weight: 400;
        color:#606266;
        &:first-child {
          padding-left: 10px;
        }
        .parameter {
          color: #003a8c;
        }
        .dataTypes {
          color: #bd6f9c;
        }
        .description{
          display: inline-block;
          max-width: 300px;
        }
      }
    }
  }
}
</style>
