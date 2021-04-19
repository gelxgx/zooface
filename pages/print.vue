<template>
	<view class="bg" :style="{height:height}">
		<view class="main">
		<input placeholder="请输入四位取照码" maxlength="4" class="code" :value="code" @input="input" />
		<view class="print"  @click="print()"></view>
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
			code: '',
			printcode:"",
			height:"",
			pay_info:{isPay: '1', pay_amount: 1},
		};
	},
	onLoad(option) {
		this.pay_info = uni.getStorageSync("pay_info");
		console.log(option)
		this.printcode=option.code
		this.code=option.img_code
		
	},
	created() {
		this.height=document.body.scrollHeight+"upx"
	},
	methods:{
		openOrder:function(){
			let pages = getCurrentPages();
			let page = (pages[pages.length - 1]).route.split("/")[1];
			uni.redirectTo({
				url:"order?page="+page
			})
		},
		print(){
			if(this.code===""){
				uni.showToast({
					icon:"none",
					title:'请输入取照码'
				})
				return;
			}
			uni.request({
			    url: 'https://faceback.zooseefun.net/scan/print', //仅为示例，并非真实接口地址。
			    data: {
			        code:this.printcode,
					img_code:this.code,
					openid:uni.getStorageSync("openid")
			    },
			    success: (res) => {
					if(res.data.code===500){
						uni.showToast({
							icon:"none",
							title:this.code+'取照码不存在',
						})
					}else if(res.data.code===200){
						console.log(11)
						uni.showLoading({
							title:"正在打印",
							mask:true
						})
					}
					
			        console.log(res.data);
			    }
			});
		},
		input:function(event){
			this.code=event.target.value
		}
	}
};
</script>

<style>
.bg {
	background: url('http://img.zooseefun.net/print/printbg.png') no-repeat;
	background-size: 100% 100%;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 100%;
}

/* #ifndef MP-WEIXIN */
.main{
	padding-top: 115%;
}
/* #endif */
.code {
	
	margin-left: auto;
	margin-right: auto;
	width: 403upx;
	height: 109upx;
	background-color: #ffffff;
	border: 1px solid #C0C0C0;
	border-radius: 20upx;
	text-align: center;
}
/* #ifdef MP-WEIXIN */
	.main{
		padding-top: 120%;
	}
/* #endif */
.print {
	background: url('http://img.zooseefun.net/print/print.png') no-repeat;
	background-size: 100% 100%;
	width: 208upx;
	height: 208upx;
	margin-left: auto;
	margin-right: auto;
	margin-top: 29upx;
}
page{
	height: 100%;
}
</style>
