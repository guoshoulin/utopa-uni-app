<template>
  <button
    :class="[
      prefix,
      `${prefix}--size-${size}`,
      round ? `${prefix}--round` : '',
      square ? `${prefix}--square` : '',
      block ? `${prefix}--block` : '',
      plain ? `${prefix}--plain` : ''
    ]"
    :open-type="openType"
    @click="e => $emit('click', e)"
    @getUserInfo="e => $emit('getUserInfo', e)"
  >
    <slot></slot>
  </button>
</template>

<script>
const prefix = "utp-button";

export default {
  name: "utp-button",
  data() {
    return {
      prefix
    };
  },
  mounted() {
    console.log(this.$props);
  },
  props: {
    size: {
      type: String,
      default: "normal",
      validator: v =>
        v === "small" || v === "normal" || v === "large" || v === "mini"
    },
    round: {
      type: Boolean,
      default: true
    },
    square: {
      type: Boolean,
      default: false
    },
    block: {
      // 是否为块级元素，铺满宽度
      type: Boolean,
      default: false
    },
    plain: {
      // 是否为朴素按钮
      type: Boolean,
      default: false
    },
    openType: {
      type: String
    },
  }
};
</script>

<style lang="scss">
@import "../../static/styles";

$prefix: "utp-button";

.#{$prefix} {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 64rpx;
  margin: 0;
  padding: 0 30rpx;
  font-size: 14px;
  line-height: 42px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  background-color: $color-button-primary;
  color: #fff;

  &--size {
    &-mini {
      font-size: 11px;
      height: 40rpx;
      line-height: 40rpx;
      padding: 0 16rpx;
    }
    &-small {
      font-size: 12px;
      height: 62rpx;
      line-height: 62rpx;
      padding: 0 24rpx;
    }
    &-normal {
      font-size: 16px;
      height: 72rpx;
      line-height: 72rpx;
    }
    &-large {
      font-size: 16px;
      height: 80rpx;
      line-height: 80rpx;
    }
  }

  &--round {
    border-radius: 999px;
  }
  &--square {
    border-radius: 0;
  }
  &--block {
    width: 100%;
  }
  &--plain {
    background-color: #fff;
    color: $color-primary;
    border: 1px solid $color-primary;
  }
}
</style>
