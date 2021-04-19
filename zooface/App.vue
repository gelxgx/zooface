<script>
import amap from 'components/amap-wx.js';
export default {
	data() {
		return {
			key: '55294fe77e0c1c57239280ccd3eed59c',
			amapPlugin: null
		};
	},
	onLaunch: function() {
		console.log('App Launch');
		// #ifdef MP-WEIXIN
		uni.getProvider({
			service: 'oauth',
			success: res => {
				uni.login({
					provider: res.provider[0],
					success: r => {
						uni.request({
							url: 'https://faceback.zooseefun.net/auth',
							data: {
								data: JSON.stringify(r)
							},
							success: data => {
								uni.setStorageSync('openid', data.data.openid);
							}
						});
					}
				});
			}
		});
		uni.authorize({
			scope: 'scope.userLocation',
			success: () => {
				this.amapPlugin = new amap.AMapWX({
					key: this.key
				});
				this.amapPlugin.getRegeo({
					success: data => {
						let address = data[0].regeocodeData.addressComponent;
						console.log(address);
						let province = address.province;
						let city = address.city;
						let districe = address.district;
						switch (province) {
							case '天津市':
								if (districe === '南开区') {
									this.location = '天津动物园';
								} else {
									this.location = '天津动物园';
								}
								break;
							case '重庆市':
								if (districe === '永川区') {
									this.location = '重庆野生动物园';
								} else {
									this.location = '天津动物园';
								}
								break;
							case '云南省':
								if (city === '昆明市') {
									if (districe === '盘龙区') {
										this.location = '云南野生动物园';
									} else {
										this.location = '天津动物园';
									}
								} else {
									this.location = '天津动物园';
								}
								break;
							case '北京市':
								if (districe === '西城区') {
									this.location = '北京动物园';
								} else {
									this.location = '天津动物园';
								}
								break;
							default:
								this.location = '天津动物园';
								break;
						}
						uni.setStorageSync('location', this.location);
					}
				});
			},
			fail: () => {
				console.log(111);
			}
		});
		// #endif
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* #ifndef MP-WEIXIN */
html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}
/* #endif */
/* #ifdef MP-WEIXIN */
html,
body {
	height: 100%;
}
page {
	height: 100%;
}
.djright {
	background: url('http://img.zooseefun.net/djright.png') no-repeat;
	background-size: 100% 100%;
	width: 112upx;
	height: 124upx;
	position: absolute;
	right: 0;
	bottom: 30%;
	color: #ffffff;
	text-align: center;
}
.djright text {
	position: relative;
	line-height: 124upx;
	margin-left: 30upx;
}
.djleft {
	background: url('http://img.zooseefun.net/djleft.png') no-repeat;
	background-size: 100% 100%;
	width: 112upx;
	height: 124upx;
	position: absolute;
	left: 0;
	bottom: 10%;
	color: #ffffff;
	text-align: center;
}
.djleft text {
	position: relative;
	line-height: 114upx;
	margin-right: 20upx;
}
/* #endif */
</style>
