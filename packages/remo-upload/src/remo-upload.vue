<template>
  <div>
    <re-button icon="remo-upload" @click="uploadTrigger">
      <input
            @change="uploadFile($event)"
            class="re-img-input"
            ref="fileInput"
            type="file"
            :accept="accept"
      />
      {{uploadText}}
    </re-button>
    <div class="file_des_container" v-if="fileType !== 'all' || fileSize !== 10240000">
        <span v-if="fileType !== 'all'">只能上传{{fileType}}文件</span>
        <span v-if="fileSize !== 10240000">文件大小不能超过{{(fileSize / 1000000).toFixed(1)}}Mb</span>
    </div>
    <div class="file_show_container" v-if="list.length !== 0">
      <ul >
        <li v-for="(item,index) in list" :key="index">
          <div @click="showFileDetail(index)"><i class="remoi remo-file-text"/> {{item.name}}</div>
          <i class="remoi remo-check-circle"/>
          <i class="remoi remo-close-circle" @click="handleFileDelete(index)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReUpload',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    uploadText: {
      type: String,
      default: '选择文件'
    },
    fileSize: {
      type: Number,
      default: 10240000
    },
    fileType: {
      type: String,
      default: 'all'
    }
  },
  data () {
    return {
      list: this.value,
      limit: this.fileSize
      // image/gif, image/jpeg, image/jpg, image/png
    }
  },
  computed: {
    accept: {
      get () {
        if (this.fileType === 'all') {
          return '*'
        }
        if (this.fileType === 'image') {
          return 'image/*'
        }
        if (this.fileType === 'video') {
          return 'video/*'
        }
        return this.fileType
      },
      // 有新值产生则传递到自身data里的状态变量
      set (newValue) {
        console.log(newValue)
      }
    }
  },
  methods: {
    uploadTrigger () {
      this.$refs.fileInput.click()
    },
    uploadFile (e) {
      let file = e.target.files[0]
      if (file.size > this.limit) {
        alert('文件大小不符合规格!')
        return
      }
      let fileName = file.name
      let reader = new FileReader()
      let _this = this
      reader.onload = function () {
        let dataUrl = reader.result
        const fileData = {
          'data': dataUrl,
          'name': fileName
        }
        _this.list.push(fileData)
        e.target.value = ''
      }
      reader.readAsDataURL(file)
    },
    handleFileDelete (index) {
      if (index === undefined) {
        return -1
      }
      this.list.splice(index, 1)
    },
    showFileDetail (index) {
      console.log(this.list[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.re-img-input{
  display: none;
  // opacity: 0;
}
.file_des_container{
  margin: 0;
  padding: 0;
  margin-top: -8px;
  span{
    font-size: 12px;
    color: #555;
  }
}
.file_show_container{
  width: 300px;
  ul{
    list-style: none;
    padding: 0;
    margin: 3px auto;
    li{
      box-sizing: border-box;
      border-radius: 4px;
      width: 100%;
      position: relative;
      div{
        font-size: 14px;
        line-height: 18px;
        white-space: nowrap; // 不换行
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 30px;
        transition: color .3s;
        .remo-file-text{
          color: rgb(146, 146, 146);
          // font-size: 13px;
        }
      }
      padding: 5px 5px;
      cursor: pointer;
      &:hover{
        background:#f3f7fa;
        color: #409EFF;
        .remo-close-circle{
          display:initial;
        }
        .remo-check-circle{
          display: none;
        }
      }
      .remo-check-circle{
        color: #67c23a;
        position: absolute;
        right: 5px;
        top: 8px;
      }
      .remo-close-circle{
        display: none;
        position: absolute;
        right: 5px;
        top: 7px;
        color: rgb(146, 146, 146);
      }
    }
  }
}
</style>
