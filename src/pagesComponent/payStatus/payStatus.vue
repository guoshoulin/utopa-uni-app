<template>
	<view>
		<view>
			<uni-title title="支付成功"/>
			<utp-pay-status :src="imageSuccess" fit="fill" width="140rpx" height="140rpx" :iconName="iconNameSuccess"/>
		</view>
		<view>
			<uni-title title="支付失败"/>
			<utp-pay-status :src="imageFail" fit="fill" width="140rpx" height="140rpx" :iconName="iconNameFail"/>
		</view>
		<view>
			<uni-title title="支付结果确认中"/>
			<utp-pay-status :src="imageConfirm" fit="fill" width="140rpx" height="140rpx" :iconName="iconNameConfirm"/>
		</view>
	</view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import utpPayStatus from '@/components/payStatus/payStatus'

const imageSuccess = '../../static/images/order_icon_success@3x.png'
const imageFail = '../../static/images/order_icon_fail@3x.png'
const imageConfirm = '../../static/images/order_icon_confirm@3x.png'
const iconNameSuccess = '支付成功'
const iconNameFail = '支付失败'
const iconNameConfirm = '支付结果确认中'

export default {
	components:{
		utpPayStatus,
		uniTitle
	},
	
	data() {
		return {
			imageSuccess,
			imageFail,
			imageConfirm,
			iconNameSuccess,
			iconNameFail,
			iconNameConfirm
		}
	},
}
</script>

<style>
</style>
