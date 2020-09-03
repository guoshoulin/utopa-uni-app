<template>
  <view>
    <view>
      <uni-title title="默认"/>
      <utp-button>确定</utp-button>
    </view>
    <view>
      <uni-title title="大小"/>
      <utp-button size="large">大按钮</utp-button>
      <utp-button size="normal">普通按钮</utp-button>
      <utp-button size="small">小按钮</utp-button>
      <utp-button size="mini">极小按钮</utp-button>
    </view>
    <view>
      <uni-title title="区块"/>
      <utp-button>非区块</utp-button>
      <utp-button block size="large" @click="onClick">区块</utp-button>
    </view>
    <view>
      <uni-title title="朴素模式"/>
      <utp-button>非朴素模式</utp-button>
      <utp-button plain>朴素模式</utp-button>
      <utp-button plain size="mini">小按钮</utp-button>
    </view>
    <view>
      <uni-title title="方形"/>
      <utp-button square >方形</utp-button>
      <utp-button :round="false" style="margin-left: 20px">非round</utp-button>
      <span>有一定圆角</span>
    </view>
  </view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import utpButton from '@/components/button/button'

export default {
  components: {utpButton, uniTitle},
  methods: {
    onClick(e){
      console.log('click', e)
    }
  },
}
</script>

<style>

</style>