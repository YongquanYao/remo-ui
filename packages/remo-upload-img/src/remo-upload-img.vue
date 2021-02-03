<template>
  <div class="re-upload-img">
      <!-- 很多个Img BOX-->
      <div
        class="re-img-block"
        :style="{width: width + 'px', height:height + 'px'}"
        v-for="(item,index) in list"
        :key="index"
      >
        <div class="img-box"
        >
          <img :src="item">
          <div class="img-box-mask">
            <i
              v-if="view"
              class="remoi remo-eye"
              @click="showImg(index)"
            >
            </i>
            <i
              class="remoi remo-delete"
              @click="deleteImg(index)"
            >
            </i>
          </div>
        </div>
      </div>
      <!-- 没有图片的时候 -->
      <div
        :style="{width:width + 'px',height: height + 'px'}"
        class="re-upload-img-block"
        v-if="(max == 0 || max > list.length) && !disabled"
      >
        <div>
          <input
            @change="changeImage($event)"
            accept="image/gif, image/jpeg, image/jpg, image/png"
            class="re-img-input"
            name="reimg"
            ref="imgInput"
            type="file"
          />
          <div>
            <i class="remoi remo-plus"></i>
            <p>{{addText}}</p>
          </div>
        </div>
      </div>

      <!-- 图片预览 -->
      <div
        class="remo-img-preview-mask"
        v-if="previewImgShow"
      >
        <div v-if="previewImgShow" class="remo-img-preview">
          <i class="remoi remo-close"
            @click="() => {this.previewImgShow=false}">
          </i>
          <img :src="previewImg" alt="prewiew_show_img" @click="() => {this.previewImgShow=false}">
        </div>
      </div>

      <!-- 图片裁剪 -->
      <div class="remo-img-preview-mask" v-if="cropperShow&&cropper">
          <div v-if="cropperShow&&cropper" class="remo-img-preview">
            <div class="cropper_title">
                <span>图片裁剪</span>
            </div>
            <div class="cropper_container">
              <vue-cropper
                :fixed="fixed"
                :fixedNumber="fixedNumber"
                :full="true"
                :img="cropperImg"
                :outputSize="outputSize"
                autoCrop
                ref="cropper"
              />
            </div>
            <div class="cropper_bottom">
              <re-button @click="cropperShow=false">取消</re-button>
              <re-button @click="cropperConfirm" type="primary">确认</re-button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ReUploadImg',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    addText: {
      type: String,
      default: 'Image'
    },
    width: {
      type: Number,
      default: 110
    },
    height: {
      type: Number,
      default: 110
    },
    view: {
      type: Boolean,
      default: true
    },
    cropper: {
      type: Boolean,
      default: false
    },
    cropType: {
      type: String,
      default: 'base64'
    },
    outputSize: {
      type: Number,
      default: 1
    },
    fixed: {
      type: Boolean,
      default: true
    },
    fixedNumber: {
      type: Array,
      default: function () {
        return [1, 1]
      }
    },
    max: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: function (data) {
      this.list = data
    },
    list: function () {
      this.$emit('input', this.list)
    }
  },
  data () {
    return {
      list: this.value,
      cropperShow: false,
      cropperImg: '',
      previewImg: '',
      previewImgShow: false,
      fileName: ''
    }
  },
  methods: {
    changeImage (e) {
      let file = e.target.files[0]
      this.fileName = file.name
      console.log(this.fileName)
      let reader = new FileReader()
      let _this = this
      reader.onload = function () {
        // 图片的base64格式，可以塞进<img>离
        let dataUrl = reader.result
        if (_this.cropper) {
          console.log(dataUrl)
          _this.cropperImg = dataUrl
          _this.cropperShow = true
        } else {
          _this.list.push(dataUrl)
          _this.$emit('change', dataUrl, _this.list, _this.fileName)
        }
        e.target.value = ''
      }
      reader.readAsDataURL(file)
    },
    deleteImg (index) {
      if (index === undefined) {
        return -1
      }
      this.list.splice(index, 1)
    },
    showImg (index) {
      this.previewImg = this.list[index]
      this.previewImgShow = true
    },
    cropperConfirm () {
      let _this = this
      if (this.cropType === 'base64') {
        this.$refs.cropper.getCropData(data => {
          _this.list.push(data)
          // _this.$emit('change', data, _this.list, _this.fileName)
        })
      } else if (this.cropType === 'blob') {
        this.$refs.cropper.getCropBlob(data => {
          _this.list.push(data)
          // _this.$emit('change', data, _this.list, _this.fileName)
        })
      } else {
        this.$refs.cropper.getCropData(data => {
          _this.list.push(data)
          // _this.$emit('change', data, _this.list, _this.fileName)
        })
      }
      this.cropperShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.re-upload-img{
  display: flex;
  width: 100%;
  .re-img-block{
    box-sizing: border-box;
    position: relative;
    float: left;
    display: block;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 0 8px 8px 0;
    .img-box{
      border: 1px solid #d9d9d9;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .img-box-mask {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(0, 0, 0, 0.274);
        transition: all 0.3s;
        color: #fff;
        font-size: 22px;
        i {
          margin: 0 5px;
          cursor: pointer;
        }
      }
      &:hover {
        .img-box-mask {
          opacity: 1;
        }
      }
    }
  }
  .re-upload-img-block{
    position: relative;
    float: left;
    display: block;
    margin-bottom: 8px;
    > div {
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border: 1px dashed #d6d6d6;
      border-radius: 4px;
      color: #d6d6d6;
      background: #fafafa;
      transition: border-color 0.3s ease;
      &:hover {
        border-color: #409EFF;
      }
      .re-img-input {
        cursor: pointer;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
      > div {
        text-align: center;
        margin-top: 5px;
        i{
          font-size:24px;
        }
        p {
          margin-top: 5px;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }
  .remo-img-preview-mask{
      z-index: 199;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #00000557;
      .remo-img-preview{
      // width: 100%;
      padding:5px 10px;
      border: 1px solid #ebebeb;
      box-shadow: 0 2px 4px 0 #999;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      box-sizing: border-box;
      z-index: 200;
      background: #fff;
      border-radius: 6px;
      i{
        cursor: pointer;
        margin: 2px;
        float: right;
        &:hover{
          color: #409EFF;
        }
      }
      img{
        width: 750px;
        max-height: 648px;
        border: 1px solid #ebebeb;
        border-radius: 6px;
      }
      .cropper_container{
        width: 600px;
        height: 500px;
        padding: 25px 20px;
      }
      .cropper_title{
        font-size:16px;
        font-weight: 600;
        padding: 10px 15px;
        border-bottom: 1px solid #dbdada;
      }
      .cropper_bottom{
          // margin-top: 20px;
          padding: 10px;
          text-align: right;
          border-top: 1px solid #dbdada;
          .remo-button{
            margin-bottom: 0;
          }
      }
    }
  }
}
</style>
