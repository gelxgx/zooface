<template>
	<view style="background-color: #FFFFFF;">
		<view class="upload">
			<view class="bear" v-show="usePhoto">
				<image src="http://img.zooseefun.net/main/camera.png"></image>
				<text>上传清晰照片</text>
			</view>
			<avatar
				selWidth="650upx"
				v-show="usePhoto"
				selHeight="900upx"
				@upload="upload"
				:avatarSrc="usersrc"
				avatarStyle="width: 100%; height: 994upx; border-radius: none;"
			></avatar>
		</view>
		<view class="dialog">
			<image :src="loadPic" style="width: 120upx;height: 120upx;"></image>
			<view class="dialog-text">变成动物的你，是什么样子呢</view>
		</view>
	</view>
</template>

<script>
import avatar from '@/components/yq-avatar/yq-avatar.vue';
import { compressImage } from '@/utils/file.js';
export default {
	data() {
		return {
			loadPic: '',
			usePhoto: true,
			usersrc: '',
			size: {
				width: 640,
				height: 720
			},
			data: {},
			text:""
		};
	},
	components: {
		avatar
	},
	onLoad() {
		let pic = JSON.parse(uni.getStorageSync('animalPic'));
		this.loadPic = pic.path;
		this.data = pic;
		// #ifdef MP-WEIXIN
		uni.showShareMenu()
		// #endif
	},
	methods: {
		upload: function(res) {
			console.log(res);
			this.usePhoto = true;
			this.usersrc = res.path;
			const usersrc = this.usersrc;
			uni.showToast({
				icon:"none",
				title:usersrc,
			})
			const name = this.data.en;
			uni.showLoading({
				mask: true,
				title: '上传中，请稍后',
				success() {
					console.log(usersrc)
					uni.uploadFile({
						url: 'http://faceback.zooseefun.net/image/web',
						formData: {
							name: name
						},
						filePath: usersrc,
						name: 'file',
						success: function(res) {
							if (res.statusCode === 200) {
								uni.hideLoading();
								let data = JSON.parse(res.data);
								console.log(data);
								if (data.code === 200) {
									uni.setStorage({
										key: 'data',
										data: JSON.stringify(data.data),
										success() {
											uni.redirectTo({
												url: 'result'
											});
										}
									});
								} else {
									uni.showToast({
										icon: 'none',
										title: data.msg,
										duration: 5000
									});
								}
							} else {
								uni.hideLoading();
								uni.showToast({
									icon: 'none',
									title: '上传失败，请重新再试',
									duration: 5000
								});
							}
						}
					});
				}
			});
		}
	}
};
</script>

<style>
.upload {
	background: url('http://img.zooseefun.net/main/bg.png') no-repeat;
	background-size: 100% 100%;
	height: 994upx;
	position: relative;
}

.bear {
	background: url('http://img.zooseefun.net/main/bgbear.png') no-repeat;
	background-size: 100% 100%;
	width: 713upx;
	height: 715upx;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	bottom: 0;
}

.bear image {
	width: 105upx;
	height: 94upx;
	margin-top: 222upx;
	margin-left: 202upx;
	float: left;
}

.bear text {
	color: #ffffff;
	float: left;
	line-height: 540upx;
	margin-left: 21upx;
	font-size: 30upx;
}

.dialog image {
	margin-top: 60upx;
	margin-left: 100upx;
	float: left;
}

.dialog-text {
	background: url('http://img.zooseefun.net/main/dialog.png') no-repeat;
	background-size: 100% 100%;
	width: 410upx;
	height: 116upx;
	color: #ffffff;
	font-size: 25upx;
	text-align: center;
	line-height: 110upx;
	float: left;
	margin-top: 65upx;
}
/* #ifdef MP-WEIXIN */
	html,body{
		margin-top: 150upx!important;
	}
	/* #endif */
</style>
