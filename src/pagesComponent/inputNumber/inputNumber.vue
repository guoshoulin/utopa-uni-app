<template>
  <view>
    <uni-title title="数字输入框"/>
    <text>直接在uni-number-box组件上添加类.utp-input-number</text>
    <view class="flex flex-justify-between">
      <uni-number-box class="utp-input-number"></uni-number-box>
    </view>
  </view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import uniNumberBox from "@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue";

export default {
  components: {
    uniTitle,
    uniNumberBox,
  }
}
</script>

<style lang="scss">
// .utp-input-number{
//   .uni-numbox__value,
//   .uni-numbox__plus,
//   .uni-numbox__minus{
//     border: 0!important;
//   }

//   .uni-numbox__minus,
//   .uni-numbox__plus{
//     width: 44rpx!important;
//     height: 44rpx!important;
//     background-color: #fff!important;
//     border-radius:4rpx;

//     .uni-numbox--text{
//       font-size: 35rpx!important;
//       font-weight: bold;
//       transform: translateY(-2rpx);
//     }
//   }
//   .uni-numbox__minus{
//     box-shadow:  inset 1px 1px 0 #eee, inset -1px -1px 0 #eee;
//     .uni-numbox--text{
//       color: #9C9C9C!important;
//       transform: scaleX(1.5), translateY(-2rpx);
//     }
//   }
//   .uni-numbox__plus{
//     background-color: #FFF4F2!important;
//     .uni-numbox--text{color: #E84815!important;}
//   }
//   .uni-numbox__value{
//     font-size: 14px;
//     height: 44rpx!important;
//     color: #333;
//     width: 80rpx!important;
//   }
// }
</style>