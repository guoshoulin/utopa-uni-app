<template>
  <view>
    <uni-title type="h1" title="基础组件" />
    <uni-list>
      <uni-list-item title="按钮" @click="onNavigateTo('/pagesComponent/button/button')" />
      <uni-list-item title="图片" @click="onNavigateTo('/pagesComponent/image/image')" />
      <uni-list-item title="数字输入框" @click="onNavigateTo('/pagesComponent/inputNumber/inputNumber')" />
      <uni-list-item title="标签" @click="onNavigateTo('/pagesComponent/tag/tag')" />
      <uni-list-item title="支付状态反馈" @click="onNavigateTo('/pagesComponent/payStatus/payStatus')" />
	  <uni-list-item title="图标名称" @click="onNavigateTo('/pagesComponent/iconName/iconName')" />
	  <uni-list-item title="sku弹框" @click="onNavigateTo('/pagesComponent/skuBounced/skuBounced')" />
	  <uni-list-item title="优惠券" @click="onNavigateTo('/pagesComponent/coupons/coupons')" />
    </uni-list>
  </view>
</template>

<script>
import uniList from "@dcloudio/uni-ui/lib/uni-list/uni-list.vue";
import uniListItem from "@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue";
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";

export default {
  components: {
    uniList,
    uniListItem,
    uniTitle
  },
  mounted () {
    console.log(123124)
  },
  methods: {
    onNavigateTo(url) {
      uni.navigateTo({
        url
      });
    }
  }
};
</script>

<style></style>
