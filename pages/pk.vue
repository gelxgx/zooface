<template>
	<view class="bg">
		<image class="pk" src="http://img.zooseefun.net/pk/pk.png"></image>
		<view class="animal">
			<image class="ani-pic" :src="pic"></image>
			<view class="ani-text">
				<view class="te">你的朋友变成了{{name}}，可爱程度超过了全网{{num}}%的用户，自豪的向你发出可爱颜值PK邀请</view>
			</view>
		</view>
		<button class="pk-btn" @click="go">应战</button>
		<view style="text-align: center;font-size: 30upx;">
			<checkbox-group @change="check">
				<checkbox color="#ee9260" value="" :checked="checked" style="transform: scale(0.7);" ></checkbox>
				<text style="color: #333333;">我已阅读并同意</text><text style="color:#ee9260 ;" @click="xieyi()">《用户协议》</text>
			</checkbox-group>
		</view> 
		<view v-if="pay_info.isPay=='1'" class="djright" @click="openOrder">
			<text>订单</text>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				checked: false,
				pic:"",
				num:0,
				name:'',
				option:{},
				pay_info:{isPay: '1', pay_amount: 1},
			}
		},
		onLoad(option) {
			this.pay_info = uni.getStorageSync("pay_info");
			console.log(option)
			String.prototype.bool=function(){
				return (/^true$/i).test(option.check)
			}
			this.checked="true".bool()
			this.option=option
			console.log(option.pic===""||option.pic===null)
			if(option.hasOwnProperty("data")){
				this.option=JSON.parse(option.data)
			}
			// option={
			// 	name:"大熊猫",
			// 	num:"82",
			// 	pic:"http://img.zooseefun.net/select/panda.png"
			// }
			this.pic=this.option.pic;
			this.name=this.option.name;
			this.num=this.option.num;
			console.log(this.name);
			uni.showShareMenu()
		},
		methods: {
			openOrder:function(){
				let pages = getCurrentPages();
				let page = (pages[pages.length - 1]).route.split("/")[1];
				uni.redirectTo({
					url:"order?page="+page
				})
			},
			check:function(e){
				this.checked=!this.checked
			},
			go: function() {
				if (!this.checked) {
					uni.showToast({
						title: "请勾选用户协议",
						icon: "none"
					})
				} else {
					uni.redirectTo({
						url: 'select'
					})
				}
			}, 
			xieyi:function(){
				uni.redirectTo({
					url:"prot?u=pk&data="+JSON.stringify(this.option),
				})
			}
		}
	}
</script>

<style>
	html,
	body {
		position: fixed;
		height: 100%;
	}
	page{
		height: 100%;
	}
	.bg{
		background: url("http://img.zooseefun.net/pk/bg.png") no-repeat;
		background-size: 100% 100%;
		height: 100%;
	}
	.pk{
		width: 397upx;
		height: 283upx;
		margin-top: 75%;
		margin-left: 40upx;
	}
	.animal{
		margin-top: 30upx;
		margin-left: 62upx;
		margin-bottom: 20upx;
	}
	.ani-pic{
		width: 160upx;
		height: 160upx;
		float: left;
	}
	.ani-text{
		background: url('http://img.zooseefun.net/pk/log.png') no-repeat;
		background-size: 100% 100%;
		width: 475upx;
		height: 165upx;
		float: left;
		color: #F8F8F8;
		font-size: 20upx;
	}
	.te{
		width: 360upx;
		height: 91upx;
		margin-top: 30upx;
		margin-left: 75upx;
	}
	.pk-btn{
		margin-top: 40upx;
		margin-left: auto;
		margin-right: auto;
		background: url('http://img.zooseefun.net/pk/btn.png') no-repeat;
		background-size: 100% 100%;
		width: 538upx;
		height: 126upx;
		line-height: 126upx;
		color: #FFFFFF;
		font-size: 30upx;
	}
	.pk-btn:after{
		border: none!important;
	}
</style>
