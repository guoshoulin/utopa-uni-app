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
				<view class="attr-title">领券</view>
				<view class="attr-msg">
					<view class="attr-coupons">
						<view class="left">
							<view class="attr-name">店铺优惠券名称</view>
							<view class="attr-hint">满199可用</view>
							<view class="attr-date">2019.01.01～2020.12.01</view>
						</view>
						<view class="right" @click="choiceCoupons(123)">
							<text>去使用</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const perfix = 'sku-bounced'
	export default {
		name:'utpCoupons',
		data() {
			return {
				perfix,
				specClass: 'none'
			}
		},
		props: {
			couponsData: {
				type: Object,
				default: new Object()
			}
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
			},
			choiceCoupons (val) {
				console.log(val)
			}
		}
	}
</script>

<style lang="scss">
.sku-bounced{
	padding: 10rpx 15rpx;
	font-family: PingFangSC-Regular, sans-serif;
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
			.attr-title{
				color: #999999;
				font-size: 28rpx;
				line-height: 28rpx;
				padding: 0 10rpx;
				margin-bottom: 16rpx;
			}
			.attr-msg{
				display: flex;
				width: 100%;
				padding: 0 15rpx;
				.attr-coupons{
					width: 714rpx;
					height: 164rpx;
					background-image: url(../../static/images/back_coupons@3x.png);
					background-repeat:no-repeat;
					background-size: 714rpx 164rpx;
					margin-bottom: 12rpx;
					color: #FF2F7B;
					display: flex;
					padding: 20rpx 32rpx;
					.left{
						border-right: 1rpx solid #FF2F7B;
						width: 500rpx;
						height: 134rpx;
						.attr-name{
							font-size: 32rpx;
							line-height: 44rpx;
							white-space: 0.3rpx;
						}
						.attr-hint{
							font-size: 24rpx;
							line-height: 44rpx;
						}
						.attr-date{
							font-size: 20rpx;
							line-height: 38rpx;
						}
					}
					.right{
						font-size: 28rpx;
						height: 134rpx;
						width: 180rpx;
						line-height: 130rpx;
						display: flex;
						justify-content: center;
					}
				}
			}
		}
	}
}
</style>
