<template>
	<view :class="perfix" class="icon-text-style">
		<image
			:src="src" 
			:mode="imageMode"
			class="img-style"
		></image>
		<text class="text-style">{{iconName}}</text>
	</view>
</template>

<script>
	const perfix = 'utp-icon-text'
	
	const toPx = v => typeof v === 'number' ? `${v}px` : v
	
	export default {
		name: 'utpIconName',
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
	display: inline-block;
	width: 186rpx;
	color: #666666;
	font-family: PingFangSC-Regular, sans-serif;
	.img-style{
		display: block;
		width: 88rpx;
		height: 88rpx;
		margin: 0 auto;
		margin-top: 42rpx;
		margin-bottom: 6rpx;
	}
	.text-style{
		display: block;
		font-size: 24rpx;
		line-height: 34rpx;
		text-align: center;
		font-weight: Regular;
	}
	
	
}
</style>
