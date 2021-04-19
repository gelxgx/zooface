<template>
	<view style="height: 100%;">
		<view style="height: 455upx;width: 672upx;margin: 0 auto;">
			<image class="img" mode="aspectFit" :src="animal" @click="previewImage()"></image>
		</view>
		<view class="info">
			<view style="border-bottom: 1px solid #ccc;height: 123upx;line-height: 123upx;">
				<image src="http://img.zooseefun.net/mpresult/code.png" ></image>
				<text>取照码</text>
				<text style="float: right;color: #e48a5c;font-weight: bold;font-size: 50upx;">{{code}}</text>
			</view>
			<view style="height: 122upx;line-height: 122upx;">
				<image src="http://img.zooseefun.net/mpresult/location.png"></image>
				<text>取照点</text>
				<view style="float: right;">
				<text style="color: #e48a5c;font-weight: bold;">{{location}}</text>
				<text style="color: #e48a5c;font-size: 20upx;">详情</text>
				</view>
			</view>
		</view>
		<view>
			<view class="again" @click="again">
				<image src="http://img.zooseefun.net/mpresult/back.png"></image>
				<text style="margin-left: 20upx;">再玩一次</text></view>
			<view class="scan" @click="scan">
				<image src="http://img.zooseefun.net/mpresult/scan.png"></image>
				<text style="margin-left: 20upx;">扫码取件</text></view>
		</view>
		<view v-if="pay_info.isPay=='1'" class="djright" @click="openOrder">
			<text>订单</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pay_info:{isPay: '1', pay_amount: 1},
			code:"1111",
			location:"111",
			animal:"",
			path: 'https://faceback.zooseefun.net',
		};
	},
	onLoad() {
		
		this.pay_info = uni.getStorageSync("pay_info");
		console.log(uni.getStorageSync("pay"))
		let data=JSON.parse(uni.getStorageSync("pay"))
		this.code=data.code
		this.animal="https://faceback.zooseefun.net"+data.animal
		this.location=uni.getStorageSync("location")
	},
	methods:{
		previewImage(){
			uni.previewImage({
				urls:[this.animal],
				success(res) {
					console.log(res)
				},
				fail(res) {
					console.log(res)
				}
			})
		},
		scan() {
			let code=this.code
			uni.scanCode({
			    onlyFromCamera: true,
			    success: function (res) {
					console.log(res)
					let printcode=res.result.split("code=")[1]
					uni.redirectTo({
						url:"print?code="+printcode+"&img_code="+code
					})
			        console.log('条码类型：' + res.scanType);
			        console.log('条码内容：' + res.result);
			    }
			});
		},
		again: function() {
			uni.redirectTo({
				url: 'select'
			});
		},
		openOrder:function(){
			let pages = getCurrentPages();
			let page = (pages[pages.length - 1]).route.split("/")[1];
			uni.redirectTo({
				url:"order?page="+page
			})
		},
	}
};
</script>

<style>
	.djright{
		bottom: 20%!important;
	}
html,
body {
	padding-top: 135upx !important;
	/* position: fixed; */
}
.img{
	height: 455upx;
	width: 672upx;
	margin: 0 auto;
}
.info{
	width: 658upx;
	height: 247upx;
	margin: 100upx auto;
	border: 2px solid #ccc;
}
.info image{
	width: 54upx;
	height: 57upx;
	vertical-align: middle;
	
}
.again {
	background: url('http://img.zooseefun.net/mpresult/againbtn.png') no-repeat;
	background-size: 100% 100%;
	width: 334upx;
	height: 122upx;
	margin-top: 10upx;
	text-align: center;
	color: #ffffff;
	line-height: 110upx;
	float: left;
	font-size: 30upx;
	margin-left: 38upx;
}
.again image{
	width: 51upx;
	height: 39upx;
	vertical-align: middle;
}
.scan {
	background: url('http://img.zooseefun.net/mpresult/btn.png') no-repeat;
	background-size: 100% 100%;
	width: 334upx;
	height: 122upx;
	margin-top: 10upx;
	text-align: center;
	color: #ffffff;
	line-height: 110upx;
	float: right;
	font-size: 30upx;
	margin-right: 30upx;
}
.scan image{
	width: 43upx;
	height: 41upx;
	vertical-align: middle;
}
</style>
