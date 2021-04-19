<template>
	<view>
		<view class="top">
			<s-switch @switchValue="getSwitchValue" :defaultValue="0" :switchList="arr"></s-switch>
		</view>
		<view class="main">
			<image :src="path" mode="aspectFit"></image>
		</view>
		<view>
			<view style="text-align: center;margin-top: 20upx;font-weight: 800;">
				<text>取照码：<text style="color:#ec8d5c ;font-size: 50upx;">{{code}}</text></text>
			</view>
			<view class="again" @click="again">
				<text style="margin-left: 50upx;">再玩一次</text>
			</view>
		</view>
	</view>
</template>

<script>
	import sswitch from '@/components/s-switch/s-switch.vue'
	export default {
		data() {
			return {
				path: "",
				arr: [{
						key: 0,
						value: "动物图像"
					},
					{
						key: 1,
						value: "对比图像"
					}
				],
				animal_pic: "",
				animal_pic_co: "",
				code:""
			}
		},
		components: {
			sswitch
		},
		onLoad() {
			uni.getStorage({
				key: "data",
				success: (res) => {
					const data = JSON.parse(res.data)
					this.animal_pic = data.animal;
					this.animal_pic_co = data.animal_human
					this.code=data.code;
					this.path = "http://faceback.zooseefun.net" + this.animal_pic
				},
				fail() {
					uni.showToast({
						icon: "none",
						title: "无数据"
					})
				}
			})
			// #ifdef MP-WEIXIN
			uni.showShareMenu()
			// #endif
		},
		methods: {
			getSwitchValue: function(e) {
				console.log(e)
				if (e.key === 0) {
					this.path = "http://faceback.zooseefun.net" + this.animal_pic
				} else if (e.key === 1) {
					this.path = "http://faceback.zooseefun.net" + this.animal_pic_co
				}
				console.log(this.path)
			},
			again: function() {
				uni.redirectTo({
					url: "select"
				})
			},
		}
	}
</script>

<style>
	.top {
		margin-top: 30upx;
	}

	.main image {
		width: 100%;
		height: 100%;
		/* width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%; */
	}

	.main {
		width: 752upx;
		height: 886upx;
		margin-top: 44upx;
		background-color: #D8D8D8;
	}

	.again {
		background: url('http://img.zooseefun.net/result/button.png') no-repeat;
		background-size: 100% 100%;
		width: 452upx;
		height: 165upx;
		margin-top: 10upx;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: #FFFFFF;
		line-height: 150upx;
	}
	/* #ifdef MP-WEIXIN */
	html,body{
		margin-top: 150upx!important;
	}
	/* #endif */
</style>
