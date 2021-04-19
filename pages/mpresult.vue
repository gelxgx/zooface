<template>
	<view>
			<view class="top" ><s-switch @switchValue="getSwitchValue" :defaultValue="0" :switchList="arr"></s-switch></view>
			<view class="main" >
				<image class="again" src="http://img.zooseefun.net/mpresult/again.png" @click="again"></image>
				<canvas canvas-id="myCanvass" class="canvas"></canvas>
				<canvas canvas-id="myCanvas" class="canvas"></canvas>
				<image :src="path" mode="aspectFit"></image>
				<image class="again" src="http://img.zooseefun.net/mpresult/again.png" @click="again"></image>
				<image class="more" src="../static/more.png" @click="more"></image>
				<image
					src="../static/downLoad.png"
					style="width: 96upx;height: 96upx;position: absolute;top:130rpx;right: 13upx;"
					@click="download" v-if="show" :class="show==true?'animated bounceIn':''"
				></image>
				<image class="modify" v-if="show" :class="show==true?'animated bounceIn':''" src="http://img.zooseefun.net/mpresult/modify.png" @click = "()=>{flag = true; oldmotto=motto;}"></image>
				<image class="DIY" v-if="show" :class="show==true?'animated bounceIn':''" src="../static/DIY.png" @click="DIY"></image>
			</view>
			<scroll-view scroll-x="true" scroll-left="120" style="white-space: nowrap;margin-top: 30upx;">
				<image @click="btn(i, index)" id="item" v-for="(i, index) in array" :key="index" :src="i" class="img" :class="{ imgbtn: index === active }"></image>
			</scroll-view>
			<view style="width: 100%;height: 166upx;margin-top: 30upx;margin-left: 43upx;">
				<image :src="loadPic" style="width: 120upx;height: 120upx;float: left;"></image>
				<view class="log animated jackInTheBox">
					<view class="te">WOW,变成动物的你可爱程度超过了{{ num }}%的用户，快去跟你的好友PK一下</view>
				</view>
				<button class="go" open-type="share"></button>
			</view>
			<!-- <view style="margin-top: 20upx;">
				<view class="again" @click="again"><text style="margin-left: 50upx;">再玩一次</text></view>
				<view v-if="pay_info.isPay=='1'" class="money">
					<span>￥</span>
					<span>{{pay_info.pay_amount / 100}}</span>
				</view>
				<button v-if="pay_info.isPay=='1'" class="share" @click="pay">
					<image src="http://img.zooseefun.net/mpresult/wechatpay.png"></image>
					<text style="padding-left: 5px;">去支付</text>
				</button>
			</view>
			<view v-if="pay_info.isPay=='1'" class="djright" @click="openOrder"><text>订单</text></view> -->
			
			<!--view class = "box" v-show="flag" style="opacity: 0.75; background-color: #FFFFFF;"> 
			</view>
			<view class = "box" v-show="flag" style="opacity: 1;">
				<view class = 'text' @click.stop="">写下你的纪念吧～</view>
				<input class = "inputbox" type="text" value=""  v-model="motto" maxlength="10" @click.stop="" > </input>
				<image class = "submit"  src="http://img.zooseefun.net/mpresult/submit.png" @click.stop="setmotto"> </image> 
			</view-->
			<cat-signature canvasId="sign"  @close="()=>flag=false" @save="setmotto" :visible="flag"/>
			
		</view>

</template>

<script>
import sswitch from '@/components/s-switch/s-switch.vue';
import catsignature from "@/components/cat-signature/cat-signature.vue";

export default {
	data() {
		return {
			pay_info:{isPay: '1', pay_amount: 10},
			oldmotto: '',
			motto: '',
			flag: false,
			path: '',
			arr: [
				{
					key: 0,
					value: '动物图像'
				},
				{
					key: 1,
					value: '对比图像'
				}
			],
			show:false,
			animal_pic: '',
			animal_pic_co: '',
			loadPic: '',
			num: 0,
			name: '',
			code: '',
			array: [],
			active: 0,
			animal_pic_back: '',
			animal_pic_co_back: '',
			key: 0,
			pullAnimal: '',
			pullAnimalHuman: '',
			location:''
		};
	},
	components: {
		sswitch,
		catsignature
	},
	onShareAppMessage(res) {
		return {
			title: '我在zooface里变成动物后可爱度打败了' + this.num + '%的人，快来挑战我吧~',
			path: '/pages/pk?num=' + this.num + '&pic=' + this.loadPic + '&name=' + this.name
		};
	},
	onReady() {
		this.pay_info = uni.getStorageSync("pay_info");
		//测试配置模板
		this.location = uni.getStorageSync("location");	
		uni.request({
			url:"https://faceback.zooseefun.net/zoo/ampic",
			data: {zooname : this.location},
			success: res =>{
				this.array = res.data.ampic;
				this.array.unshift('../static/0.png');
				
				for (let v = 1; v < this.array.length; v++) {
					uni.downloadFile({
						url: Object.values(this.array[v])[0],
						success: res=>{
							this.array[v] = res.tempFilePath;
						}
					});
				}
				console.log(this.array);
			}
		});
		
		uni.getStorage({
			key: 'data',
			success: res => {
				const data = JSON.parse(res.data);
				this.animal_pic = data.animal;
				this.animal_pic_co = data.animal_human;
				this.animal_pic_back = data.animal;
				this.animal_pic_co_back = data.animal_human;
				this.code = data.code;
				this.path = 'https://faceback.zooseefun.net' + this.animal_pic;
			
				this.draw('https://faceback.zooseefun.net' + data.animal, '');
				this.draw2('https://faceback.zooseefun.net' + data.animal_human, '');
			},
			fail() {
				uni.showToast({
					icon: 'none',
					title: '无数据'
				});
			}
		});
		
		
		let pic = JSON.parse(uni.getStorageSync('animalPic'));
		console.log(pic);
		this.loadPic = pic.path;
		this.name = pic.name;
		uni.showShareMenu();
		this.num = Math.floor(Math.random() * (1 - 100) + 100);
		console.log(this);
		
	},
	methods: {
		draw(path, path2) {
			//let photoframe
			uni.showLoading({title:'生成中...'});
			var ctx = uni.createCanvasContext('myCanvass'); //绑定画布
			
			uni.downloadFile({
				url: path,
				success: res => {
					console.log(res)
				if(path2){
					//console.log('has drawn frame')
					ctx.drawImage(res.tempFilePath, 226, 182, 1373, 902);
					ctx.drawImage(path2, 0, 0, 1795, 1205);
				}	
				else{
						ctx.drawImage(res.tempFilePath, 0, 0, 1795, 1205);
					}
					

					if (this.motto){
						if (this.motto.key==1) ctx.drawImage(this.motto.value, 1795 / 2 - 250 ,50, 500, 250);
							else{
								ctx.setFillStyle('#544e45')  //设置内容1的文字样式
								ctx.font = '70px 微软雅黑';
								ctx.setTextAlign('center')  //设置对于坐标点的对齐方式
								ctx.translate(1530, 194);
								ctx.rotate(30 * Math.PI / 180);
								ctx.fillText(this.motto.value,0,0); //计算距离，将文字定位于图片的某处
							}
					}
					ctx.draw();

					setTimeout(() => {
						//不加延迟的话，img有时候会赋予undefined
						uni.canvasToTempFilePath(
							{
								canvasId: 'myCanvass',
								destWidth: 1795,
								destHeight: 1205,
								fail(res){
										console.log(res);
								},
								success: res => {
									console.log(res);
									// uni.downloadFile({
									// 	url: res.tempFilePath,
									// 	success: res => {
									this.animal_pic = res.tempFilePath;
									if (this.key === 0) {
										this.path = this.animal_pic;
									} else {
										this.path = this.animal_pic_co;
									}
									// }
									// });
									uni.hideLoading();
								}
							},
							this
						);
						
					}, 800);
				}
			});
		},
		draw2(path, path2) {
			uni.showLoading({title:'生成中...'});
			var ctx = uni.createCanvasContext('myCanvas'); //绑定画布
			
			uni.downloadFile({
				url: path,
				success: res => {
					if (path2){
						ctx.drawImage(res.tempFilePath, 226, 182, 1373, 902);
						ctx.drawImage(path2, 0, 0, 1795, 1205);
					}	else{
						ctx.drawImage(res.tempFilePath, 0, 0, 1795, 1205);
					}
					
					if (this.motto){
						if (this.motto.key==1) ctx.drawImage(this.motto.value, 1795 / 2 - 250 ,50, 500, 250);
							else{
								ctx.setFillStyle('#544e45')  //设置内容1的文字样式
								ctx.font = '70px 微软雅黑';
								ctx.setTextAlign('center')  //设置对于坐标点的对齐方式
								ctx.translate(1530, 194);
								ctx.rotate(30 * Math.PI / 180);
								ctx.fillText(this.motto.value,0,0); //计算距离，将文字定位于图片的某处
							}
					}
					ctx.draw();
					setTimeout(() => {
						//不加延迟的话，img有时候会赋予undefined
						uni.canvasToTempFilePath(
							{
								canvasId: 'myCanvas',
								destWidth: 1795,
								destHeight: 1205,
								fail(res){
										console.log(res);
								},
								success: res => {
									console.log(res);
									// uni.downloadFile({
									// 	url: res.tempFilePath,
									// 	success: res => {
									// console.log(res);
									this.animal_pic_co = res.tempFilePath;
									if (this.key === 0) {
										this.path = this.animal_pic;
									} else {
										this.path = this.animal_pic_co;
									}
									
									uni.hideLoading();
									// 	}
									// });
								}
							},
							this
						);
					}, 800);
				}
			});
		},
		
		setmotto(res){
			this.flag = false;
			this.motto = res;
			console.log(res);
			
			if (this.active == 0){
				this.draw('https://faceback.zooseefun.net' + this.animal_pic_back, '');
				this.draw2('https://faceback.zooseefun.net' + this.animal_pic_co_back, '');
			}else{
				this.draw('https://faceback.zooseefun.net' + this.animal_pic_back, this.array[this.active]);
				this.draw2('https://faceback.zooseefun.net' + this.animal_pic_co_back, this.array[this.active]);
			}
		},
		btn(path, index) {
			this.active = index;
			if (index === 0) {
				this.draw('https://faceback.zooseefun.net' + this.animal_pic_back, '');
				this.draw2('https://faceback.zooseefun.net' + this.animal_pic_co_back, '');
			} else {
				this.draw('https://faceback.zooseefun.net' + this.animal_pic_back, path);
				this.draw2('https://faceback.zooseefun.net' + this.animal_pic_co_back, path);
			}
		},
		pay() {
			{
				uni.uploadFile({
					url: 'https://faceback.zooseefun.net/image/payinit',
					formData: {
						type: 1,
						openid: uni.getStorageSync('openid')
					},
					filePath: this.animal_pic,
					name: 'file',
					async: true,
					success: res => {
						console.log(JSON.parse(res.data).path);
						this.pullAnimal = JSON.parse(res.data).path;
						uni.uploadFile({
							url: 'https://faceback.zooseefun.net/image/payinit',
							formData: {
								type: 1,
								openid: uni.getStorageSync('openid')
							},
							filePath: this.animal_pic_co,
							name: 'file',
							async: true,
							success: res => {
								this.pullAnimalHuman = JSON.parse(res.data).path;
								console.log(11);
								uni.request({
									url: 'https://faceback.zooseefun.net/order/pay',
									data: {
										money: this.pay_info.pay_amount,
										body: '打印照片',
										openid: uni.getStorageSync('openid'),
										animal: this.pullAnimal,
										animalhuman: this.pullAnimalHuman,
										location: uni.getStorageSync('location')
									},
									success: res => {
										console.log(res);
										let resa = res.data;
										this.code = resa.code;
										let data = {
											code: this.code,
											animal: this.pullAnimalHuman
										};
										console.log(data);
										uni.setStorageSync('pay', JSON.stringify(data));
										uni.requestPayment({
											provider: 'wxpay',
											timeStamp: resa.timeStamp,
											nonceStr: resa.nonceStr,
											package: resa.package,
											signType: 'MD5',
											paySign: resa.paySign,
											_debug: 1,
											success: function(res) {
												console.log(res);
												uni.redirectTo({
													url: 'pay'
												});
											},
											fail: function(res) {
												console.log(res);
											}
										});
									}
								});
							}
						});
					}
				});
			}
		},
		openOrder: function() {
			let pages = getCurrentPages();
			let page = pages[pages.length - 1].route.split('/')[1];
			uni.redirectTo({
				url: 'order?page=' + page
			});
		},
		scan() {
			let code = this.code;
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
		download() {
			const path = this.path;
			const active=this.active
			uni.showLoading({
				title: '正在保存'
			});
			console.log(11);
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
								{
									uni.saveImageToPhotosAlbum({
										filePath: path,
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
						{
							uni.saveImageToPhotosAlbum({
								filePath: path,
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
				}
			});
		},
		saveAlbum() {
			console.log(1);
		},
		getSwitchValue: function(e) {
			this.key = e.key;
			console.log(e);
			/*
			if (this.active == 0){
				this.draw('https://faceback.zooseefun.net' + this.animal_pic_back, '');
				this.draw2('https://faceback.zooseefun.net' + this.animal_pic_co_back, '');
			}else{
				this.draw('https://faceback.zooseefun.net' + this.animal_pic_back, this.array[this.active]);
				this.draw2('https://faceback.zooseefun.net' + this.animal_pic_co_back, this.array[this.active]);
			}
			if (this.active === 0) {
				if (e.key === 0) {
					this.path = 'https://faceback.zooseefun.net' + this.animal_pic;
				} else if (e.key === 1) {
					this.path = 'https://faceback.zooseefun.net' + this.animal_pic_co;
				}
			} else
			*/
			{
				if (e.key === 0) {
					this.path = this.animal_pic;
				} else if (e.key === 1) {
					this.path = this.animal_pic_co;
				}
			}
			console.log(this.path);
		},
		again: function() {
			uni.redirectTo({
				url: 'select'
			});
		},
		DIY:function(){
			uni.redirectTo({
				url:"DIYresult"
			})
		},
		share() {},
		more:function(){
			this.show = !this.show
		}
	}
};
</script>

<style>
.money {
	color: #ec8d5c;
	float: left;
	font-size: 60upx;
	margin-top: 20upx;
	margin-left: 50upx;
}
.top {
	margin-top: 20upx;
}

.box{
	height:100%;
	width: 100%;
	z-index: 9999999;
	
	position: absolute;
	top:0;
	left:0
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
	height: 506upx;
	margin-top: 40upx;
	background-color: #d8d8d8;
	position: relative;
}

/* .again {
	background: url('http://img.zooseefun.net/result/button.png') no-repeat;
	background-size: 100% 100%;
	width: 334upx;
	height: 122upx;
	margin-top: 10upx;
	text-align: center;
	color: #ffffff;
	line-height: 122upx;
	float: left;
	font-size: 30upx;
	margin-left: 38upx;
} */

.modify{
	width : 95upx !important;
	height: 95upx !important;
	position :absolute;
	right : 16upx;
	top: 240rpx;
}


.again {
	width: 115upx !important;
	height: 115upx !important;
	position: absolute;
	left: 0;
	bottom: -10upx;
}
.share {
	background: url('http://img.zooseefun.net/mpresult/btn.png') no-repeat;
	background-size: 100% 100%;
	width: 334upx;
	height: 122upx;
	margin-top: 10upx;
	text-align: center;
	color: #ffffff;
	line-height: 122upx;
	float: right;
	font-size: 30upx;
	margin-right: 30upx;
}
.share image {
	width: 52upx;
	height: 48upx;
	vertical-align: middle;
}
.log {
	background: url('http://img.zooseefun.net/mpresult/log.png') no-repeat;
	background-size: 100% 100%;
	width: 386upx;
	height: 166upx;
	color: #555555;
	float: left;
}
.go {
	background: url('http://img.zooseefun.net/mpresult/go.png') no-repeat;
	background-size: 100% 100%;
	width: 155upx;
	height: 155upx;
	border: none !important;
	float: left;
}
.go:after {
	border: none !important;
}
.te {
	font-size: 20upx;
	height: 91upx;
	width: 255upx;
	margin-left: 74upx;
	margin-top: 32upx;
	color: #ffffff;
}
.share:after {
	border: none !important;
}
html,
body {
	padding-top: 130upx !important;
	position: fixed;
}
.img {
	width: 178upx;
	height: 120upx;
	margin-left: 50upx;
}
.canvas {
	width: 1795px;
	height: 1205px;
	position: absolute;
	top: -9999999px;
}
.imgbtn {
	border: 10upx solid #007aff;
}
.DIY{
	width: 95rpx !important;
	height: 95rpx !important;
	position: absolute;
	top: 349rpx;
	left: 642rpx;
}
.more{
	width: 95rpx !important;
	height: 95rpx !important;
	position: absolute;
	top: 20rpx;
	left: 642rpx;
}
</style>
