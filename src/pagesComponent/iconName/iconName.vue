<template>
	<view class="service">
		<view>
			<uni-title title="常用服务"/>
		</view>
		<view class="service-contant">
			<utp-icon-name 
				:src="item.iconPath" 
				fit="fill" 
				:iconName="item.iconName" 
				v-for="item in serviceIcons" 
				:key="item.id"
			/>
		</view>
	</view>
</template>

<script>
import uniTitle from "@dcloudio/uni-ui/lib/uni-title/uni-title.vue";
import utpIconName from '@/components/iconName/iconName'

const serviceIcons = [
	{iconPath: '../../static/images/serviceIcon/address@3x.png', iconName: '地址管理', id: 1001},
	{iconPath: '../../static/images/serviceIcon/help@3x.png', iconName: '帮助反馈', id: 1002},
	{iconPath: '../../static/images/serviceIcon/complaints@3x.png', iconName: '抵用券', id: 1003},
	{iconPath: '../../static/images/serviceIcon/personal_icon_door@3x.png', iconName: '手机开门', id: 1009},
	{iconPath: '../../static/images/serviceIcon/vouchers@3x.png', iconName: '投诉意见', id: 1004},
	{iconPath: '../../static/images/serviceIcon/frinend@3x.png', iconName: '邀请好友', id: 1005},
	{iconPath: '../../static/images/serviceIcon/personal_icon_pintuan@3x.png', iconName: '我的拼团', id: 1006},
	{iconPath: '../../static/images/serviceIcon/vip@3x.png', iconName: '会员码', id: 1007},
	{iconPath: '../../static/images/serviceIcon/wish@3x.png', iconName: '心愿单', id: 1008},
]

export default {
	components:{
		utpIconName,
		uniTitle
	},
	
	data() {
		return {
			serviceIcons
		}
	},
}
</script>

<style lang="scss">
	.service{
		.service-contant{
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
