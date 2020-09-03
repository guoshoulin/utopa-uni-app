<template>
	<view class="sku-style">
		<view>
			<uni-title title="sku弹框"/>
		</view>
		<view @click="showSkuBounced" class="c-list">
			<view class="c-row">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="icon-you">></text>
			</view>
		</view>
		
		<!-- sku弹框 -->
		<utp-sku-bounced ref="utpSkuBounced"/>
	</view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import utpSkuBounced from '../../components/skuBounced/skuBounced'
export default{
	components: {
		uniTitle,
		utpSkuBounced
	},
	data () {
		return {
			specSelected: []
		}
	},
	methods: {
		showSkuBounced () {
			this.$refs.utpSkuBounced.toggleSpec()
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
