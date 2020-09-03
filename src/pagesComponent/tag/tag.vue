<template>
  <view>
    <uni-title title="数字输入框"/>
    <text>直接在uni-number-box组件上添加类.utp-input-number</text>
    <view >
      <uni-tag class="utp-tag margin" text="标签"></uni-tag>
      <uni-tag class="utp-tag margin" text="标签" type="error" :circle="true"></uni-tag>
      <uni-tag class="utp-tag margin" text="default" type="default"></uni-tag>
      <uni-tag class="utp-tag margin" text="primary" type="primary"></uni-tag>
      <uni-tag class="utp-tag margin" text="success" type="success"></uni-tag>
      <uni-tag class="utp-tag margin" text="warning" type="warning"></uni-tag>
      <uni-tag class="utp-tag margin" text="error" type="error"></uni-tag>
      <uni-tag class="utp-tag margin" text="小tag" type="primary" size="small"></uni-tag>
    </view>
  </view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import uniTag from "@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue";

export default {
  components: {
    uniTitle,
    uniTag,
  },
}
</script>

<style scoped>
.margin{
  margin: 10px;
}
</style>