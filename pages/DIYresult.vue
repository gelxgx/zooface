<template>
	<view class="body">
		<cover-image src="../static/finish.png" mode="" class="finish" @click="finish"></cover-image>
		<canvas-drag ref="canvasRef" id="canvas-drag" :graph="graph" 
		    width="750" height="810" enableUndo="true" class="canvas"></canvas-drag>
			
			<view class="selcet">
				<van-tabs :active=" active "  animated color="rgb(255,255,255)">
					<van-tab title="脸部">
					  <scroll-view scroll-y="true" class="scrollitem">
						<van-grid column-num="3" >
							<van-grid-item use-slot v-for="(item, index) in animal.face" :key="item" :index="item" >
							<image
								  style="width: 100px; height: 100px; " 
								  :src="item" @click="face" :id="item" 
								/>
							  </van-grid-item>
							  <van-grid-item use-slot    >
							  <image
							  	  style="width: 100px; height: 130px; " 
							  	  :src="animal.body" @click="body" :id="animal.body"
							  	/>
							    </van-grid-item>
						</van-grid>
					  </scroll-view>
					</van-tab>
				 <van-tab title="眼睛">	  
					  <scroll-view scroll-y="true" class="scrollitem">
						<van-grid column-num="4" >
							<van-grid-item  use-slot v-for="(item, index) in animal.eye" :key="item" :index="item" >
							<image
								  style="width: 60px; height: 60px; " 
								  :src="item" @click="eye" :id="item"
								/>
							  </van-grid-item>
						</van-grid>
					  </scroll-view>
					  </van-tab>
				  <van-tab title="眉毛">
					  <scroll-view scroll-y="true" class="scrollitem">		  
						<van-grid column-num="4" >
							<van-grid-item class="eyebrow" use-slot v-for="(item, index) in animal.eyebrow" :key="item" :index="item" >
							<image
								  style="width: 60px; height: 10px; " 
								  :src="item" @click="eyebrow" :id="item"
								/>
							  </van-grid-item>
						</van-grid>
					  </scroll-view>
					  </van-tab>
				  <van-tab title="嘴巴">
					  <scroll-view scroll-y="true" class="scrollitem">
						<van-grid column-num="4" >
							<van-grid-item use-slot v-for="(item, index) in animal.mouth" :key="item" :index="item" >
							<image
								  style="width: 40px; height: 20px; " 
								  :src="item"  @click="mouth":id="item"
								/>
							  </van-grid-item>
						</van-grid>
					  </scroll-view>
				  </van-tab>
				  <van-tab title="眼镜">
					  <scroll-view scroll-y="true" class="scrollitem">
					  	<van-grid column-num="3" >
					  		<van-grid-item use-slot v-for="(item, index) in animal.glass" :key="item" :index="item" >
					  		<image
					  			  style="width: 80px; height: 30px; " 
					  			  :src="item" @click="glass" :id="item" :key="glass"
					  			/>
					  		  </van-grid-item>
					  	</van-grid>
					  </scroll-view>
				  </van-tab>
				  <van-tab title="鼻子">
					  <scroll-view scroll-y="true" class="scrollitem">
						<van-grid column-num="3" >
							<van-grid-item use-slot    >
							<image
								  style="width: 44px; height: 44px; " 
								  :src="animal.nose" @click="nose" :id="animal.nose"
								/>
							  </van-grid-item>
						</van-grid>
					  </scroll-view>
				  </van-tab>				  
				</van-tabs>
			</view>
			<view class="djleft" @click="back"><text>返回</text></view>
	</view> 
</template> 

<script>
	import canvasDrag from "@/components/canvas-drag/index";
	export default {
		data() { 
			return {
				array:[],
				active: 0,
				graph:"",
				animal:[],
				page: ''
			}
		},
		components:{
			canvasDrag,
		},
		props:{},
		methods: {
			
			face(e) {
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: {
							x:80,
							y:80,
						    w: 200, 
						    h: 200,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},
			eye(e) {
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: {
							x:150,
							y:150,
						    w: 28, 
						    h: 28,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},			
			eyebrow(e) {
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: {
							x:120,
							y:120,
						    w: 30, 
						    h: 10,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},
			mouth(e) {
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: {
							x:120,
							y:150,
						    w: 40, 
						    h: 20,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},
			glass(e) {
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: { 
							x:100,
							y:100,
						    w: 160, 
						    h: 60,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},
			nose(e) {
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: {  
							x:170,
							y:170,
						    w: 22, 
						    h: 22,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},
			body(e) {
				console.log(e)
				uni.downloadFile({
					url:e.target.id,
					success:res =>{
						this.setData({
						  graph: {
							x:25,
							y:65,
						    w: 300, 
						    h: 330,
						    type: 'image',
						    url: res.tempFilePath
						  }
						});
					}
				})
			},
			finish(){
				   this.$refs.canvasRef.exportFun().then(imgArr => {
						  uni.setStorage({
							key:"DIY",
						  	data:imgArr,
							success: () => {
									uni.redirectTo({
										url: 'DIYreturnMpresult'
									});
							}
						  })
				        }).catch(e => {
				          console.error(e);
				        });
				},
				back:function () {
					uni.redirectTo({
						url: "mpresult"
					});
				}
		},
		onLoad(option) {
			this.page = option.page;
			this.animal= JSON.parse(uni.getStorageSync('animalPic'));
			console.log(this.animal)
			uni.request({
				url:"https://faceback.zooseefun.net/ZoofaceComponents/zfc?animal="+this.animal.name, 
				success: res =>{
					this.animal = res.data;
					console.log(this.animal)
					uni.downloadFile({
						url:this.animal.body, 
						success:res=>{
							this.setData({
							        graph: {
									  x:25,
									  y:65,
							          w: 300,
							          h: 330,
							          type: 'image',
							          url: res.tempFilePath
							        }
						   });
						} 
					})
					}
				});
		},
		
	}
</script>

<style scoped lang="scss">
.body{
	background-color:rgb(207,235,243);
	width: 100%;
	height: 100vh;
}
.canvas{
	z-index: 0;
}
.finish{		
width: 95rpx; 
height: 95rpx;
position: fixed;
top: 10vh;
left: 645rpx;
z-index: 2;
}
.selcet{
	width: 100%;
	height: 39vh; 
	background-color:rgb(207,235,243);
}
.scrollitem{
	width: 100%;
	height: 32.7vh;
	background-color:rgb(207,235,243);
	}
.djleft {
background-image: url('http://img.zooseefun.net/djleft.png') no-repeat;
background-size: 100% 100%;
width: 112rpx;
height: 124rpx;
position: absolute;
left: 0;
bottom: 10%;
color: #ffffff;
text-align: center;
}

</style>
