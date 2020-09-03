<template>
	<view class="sku-style">
		<view>
			<uni-title title="sku弹框"/>
		</view>
		<view @click="showSkuBounced" class="c-list">
			<view class="c-row">
				<text class="tit">优惠券</text>
				<view class="con">
					<text class="selected-text">
						已优惠{{form.couponsPrice}}元
					</text>
				</view>
				<text class="icon-you">></text>
			</view>
		</view>
		
		<!-- sku弹框 -->
		<utp-coupons ref="utpCoupons"/>
	</view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import utpCoupons from '../../components/coupons/coupons'
export default{
	components: {
		uniTitle,
		utpCoupons
	},
	data () {
		return {
			form: {
				couponsPrice: 6
			}
		}
	},
	methods: {
		showSkuBounced () {
			this.$refs.utpCoupons.toggleSpec()
		}
	}
	
}
</script>

<style lang="scss">
.sku-style{
	.c-list{
		font-size: 26rpx;
		color: #606266;
		background: #fff;
		border-top: 1rpx solid #EEEEEE;
		border-bottom: 1rpx solid #EEEEEE;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20rpx 30rpx;
			position:relative;
			.icon-you{
				font-size: 26rpx;
				color: #888;
			}
		}
		.tit{
			width: 140rpx;
		}
		.con{
			flex: 1;
			color: #303133;
			.selected-text{
				margin-right: 10rpx;
			}
		}
	}
}
</style>
