<template>
	<!-- #ifdef MP-WEIXIN -->

	<view>
		<view class="ca">
			<camera @error="error()" flash="off" v-if="!hidden" style="width: 100%;height: 780upx;" :device-position="posi">
				<cover-image class="face" src="http://img.zooseefun.net/main_1/face.png"></cover-image>
			</camera>
			<image v-if="hidden" style="width: 100%;height: 780upx;" :src="usersrc"></image>
			<avatar @upload="upload1" ref="avatar"></avatar>
		</view>
		<view class="main">
			<image :src="loadPic" style="width: 120upx;height: 120upx;"></image>
			<view class="dialog-text">变成动物的你，是什么样子呢</view>
		</view>
		<view class="tools">
			<!-- <image class="album" @tap="album()" src="http://img.zooseefun.net/main_1/album.png"></image> -->
			<image class="album" @click="clk(0)" src="http://img.zooseefun.net/main_1/album.png"></image>
			<image v-if="cashow" @click="tackPhoto()" class="cam" src="http://img.zooseefun.net/main_1/camera.png"></image>
			<image @click="posis()" class="re" src="http://img.zooseefun.net/main_1/re.png"></image>
		</view>
		<!-- <kps-image-cutter @ok="ok" @cancel="oncancle" :url="cros" :fixed="false" :maxWidth="750" :maxHeight="780"></kps-image-cutter> -->
	<view v-if="pay_info.isPay=='1'" class="djright" @click="openOrder">
		<text>订单</text>
	</view>
	<w-loading text="化身动物中.." mask="true" click="true" ref="loading"></w-loading>
	</view>

	<!-- #endif -->
</template>

<script>
import kpsImageCutter from "@/components/ksp-image-cutter/ksp-image-cutter.vue";
import avatar from '@/components/yq-avatar/yq-avatar.vue'
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
			hidden: false,
			posi: 'front',
			cashow: true,
			cros:"",
			pay_info:{isPay: '1', pay_amount: 1}
			
		};
	},
	components: {
		kpsImageCutter,
		avatar
	},
	onLoad() {
		this.pay_info = uni.getStorageSync("pay_info");
		let pic = JSON.parse(uni.getStorageSync('animalPic'));
		this.loadPic = pic.path;
		this.data = pic;
		// #ifdef MP-WEIXIN
		uni.showShareMenu()
		// #endif
	},
	methods: {
		openOrder:function(){
			let pages = getCurrentPages();
			let page = (pages[pages.length - 1]).route.split("/")[1];
			uni.redirectTo({
				url:"order?page="+page
			})
		},
		clk(index){
			this.$refs.avatar.fChooseImg(index,{
				selWidth:"700upx",selHeight:"994upx"
			})
		},
		album() {
			this.usersrc=""
			this.hidden = true;
			uni.chooseImage({
				success:(res)=>{
					this.cros=res.tempFilePaths[0]
				}
			})
		},
		// ok(ev){
		// 	this.hidden = true;
		// 	this.cros=""
		// 	this.usersrc=ev.path 
		// 	this.$refs.loading.open()
		// 	this.upload(this.data.en, ev.path);
		// },
		oncancle(){
			this.cros=""
			this.hidden=false
		},
		error() {
			this.cashow = false;
		},
		posis() {
			if (this.posi == 'front') {
				this.posi = 'back';
			} else if (this.posi == 'back') {
				this.posi = 'front';
			}
		},
		tackPhoto() {
			const ctx = uni.createCameraContext();
			const name = this.data.en;
			console.log(name);
			//this.$refs.loading.open()
			ctx.takePhoto({
				quality: 'normal',
				success: res => {
					this.usersrc = res.tempImagePath;
					this.hidden = true;
					this.upload(name, res.tempImagePath);
				}
			});
			//this.$refs.loading.close()
		},
		upload(name, src) {
			this.$refs.loading.open()
			uni.uploadFile({
				url: 'https://faceback.zooseefun.net/image/',
				formData: {
					name: name,
					openid:uni.getStorageSync("openid"),
					location:uni.getStorageSync("location")
				},
				filePath: src,
				name: 'file',
				async: true,
				success: res => {
					if (res.statusCode === 200) {
						this.$refs.loading.close()
						let data = JSON.parse(res.data);
						console.log(data);
						if (data.code === 200) {
							uni.setStorage({
								key: 'data',
								data: JSON.stringify(data.data),
								success() {
									uni.redirectTo({
										url: 'mpresult'
									});
								}
							});
						} else {
							uni.showToast({
								icon: 'none',
								title: data.msg,
								duration: 5000
							});
							this.hidden = false;
						}
					} else {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: '上传失败，请重新再试',
							duration: 5000
						});
						this.hidden = false;
					}
				}
			});
		},
		upload1(res) {
			this.usersrc = res.path;
			this.hidden = true;
			//this.$refs.loading.open()
			uni.uploadFile({
				url: 'https://faceback.zooseefun.net/image/',
				formData: {
					name: this.data.en,
					openid:uni.getStorageSync("openid"),
					location:uni.getStorageSync("location")
				},
				filePath: this.usersrc,
				name: 'file',
				async: true,
				success: res => {
					if (res.statusCode === 200) {
						//this.$refs.loading.close()
						let data = JSON.parse(res.data);
						console.log(data);
						if (data.code === 200) {
							uni.setStorage({
								key: 'data',
								data: JSON.stringify(data.data),
								success() {
									uni.redirectTo({
										url: 'mpresult'
									});
								}
							});
						} else {
							uni.showToast({
								icon: 'none',
								title: data.msg,
								duration: 5000
							});
							this.hidden = false;
						}
					} else {
						//this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: '上传失败，请重新再试',
							duration: 5000
						});
						this.hidden = false;
					}
				}
			});
		}
	}
};
</script>

<style>
html,
body {
	margin-top: 140upx !important;
	position: fixed;
}
.face {
	width: 504upx;
	height: 504upx;
	margin-top: 154upx;
	margin-left: 124upx;
	margin-right: 124upx;
}
.main image {
	float: left;
	margin-top: 60upx;
	margin-left: 100upx;
}
.ca {
	width: 100%;
	height: 750upx;
	background-color: #c8c7cc;
}
.album {
	width: 139upx;
	height: 117upx;
	margin-right: 59upx;
	background: url('http://img.zooseefun.net/main_1/album.png') no-repeat;
	background-size: 100% 100%;
}
.cam {
	width: 199upx;
	height: 199upx;
}
.re {
	width: 120upx;
	height: 109upx;
	margin-left: 77upx;
}
.tools {
	float: left;
	margin: 30upx 79upx 0 79upx;
	width: 100%;
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
</style>
