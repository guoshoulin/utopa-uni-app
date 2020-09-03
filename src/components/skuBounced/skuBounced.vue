<template>
	<view :class="perfix" class="sku-bounced">
		<view 
			class="popup" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<!-- 内容 -->
			<view class="layer attr-content" @click="stopPrevent">
				<view class="attr-close">
					<text>X</text>
				</view>
				<view class="attr-msg">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text>拼团价：¥32.00</text>
						<text>单买价：¥44.00</text>
					</view>
				</view>
				<view class="attr-sku">
					sku
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const perfix = 'sku-bounced'
	export default {
		name:'utpSkuBounced',
		data() {
			return {
				perfix,
				specClass: 'none'
			}
		},
		props: {
			
		},
		computed: {
			
		},
		methods: {
			stopPrevent () {
				
			},
			toggleSpec () {
				if (this.specClass === 'show') {
					this.specClass = 'hide'
					setTimeout(() => {
						this.specClass = 'none'
					}, 250);
				} else if (this.specClass = 'none') {
					this.specClass = 'show'
				}
			}
		}
	}
</script>

<style lang="scss">
.sku-bounced{
	.popup{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask {
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40rpx;
			border-radius: 10rpx 10rpx 0 0;
			background-color: #FFFFFF;
			.btn{
				height: 66rpx;
				line-height: 66rpx;
				border-radius: 100rpx;
				background: red;
				font-size: 26rpx;
				color: #FFFFFF;
				margin: 30rpx auto 20rpx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0%);
			}
			100% {
				transform: translateY(120%);
			}
		}
		.attr-content{
			padding: 10rpx 0;
			.attr-close{
				display: flex;
				justify-content: flex-end;
				padding: 0 15rpx;
			}
			.attr-msg{
				display: flex;
				padding: 0 15rpx;
				image{
					width: 180rpx;
					height: 180rpx;
					flex-shrink: 0;
				}
				.right{
					display: flex;
					flex-direction: column;
					padding-left: 24rpx;
					font-size: 26rpx;
					line-height: 42rpx;
				}
			}
		}
	}
}
</style>
