<template>
	<view>
		<cu-custom bgColor="bg-white">
			<block slot="content">工作台</block>
		</cu-custom>
		<!-- 轮播 -->
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true"
			interval="5000" duration="500" :style="[{animation: 'show 0.2s 1'}]">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
					v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>

		<!-- 安全质量管理 -->
		<view class="cu-bar bg-white solid-bottom" :style="[{animation: 'show 0.5s 1'}]">
			<view class="action">
				<text class='cuIcon-title text-blue'></text>安全质量管理
			</view>
		</view>

		<view class="cu-list grid col-4 text-sm">
			<view class="cu-item animation-slide-bottom" :style="[{animationDelay: (index + 1)*0.05 + 's'}]"
				v-for="(item,index) in usList" :key="index" @tap="goPage(item.page)">
				<view class="padding text-center">
					<image :src="item.icon" style="width:28px;height:28px;">
						<view class="cu-tag badge margin-top-sm" style="margin-left:1.2em" v-if="getTtemDotInfo(item)">
							<block v-if="getTtemDotInfo(item)">{{getTtemDotInfo(item)}}</block>
						</view>
					</image>
					<view class="margin-top-xs padding-xs">{{item.title}}</view>
				</view>
			</view>
		</view>

		<!-- 苗圃管理 -->
		<view class="cu-bar bg-white solid-bottom margin-top" :style="[{animation: 'show 0.6s 1'}]">
			<view class="action">
				<text class='cuIcon-title text-red'></text>苗圃管理
			</view>
		</view>
		<view class="cu-list grid col-4 text-sm">
			<view class="cu-item animation-slide-bottom" :style="[{animationDelay: (index + 1)*0.1 + 's'}]"
				v-for="(item,index) in osList" :key="index" @tap="goPage(item.page)">
				<view class="padding text-center">
					<image :src="item.icon" style="width:28px;height:28px;" />
					<view class="margin-top-xs padding-xs">{{item.title}}</view>
				</view>
			</view>
		</view>

		<!-- 科技研发 -->
		<view class="cu-bar bg-white solid-bottom margin-top" :style="[{animation: 'show 0.6s 1'}]">
			<view class="action">
				<text class='cuIcon-title text-yellow'></text>科技研发
			</view>
		</view>
		<view class="cu-list grid col-4 text-sm">
			<view class="cu-item animation-slide-bottom" :style="[{animationDelay: (index + 1)*0.1 + 's'}]"
				v-for="(item,index) in ksList" :key="index" @tap="goPage(item.page)">
				<view class="padding text-center">
					<image :src="item.icon" style="width:28px;height:28px;" />
					<view class="margin-top-xs padding-xs">{{item.title}}</view>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height margin-top"></view>
	</view>
</template>

<script>
	import {
		us,
		os,
		ks
	} from './const.js'
	export default {
		name: 'home',
		props: {
			cur: String,
		},
		data() {
			return {
				swiperList: [{
						id: 1,
						type: 'image',
						url: '/static/banner/banner1.png',
						link: ''
					},
					{
						id: 2,
						type: 'image',
						url: '/static/banner/banner2.jpg',
						link: ''
					},
					{
						id: 3,
						type: 'image',
						url: '/static/banner/banner3.jpg',
						link: ''
					},
					{
						id: 4,
						type: 'image',
						url: '/static/banner/banner4.jpg',
						link: ''
					},
				],
				middleApps: [{
						icon: 'line2_icon1.png',
						title: '审批',
						'text': '个人审批'
					},
					{
						icon: 'line2_icon2.png',
						title: '审批稿',
						'text': '审批草稿箱'
					},
				],
				usList: us.data,
				osList: os.data,
				ksList: ks.data,
				msgCount: 0,
				dot: {
					mailHome: false
				}
			}
		},
		methods: {
			initMenu() {
				this.loadCount(0);
			},
			goPage(page) {
				if (!page) {
					return false;
				}
				if (page === 'annotationList') {
					this.msgCount = 0
				}
				this.dot[page] = false
				this.$Router.push({
					name: page
				})
			},
			loadCount(flag) {
				console.log("loadCount::flag", flag)
				let url = '/sys/annountCement/listByUser';
				this.$http.get(url).then(res => {
					console.log("res::", res)
					if (res.data.success) {
						let msg1Count = res.data.result.anntMsgTotal;
						let msg2Count = res.data.result.sysMsgTotal;
						this.msgCount = msg1Count + msg2Count
						console.log("this.msgCount", this.msgCount)
					}
				})
			},
			loadEmailCount() {
				this.dot.mailHome = true
			},
			getTtemDotInfo(item) {
				if (item.page === 'annotationList' && this.msgCount > 0) {
					return this.msgCount
				}
				return '';
			}
		}
	}
</script>

<style scoped>
	.cu-list.grid>.cu-item {
		padding: 0px 0px;
	}

	.line2-icon {
		width: 60px;
		height: 60px;
	}
</style>
