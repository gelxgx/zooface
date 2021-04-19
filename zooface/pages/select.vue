<template>
	<view style="background-color: #FFFFFF;">
		<view>
			<image :src="keyAnimal" class="dialog" ></image>
			<view class="dialog-text">Hi!你想变成什么动物呢?</view>
		</view>
		<view class="main">
			<uni-grid :column="3" :show-border="false" :highlight="false" :square="false" @change="change">
				<uni-grid-item v-for="(item, index) in data" :key="index" :index="index">
					<view class="grid-box" :style=" {'background-color' : item.color}" :class="{ gridboxborder: index + 1 == isClick }">
						<image :src="item.path"></image>
						<view class="got">
							<text>{{ item.name }}</text>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			
		</view>
		<view class="ok" @click="toindex">选好啦</view>
		<view v-if="pay_info.isPay=='1'" class="djright" @click="openOrder"><text>订单</text></view>
	</view>
</template>

<script>
	import amap from 'components/amap-wx.js'
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
export default {
	data() {
		return {
			keyAnimal: '',
			isClick:0,
			key:"55294fe77e0c1c57239280ccd3eed59c",
			amapPlugin:null,
			location: '',
			data: [
					{
					"name":'东北虎',
					"path":"http://img.zooseefun.net/select/dongbeihu.png",
					"color":"#f5e4ed",
					"en":"dongbeihu"
					},
				],
			pay_info:{isPay: '1', pay_amount: 1},
		}
	},
	onLoad() {
		this.pay_info = uni.getStorageSync("pay_info");
		this.keyAnimal = "http://img.zooseefun.net/select/kangaroo@2x.png"
		//this.data[1].path = "http://img.zooseefun.net/select/panda.png"
		this.isClick=1
		uni.setStorage({
			key:"animalPic",
			data:JSON.stringify(this.data[0])
		})
		// #ifdef MP-WEIXIN
		uni.showShareMenu()
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
							default:
							this.location="天津动物园"
								break;
						}
						uni.setStorageSync("location",this.location);
						uni.request({
							url:"https://faceback.zooseefun.net/zoo/data",
							data:{
								zooname : this.location
							},
							success: res =>{
								this.data = res.data.data;
							}
						});
					}
				})
			},
			})
			

		// #endif
	},
	components: {
		uniGrid,
		uniGridItem
	},
	methods: {
		openOrder:function(){
			let pages = getCurrentPages();
			let page = (pages[pages.length - 1]).route.split("/")[1];
			uni.redirectTo({
				url:"order?page="+page
			})
		},
		change(e) {
			let {
				index
			} = e.detail
			this.isClick=index+1;
			uni.setStorageSync("animalPic",JSON.stringify(this.data[index]))
		},
		toindex(){
			// #ifdef H5
			uni.redirectTo({
				url:"main"
			})
			// #endif
			// #ifdef MP-WEIXIN
			uni.redirectTo({
				url: 'mpmain'
			});
			// #endif

		}
	}
}
</script>

<style>
.main {
	margin: 110upx auto 0;
	flex-direction: column;
	padding: 20upx;
	overflow: scroll;
	height: 700upx;
}
/*
.main scroll-view{
	height: 700upx;
	overflow:
}
*/
.dialog {
	width: 117upx;
	height: 160upx;
	margin-top: 52upx;
	margin-left: 125upx;
	vertical-align: middle;
}

.dialog-text {
	background: url('http://img.zooseefun.net/select/dialog@2x.png') no-repeat;
	background-size: 100% 100%;
	width: 360upx;
	height: 116upx;
	margin-top: 60upx;
	position: absolute;
	display: inline;
	color: #ffffff;
	font-size: 25upx;
	text-align: center;
	line-height: 120upx;
}

.grid-box {
	width: 200upx;
	height: 200upx;
	margin: 0 auto;
	margin-bottom: 30upx;
	text-align: center;
	line-height: 190upx;
	
	border-radius:50%;
	box-shadow:0 0 15upx 5upx #eceded;
}

.grid-box image {
	width: 160upx;
	height: 160upx;
	display: inline-block;
	vertical-align: middle;
}
.gridboxborder {
	background: url('http://img.zooseefun.net/select/can.png') no-repeat;
	background-size: 100% 100%;
	width: 200upx;
	height: 200upx;
}
.got {
	background-color: #f7e160;
	width: 76upx;
	height: 77upx;
	position: absolute;
	top: -16upx;
	left: 10upx;
	z-index: 999;
	font-size: 20upx;
	line-height: 75upx;
	text-align: center;
	color: #6a5d50;
	border-radius: 50%;
	box-shadow: 0 0 15upx 5upx rgba(0, 0, 0, 0.15);
}
.ok {
	background: url('http://img.zooseefun.net/select/button@2x.png') no-repeat;
	background-size: 100% 100%;
	width: 537upx;
	height: 127upx;
	margin: 0 auto;
	text-align: center;
	line-height: 120upx;
	color: #ffffff;
}
/* #ifdef MP-WEIXIN */
html,
body {
	margin-top: 150upx !important;
	position: fixed;
}
.main {
	margin: 80upx auto 0 !important;
	flex-direction: column;
	padding: 20upx;
}
/* #endif */
</style>
