<template>
	<view v-if="visibleSync" class="cat-signature" :class="{'visible':show}" @touchmove.stop.prevent="moveHandle">
		<view class="mask" @tap="close" />
		<image class ='text' @tap.stop="" src = "http://img.zooseefun.net/mpresult/slogan.png">
		</image>
		<view class="switch"><s-switch-mini  @switchValue="getSwitchValue" :defaultValue="0" :switchList="arr"></s-switch-mini></view>
		
		
		<view class="content">
			<canvas v-if='key' class='firstCanvas' :canvas-id="canvasId" @touchmove='move' @touchstart='start($event)' @touchend='end'
			 @touchcancel='cancel' @longtap='tap' disable-scroll='true' @error='error' />
			<input v-if='key?false:true' class = "inputbox" type="text" value=""  v-model="motto" maxlength="10" @click.stop="" > </input>
			<cover-image class = "clear" src="http://img.zooseefun.net/mpresult/trash.png" @click.stop="clear"></cover-image>
			<image class = "submit" src="http://img.zooseefun.net/mpresult/submit.png" @click.stop="save"> </image>
		</view>
		
	</view>
</template>

<script>
	import sswitchmini from '@/components/s-switch-mini/s-switch-mini.vue'; 
	
	var content = null;
	var touchs = [];
	var canvasw = 0;
	var canvash = 0;
	//获取系统信息
	uni.getSystemInfo({
		success: function(res) {
			canvasw = res.windowWidth;
			canvash = canvasw * 9 / 16;
		},
	})
	export default{
		name:'catsignature',
		props:{
			visible: {
				type: Boolean,
				default: false
			},
			canvasId:{
				type: String,
				default: 'firstCanvas'
			}
		},
		data(){
			return{
				key:0,
				motto:'',
				show:false,
				visibleSync: false,
				signImage:'',
				hasDh:false,
				arr:[
					{
						key:0,
						value:'文字'
					},
					{
						key:1,
						value:'手写'
					}
				]
			}
		},
		components: {
			sswitchmini
		},
		watch:{
			visible(val) {
				this.visibleSync = val;
				this.show = val;
				this.getInfo()
			}
		},
		
		created(options) {
			this.visibleSync = this.visible
			this.getInfo()
			setTimeout(() => {
				this.show = this.visible;
			}, 100)
		},
		methods:{
			
			getSwitchValue(e){
				console.log(e);
				this.key = e.key;
			},
			
			getInfo(){
				//获得Canvas的上下文
				content = uni.createCanvasContext(this.canvasId,this)
				//设置线的颜色
				content.setStrokeStyle("#000")
				//设置线的宽度
				content.setLineWidth(3)
				//设置线两端端点样式更加圆润
				content.setLineCap('round')
				//设置两条线连接处更加圆润
				content.setLineJoin('round')
			},
			// 
			close() {
				this.show = false;
				this.hasDh = false;
				this.$emit('close')
			},
			moveHandle(){
				
			},
			// 画布的触摸移动开始手势响应
			start(e){
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y,
				}
				touchs.push(point);
				this.hasDh = true
			},
			// 画布的触摸移动手势响应
			move: function(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				touchs.push(point)
				if (touchs.length >= 2) {
					this.draw(touchs)
				}
			},
			
			// 画布的触摸移动结束手势响应
			end: function(e) {
				//清空轨迹数组
				for (let i = 0; i < touchs.length; i++) {
					touchs.pop()
				}
			
			},
			
			// 画布的触摸取消响应
			cancel: function(e) {
				// console.log("触摸取消" + e)
			},
			
			// 画布的长按手势响应
			tap: function(e) {
				// console.log("长按手势" + e)
			},
			
			error: function(e) {
				// console.log("画布触摸错误" + e)
			},
			
			//绘制
			draw: function(touchs) {
				let point1 = touchs[0]
				let point2 = touchs[1]
				// console.log(JSON.stringify(touchs))
				content.moveTo(point1.x, point1.y)
				content.lineTo(point2.x, point2.y)
				content.stroke()
				content.draw(true);
				touchs.shift()
				
			},
			//清除操作
			clear: function() {
				//清除画布
				if (this.key == 1){
					content.clearRect(0, 0, canvasw, canvash)
					content.draw(true)
					// this.close()
					this.hasDh = false;
					//this.$emit('clear');
				}	else{
					this.motto = '';
					console.log(this.motto);
				}
			},
			save(){
				var that = this;
				/*
				if(!this.hasDh){
					uni.showToast({title:'请先签字',icon:'none'})
					return;
				}
				*/
			   if (this.key == 1){
				//uni.showLoading({title:'生成中...',mask:true})
				setTimeout(()=>{
					uni.canvasToTempFilePath({
						canvasId: this.canvasId,
						success: function(res) {
							that.signImage = res.tempFilePath;
							that.$emit('save',{key: 1, value: res.tempFilePath});
							//uni.hideLoading();
							that.hasDh = false;
							that.show = false;
						},
						fail:function(err){
							console.log(err)
							//uni.hideLoading()
						}
					},this)
				},100)
			}
			else{
				that.$emit('save',{key: 0, value: this.motto});
				that.hasDh = false;
				that.show = false;
			}
				
			}
		}
	}
</script>

<style lang="scss">
	.cat-signature.visible {
		visibility: visible
	}
	.cat-signature{
		//display: block;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		height: 100vh;
		visibility: hidden;
		.text{
			//display: block;
			//z-index: 99999;
			width:340upx;
			height:85upx;
			position: absolute;
			top:300upx;
			left:222upx;
			//font-size:48upx;
			//font-family:Microsoft YaHei UI;
			//font-weight:bold;
			//color:#73c8db;
			//line-height:120upx;
		}
		.switch{
			//display: block;
			position: absolute;
			top:390upx;
			left:282upx;
		}
		.mask{display: block;opacity: 0;position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: #FFFFFF;}
		.content{
			position: absolute;
			top: 470upx;
			left: 117upx;
			// canvas
			.firstCanvas {background-color: #fff;width: 505upx;height: 230upx;}
			// canvas
			
			.inputbox{
				width: 505upx;
				height: 230upx;
				background-color: #FFFFFF;
				color: #73c8db;
				font-size: 48upx;
			}


			.submit{
				width: 258upx;
				height: 96upx;
				margin-top: 13upx;
				margin-left: 149upx;
			}
			.clear{
				position: absolute;
				//background-color: #000000;
				z-index: 99999;
				left: 454upx;
				top: 23upx;
				width: 27upx;
				height: 31upx;
				//display: block;
			}
		}
		
		
	}
	
	.visible .mask {
		display: block;
		opacity: 0.5
	}
</style>

