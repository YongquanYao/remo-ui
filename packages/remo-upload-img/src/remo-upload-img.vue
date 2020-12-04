<template>
  <div class="re-upload-img">
      <!-- 很多个Img BOX-->
      <div
        class="re-img-block"
        :style="{width: width + 'px', height:height + 'px'}"
      >
      <!-- :key="index" -->
        <!-- v-for="(item,index) in formatImg" -->
        <div class="img-box"
        >
          <!-- <img src="@/assets/1.jpg"> -->
          <div class="img-box-mask">
            <i
              class="remoi remo-eye"
            >
            </i>
            <i
              class="remoi remo-delete"
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
      default: 104
    },
    height: {
      type: Number,
      default: 104
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
}
</style>
