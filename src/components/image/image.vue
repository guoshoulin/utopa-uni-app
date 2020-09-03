<template>
  <image
    :class="perfix"
    :style="{
      'borderRadius': round ? '999px' : radius,
      height: imageHeight,
      width: imageWidth,
    }"
    :mode="imageMode"
    :src="src"
    :lazy-load="lazyLoad"
  ></image>
</template>

<script>
const perfix = 'utp-image'

const toPx = v => typeof v === 'number' ? `${v}px` : v

export default {
  name: 'utpImage',
  data() {
    return { perfix }
  },
  props: {
    src: String,
    height: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    round: {
      type: Boolean,
      default: false,
    },
    fit: {
      type: String,
      default: 'fill',
      validator: v => ['contain', 'cover', 'fill', 'none', 'fullWidth'].indexOf(v) > -1
    },
    mode: {
      type: String
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    fullWidth: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    imageMode () {
      if (this.mode) return this.mode;

      const modeMap = {
        none: 'center',// 保持图片原有尺寸, 居中展示
        contain: 'aspectFit', // 保持宽高缩放图片，使图片的长边能完全显示出来
        cover: 'aspectFill', // 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
        fill: 'scaleToFill', // 拉伸图片，使图片填满元素
        fullWidth: 'widthFix' // 全宽，高度自动变化
      }

      return modeMap[this.fit] || modeMap.fill;
    },
    imageHeight () {
      return toPx(this.height);
    },
    imageWidth () {
      if (this.fullWidth) {
        return '100%'
      }
      return toPx(this.width);
    }
  },
}
</script>

<style lang="scss">
$prefix: 'utp-image';

.#{$prefix}{
  &--round{
    border-radius: 999px;
  }
}
</style>