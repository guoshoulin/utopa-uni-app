<template>
	<view :class="perfix" class="icon-text-style">
		<view>
			<image
				:src="src" 
				:mode="imageMode"
				class="img-style"
				:style="{
					width: imageWidth,
					height: imageHeight
				}"
			></image>
			<text class="text-style">{{iconName}}</text>
		</view>
	</view>
</template>

<script>
	const perfix = 'utp-icon-text'
	
	const toPx = v => typeof v === 'number' ? `${v}px` : v
	
	export default {
		name: 'utpPayStatus',
		data() {
			return { 
				perfix
			}
		},
		props: {
			src: String,
			mode: String,
			fit: {
				type: String,
				default: 'fill',
				validator: v => ['contain', 'cover', 'fill', 'none', 'fullWidth'].indexOf(v) > -1
			},
			height: {
				type: [String, Number],
				default: ''
			},
			width: {
				type: [String, Number],
				default: ''
			},
			iconName: String
		},
		computed: {
			imageMode () {
				if (this.mode) return this.mode;
				
				const modeMap = {
					none: 'center',
					contain: 'aspectFit',
					cover: 'aspectFill',
					fill: 'scaleTofill',
					fullWith: 'widthFix'
				}
				
				return modeMap[this.fit] || modeMap.fill
			},
			imageHeight () {
				return toPx(this.height)
			},
			imageWidth () {
				return toPx(this.width)
			}
		}
	}
</script>

<style lang="scss">
$prefix: 'utp-icon-text';
.#{$prefix} {
	font-size: 20px;
}
.icon-text-style{
	width: 100%;
	height: 472rpx;
	display: flex;
	justify-content: center;
	color: #333333;
	font-family: PingFangSC-Regular, sans-serif;
	.img-style{
		display: block;
		margin: 0 auto;
		margin-top: 120rpx;
		margin-bottom: 42rpx;
	}
	.text-style{
		display: block;
		font-size: 36rpx;
		line-height: 50rpx;
		text-align: center;
		font-weight: Regular;
		letter-spacing: 0.48rpx;
	}
}
</style>
