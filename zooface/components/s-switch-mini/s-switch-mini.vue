<template>
	<view class="s-switch-container">
		<view class="s-switch-item" :class="{
                's-switch-selected': item.selected
              }" @click="selectItem(item)"
		 v-for="item in switchArr" :key="item.key">
			{{item.value}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'sswitchmini',
		props: {
			defaultValue: {
				type: Number,
				default: 0
			},
			switchList: {
				type: Array,
				default: [{
						key: 0,
						value: '是'
					},
					{
						key: 1,
						value: '否'
					}
				]
			}
		},
		data() {
			return {
				switchArr: []
			}
		},
		methods: {
			selectItem(info) {
				if (info.selected === false) {
					for (const item of this.switchArr) {
						if (info.key === item.key) {
							item.selected = true
							this.$emit('switchValue', item)
						} else {
							item.selected = false
						}
					}
				}
			}
		},
		created() {
			for (let i = 0; i < 2; i++) {
				const arrItem = {
					key: this.switchList[i].key,
					value: this.switchList[i].value,
					selected: this.defaultValue === this.switchList[i].key ? true : false
				}
				if (this.switchList[i].key === this.defaultValue) {
					this.$emit('switchValue', arrItem)
				}
				this.switchArr.push(arrItem)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.s-switch-container {
		font-size: 20upx;
		color: rgba(0, 0, 0, 0.5);
		text-align: center;
		line-height: 50upx;
		// margin-top: 54upx;
	}

	.s-switch-item {
		background: url('http://img.zooseefun.net/mpresult/rectangular2.png') no-repeat;
		background-size: 100% 100%;
		width: 85upx;
		height: 50upx;
		margin: 7upx;
		display: inline-block;
	}

	.s-switch-selected {
		background: url('http://img.zooseefun.net/mpresult/rectangular1.png') no-repeat;
		background-size: 100% 100%;
		width: 85upx;
		height: 50upx;
		margin: 7upx;
		
		color: #FFFFFF;
	}
</style>