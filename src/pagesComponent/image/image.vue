<template>
  <view>
    <view>
      <uni-title title="默认"/>
      <view style="width: 100%">
        <utp-image :src="imageSrc" fullWidth/>
      </view>
    </view>
    <view>
      <uni-title title="填充-none"/>
      <utp-image :src="imageSrc" fit="none" width="350rpx" height="350rpx"/>
    </view>
    <view>
      <uni-title title="填充-contain"/>
      <utp-image :src="imageSrc" fit="contain" width="350rpx" height="350rpx"/>
    </view>
    <view>
      <uni-title title="填充-cover"/>
      <utp-image :src="imageSrc" fit="cover" width="350rpx" height="350rpx"/>
    </view>
    <view>
      <uni-title title="填充-fill"/>
      <utp-image :src="imageSrc" fit="fill" width="350rpx" height="350rpx"/>
    </view>
    <view>
      <uni-title title="填充-fullWidth"/>
      <utp-image :src="imageSrc" fit="fullWidth" width="350rpx" height="350rpx"/>
    </view>
    <view>
      <uni-title title="圆形-fill"/>
      <utp-image :src="imageSrc" fit="fill" width="350rpx" height="350rpx" round/>
    </view>
  </view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import utpImage from '@/components/image/image'

const imageSrc = 'https://image.myutopa.com/Fnl0zA2kcme5Q-FMspJCbskioXl7?e=1613376853&token=WNtUYaMiCdpTDzanlE03SjKXLinbmTzkLGXEBYC_:ecDje-RoFIWIQyuMkrcLwUH6Ytg='

export default {
  components: {utpImage, uniTitle},
  data () {
    return {
      imageSrc
    }
  }
}
</script>

<style>

</style>