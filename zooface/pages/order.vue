<template>
	<view>
		<view class="top"><s-switch @switchValue="getSwitchValue" :defaultValue="0" :switchList="arr"></s-switch></view>
		<scroll-view style="position: absolute;top:300upx;bottom: 0;overflow: auto;width: 100%;" scroll-y="true">
			<view class="item" v-for="(i, index) in datas" :key="index">
				<view style="float: left;"><image mode="aspectFit" class="img" :src="'https://faceback.zooseefun.net' + i.animalhuman" @click="previewImage(i.animal,i.animalhuman)"></image></view>
				<view style="float: right;" class="itemtext">
					<view>
						<text>取照码</text>
						<text style="float: right;color: #81cbd5;">{{ i.photocode }}</text>
					</view>
					<view style="margin-top: 31upx;">
						<text>取照点</text>
						<text style="float: right;color: #81cbd5;">{{i.location}}</text>
					</view>
					<view v-show="i.status === 0">
						<button :class="{share: true, outdated_btn: (!i.isoperate), normal_btn: i.isoperate}" @click="scan(i.photocode, i.isoperate)">
							<image src="http://img.zooseefun.net/mpresult/scan.png"></image>
							<text style="padding-left: 5px;">扫码取照</text>
						</button>
						<text style="float: right;color: #f0a275;margin-top: 65upx;">退款</text>
					</view>
					<view v-show="i.status === 1">
						<button :class="{download: true, outdated_btn: (!i.isoperate), normal_download_btn: i.isoperate}" @click="download(i.animal, i.animalhuman, i.isoperate)">
							<image src="http://img.zooseefun.net/order/downloadicon.png"></image>
							<text style="padding-left: 5px;">下载图片</text>
						</button>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="djleft" @click="back"><text>返回</text></view>
	</view>
</template>

<script>
import sswitch from '@/components/s-switch/s-switch.vue';
export default {
	data() {
		return {
			path: 'https://faceback.zooseefun.net',
			arr: [
				{
					key: 0,
					value: '未取件'
				},
				{
					key: 1,
					value: '已取件'
				}
			],
			datas: [],
			use: [],
			nouse: [],
			page: ''
		};
	},
	onLoad: function(option) {
		this.page = option.page;
		// this.$nextTick(function(){
		uni.request({
			url: 'https://faceback.zooseefun.net/order/getOrders',
			data: {
				openid: uni.getStorageSync('openid')
			},
			success: res => {
				for (let v = 0; v < res.data.length; v++) {
					if (res.data[v].status === 0) {
						this.nouse.push(res.data[v]);
					} else {
						this.use.push(res.data[v]);
					}
				}
				this.datas = this.nouse;
			}
		});
		// })
	},
	methods: {
		previewImage(animal,animalhuman){
			uni.previewImage({
				urls:[this.path+animal,this.path+animalhuman]
			})
		},
		download(animal,animalhuman, flag){
			if (!flag) return;
			uni.showLoading({
				title: '正在保存'
			});
			console.log(11);
			this.down(this.path+animal);
			this.down(this.path+animalhuman);
		},
		down(path){
			uni.getSetting({
				success(res) {
					console.log(res);
					if (!res.authSetting['scope.writePhotosAlbum']) {
						console.log('未授权');
						uni.hideLoading();
						uni.authorize({
							scope: 'scope.writePhotosAlbum',
							success() {
								console.log('授权成功');
								uni.showLoading({
									title: '正在保存'
								});
								uni.downloadFile({
									url: path,
									success: res => {
										console.log('下载' + res);
										if (res.statusCode === 200) {
											uni.saveImageToPhotosAlbum({
												filePath: res.tempFilePath,
												success: function() {
													uni.showToast({
														icon: 'none',
														title: '保存成功'
													});
													uni.hideLoading();
												},
												fail: function() {
													uni.showToast({
														icon: 'none',
														title: '保存失败'
													});
													uni.hideLoading();
												}
											});
										}
									}
								});
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '用户拒绝授权'
								});
								uni.hideLoading();
							}
						});
					} else {
						console.log('已授权');
						console.log(path);
						uni.downloadFile({
							url: path,
							success: res => {
								console.log(res);
								if (res.statusCode === 200) {
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: function() {
											uni.showToast({
												icon: 'none',
												title: '保存成功'
											});
											uni.hideLoading();
										},
										fail: function() {
											uni.showToast({
												icon: 'none',
												title: '保存失败'
											});
											uni.hideLoading();
										}
									});
								}
							},
							fail: () => {
								uni.showToast({
									icon: 'none',
									title: '保存失败'
								});
								uni.hideLoading();
							}
						});
					}
				}
			});
		},
		scan(codes, flag) {
			if (!flag) return;
			let code = codes;
			console.log(code);
			uni.scanCode({
				onlyFromCamera: true,
				success: function(res) {
					console.log(res);
					let printcode = res.result.split('code=')[1];
					uni.redirectTo({
						url: 'print?code=' + printcode + '&img_code=' + code
					});
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				}
			});
		},
		getSwitchValue: function(e) {
			if (e.key === 0) {
				this.datas = this.nouse;
			} else {
				this.datas = this.use;
			}
		},
		back() {
			uni.redirectTo({
				url: this.page
			});
		}
	}
};
</script>

<style>
.share {
	width: 227upx;
	height: 87upx;
	margin-top: 40upx;
	text-align: center;
	color: #ffffff;
	line-height: 87upx;
	float: left;
	font-size: 20upx;
	border: none;
	margin-left: -5upx;
}

.outdated_btn{
	background: url('http://img.zooseefun.net/order/btn2.png') no-repeat;
	background-size: 100% 100%;
}
.normal_btn{
	background: url('http://img.zooseefun.net/order/btn.png') no-repeat;
	background-size: 100% 100%;
}
.normal_download_btn{
	background: url('http://img.zooseefun.net/order/downloadbtn.png') no-repeat;
	background-size: 100% 100%;
}
.share:after {
	border: none !important;
}
.share image {
	width: 32upx;
	height: 29upx;
	vertical-align: middle;
}
.download {
	width: 227upx;
	height: 87upx;
	margin-top: 40upx;
	text-align: center;
	color: #ffffff;
	line-height: 87upx;
	float: left;
	font-size: 20upx;
	border: none;
	margin-left: -5upx;
}
.download:after {
	border: none !important;
}
.download image {
	width: 32upx;
	height: 29upx;
	vertical-align: middle;
}
.top {
	margin-top: 30upx;
}
.s-switch-selected {
	background: url('http://img.zooseefun.net/order/switch.png') no-repeat !important;
	background-size: 100% 100% !important;
}
html,
body {
	padding-top: 130upx !important;
	position: fixed;
}
.item {
	width: 100%;
	height: 275upx;
	border-bottom: 7upx solid #eaecef;
}
.img {
	width: 332upx;
	height: 214upx;
	background-color: #eaecef;
	margin-top: 30upx;
	margin-left: 41upx;
}
.itemtext {
	font-size: 24upx;
	margin-top: 32upx;
	margin-right: 40upx;
	width: calc(100vw - 450upx);
}
page {
	box-sizing: border-box;
}
</style>
