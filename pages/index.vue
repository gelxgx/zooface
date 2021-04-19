<template>
	<view :style="{background: 'url('+bg+')'+ 'no-repeat; background-size: 100% 100%;position: absolute;width: 100%;height: 100%;' }" class="content">
		<!-- #ifdef MP-WEIXIN -->
		<view class="location">
			<image src="http://img.zooseefun.net/location.png"></image>
			<text>{{ location }}</text>
		</view>
		<!-- <view v-if="pay_info.isPay=='1'" class="djright" @click="openOrder"><text>订单</text></view> -->
		<!-- #endif -->
		<view class="dialog"><image src="http://img.zooseefun.net/dialog-text@2x.png"></image></view>
		<view style="text-align: center;" class="button" @click="go()">
			<view>
				<image class="camera" src="http://img.zooseefun.net/camera@2x.png" />
				<text>去看看</text>
			</view>
		</view>
		<view style="text-align: center;font-size: 30upx;">
			<checkbox-group @change="check">
				<checkbox color="#ee9260" value="" :checked="checked" style="transform: scale(0.7);"></checkbox>
				<text style="color: #FFFFFF;">我已阅读并同意</text>
				<text style="color:#ee9260 ;" @click="xieyi()">《用户协议》</text>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	import amap from 'components/amap-wx.js'
export default {
	data() {
		return {
			pay_info:{isPay: '1', pay_amount: 1},
			bg:'',
			checked: false,
			location: '',
			key:"55294fe77e0c1c57239280ccd3eed59c",
			amapPlugin:null
		};
	},
	onLoad(option) {
		
		String.prototype.bool = function() {
			return /^true$/i.test(option.check);
		};
		this.checked = 'true'.bool();
		// #ifdef MP-WEIXIN
		uni.showShareMenu();
		uni.authorize({
			scope:"scope.userLocation",
			success:()=> {
				this.amapPlugin=new amap.AMapWX({
					key:this.key
				})
				this.amapPlugin.getRegeo({
					success:(data)=>{
						let address=data[0].regeocodeData.addressComponent
						console.log(address)
						let province=address.province;
						let city =address.city;
						let districe =address.district;
						switch (province) {
							case '天津市':
								if (districe === '南开区') {
									this.location = '天津动物园';
								}else{
									this.location="天津动物园"
								}
								break;
							case '重庆市':
								if (districe === '永川区') {
									this.location = '重庆野生动物园';
								}else{
									this.location="天津动物园"
								}
								break;
							case '云南省':
								if (city === '昆明市') {
									if (districe === '盘龙区') {
										this.location = '云南野生动物园';
									}else{
										this.location="天津动物园"
									}
								}else{
									this.location="天津动物园"
								}
								break;
							case '北京市':
								if (districe === '西城区') {
									this.location = '北京动物园';
								}else{
									this.location="天津动物园"
								}
								break;
							case '江苏省':
								if (city === '盐城市' && district == '大丰区')
									that.location="盐城大丰港动物园";
								else 
									that.location = "天津动物园";
								break;							
							default:
							this.location="天津动物园";
							break;
						}
						uni.setStorageSync("location",this.location);
						
						uni.request({
							url:"https://faceback.zooseefun.net/zoo/index",
							data: {zooname : this.location},
							success: res =>{
								console.log(res.data);
								this.bg = res.data.bgpic;
								this.pay_info = {
									isPay:res.data.isPay, 
									pay_amount: res.data.pay_amount
								}
								uni.setStorageSync("pay_info", {isPay: this.pay_info.isPay, pay_amount: this.pay_info.pay_amount});
							}
						});
						
					}
				})
			},
			fail:()=>{
				console.log(111)
			}
		});
		

		
		// #endif
	},
	mounted() {
		console.log(11)
	},
	methods: {
		check: function(e) {
			this.checked = !this.checked;
		},
		go: function() {
			if (!this.checked) {
				uni.showToast({
					title: '请勾选用户协议',
					icon: 'none'
				});
			} else {
				uni.redirectTo({
					url: 'select'
				});
			}
		},
		xieyi: function() {
			uni.redirectTo({
				url: 'prot'
			});
		},
		openOrder: function() {
			let pages = getCurrentPages();
			let page = pages[pages.length - 1].route.split('/')[1];
			uni.redirectTo({
				url: 'order?page=' + page
			});
		}
	}
};
</script>

<style>
/* #ifndef MP-WEIXIN */
uni-checkbox .uni-checkbox-input {
	width: 20upx !important;
	height: 20upx !important;
}

.content {
/* 	background: url('http://img.zooseefun.net/bg@2x.png') no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 100%;
	height: 100%; */
}

.dialog {
	width: 498upx;
	height: 355upx;
	margin-top: 90%;
	margin-left: 9upx;
	background: url('http://img.zooseefun.net/dialog@2x.png') no-repeat;
	background-size: 100% 100%;
}

.dialog image {
	width: 284upx;
	height: 108upx;
	margin-top: 121upx;
	margin-left: 81upx;
}

.button {
	border: none;
	background: url('http://img.zooseefun.net/button@2x.png') no-repeat;
	background-size: 100% 100%;
	width: 538upx;
	height: 127upx;
	margin: 0 auto;
}

.button image {
	margin-right: 18upx;
	vertical-align: middle;
}

.button text {
	color: #ffffff;
	font-size: 30upx;
}

.camera {
	width: 59upx;
	height: 52upx;
}
.button view {
	padding-top: 30upx;
}
/* #endif */

/* #ifdef MP-WEIXIN */
.location {
	position: absolute;
	top: 8%;
	left: 30upx;
	color: #ee9260;
	line-height: 52upx;
	font-size: 30upx;
	font-weight: 400;
}
.location image {
	width: 48upx;
	height: 52upx;
	vertical-align: middle;
}

.location text{
	font-weight: bold;
}

uni-checkbox .uni-checkbox-input {
	width: 20upx !important;
	height: 20upx !important;
}

.content {
	background: url('http://img.zooseefun.net/bg@2x.png') no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 100%;
	height: 100%;
}

.dialog {
	width: 498upx;
	height: 355upx;
	margin-top: 700upx;
	margin-left: 9upx;
	background: url('http://img.zooseefun.net/dialog@2x.png') no-repeat;
	background-size: 100% 100%;
}

.dialog image {
	width: 284upx;
	height: 108upx;
	margin-top: 121upx;
	margin-left: 81upx;
}

.button {
	border: none;
	background: url('http://img.zooseefun.net/button@2x.png') no-repeat;
	background-size: 100% 100%;
	width: 538upx;
	height: 127upx;
	margin: 0 auto;
}
.button view {
	height: 127upx;
	line-height: 127upx;
}
.button image {
	/* margin-top: 20upx; */
	margin-right: 18upx;
	vertical-align: middle;
}

.button text {
	color: #ffffff;
	font-size: 30upx;
}

.camera {
	width: 59upx;
	height: 52upx;
}
/* #endif */
</style>
