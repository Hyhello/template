<template>
	<view :class="{ 'ix-fixed': fixed }">
		<view class="cu-custom" :style="[{height:ICustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:IStatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				IStatusBar: this.StatusBar,
				ICustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var IStatusBar= this.IStatusBar;
				var ICustomBar= this.ICustomBar;
				var bgImage = this.bgImage;
				var style = `height:${ICustomBar}px;padding-top:${IStatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		mounted () {
			this.IStatusBar= this.StatusBar;
			this.ICustomBar= this.CustomBar;
		},
		props: {
			// 添加fixed方法
			fixed: {
				type: Boolean,
				default: false
			},
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({url})
				}
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.ix-fixed {
		position: fixed;
		width: 100%;
		z-index: 9999;
	}
</style>
