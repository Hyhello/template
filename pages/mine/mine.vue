<template>
    <view class="page">
        <!-- 头部logo-->
        <view class="UCenter-bg">
            <image :src="avatarUrl" class="png round animation-slide-right margin-bottom-sm" mode="scaleToFill"
                :style="[{animationDelay: '0.1s'}]"></image>
        </view>
        <view class="padding flex text-center text-grey bg-white shadow-warp">
            <view class="flex flex-sub flex-direction solid-right animation-slide-top"
                :style="[{animationDelay: '0.2s'}]">
                <view class="text-xl text-orange">张三</view>
                <view class="margin-top-sm">
                    <text class="cuIcon-locationfill margin-right-xs"></text>
                    32
                </view>
            </view>

            <view class="flex flex-sub flex-direction animation-slide-top" :style="[{animationDelay: '0.3s'}]">
                <view class="text-xl text-green" style="font-size: 21px;">34</view>
                <view class="margin-top-sm">
                    <text class="cuIcon-news margin-right-xs"></text>待办
                </view>
            </view>
        </view>
        <!-- 列表list-->
        <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
            <view class="cu-item arrow animation-slide-bottom" :style="[{animationDelay: '0.1s'}]">
                <view class="content">
                    <text class="cuIcon-likefill text-orange"></text>
                    <text class="text-grey">我的项目</text>
                </view>
                <view class="action">
                    <view class="cu-tag round bg-orange light">10</view>
                </view>
            </view>
            <view class="cu-item arrow animation-slide-bottom" :style="[{animationDelay: '0.2s'}]">
                <view class="content">
                    <text class="cuIcon-upstagefill text-red"></text>
                    <text class="text-grey">我的奖惩</text>
                </view>
                <view class="action">
                    <view class="cu-tag round bg-red light">15</view>
                </view>
            </view>
            <navigator class="cu-item arrow animation-slide-bottom" url="/pages/user/userdetail"
                :style="[{animationDelay: '0.3s'}]">
                <view class="content">
                    <text class="cuIcon-settingsfill text-cyan"></text>
                    <text class="text-grey">设置</text>
                </view>
            </navigator>
            <view class="cu-item arrow animation-slide-bottom" :style="[{animationDelay: '0.2s'}]" @tap="onLoginOut">
                <view class="content">
                    <text class="cuIcon-exit text-cyan"></text>
                    <text class="text-grey">注销</text>
                </view>
            </view>
        </view>
        <view class="cu-tabbar-height margin-top"></view>
    </view>
</template>

<script>
    import {
        loginOut
    } from './service';
    export default {
        data() {
            return {
                personalList: {
                    avatar: '',
                    realname: '',
                    username: '',
                    post: ''
                },
                positionUrl: '/sys/position/list',
                departUrl: '/sys/user/userDepartList',
                userUrl: '/sys/user/queryById',
                postUrl: '/sys/position/queryByCode',
                userId: '',
                id: ''
            };
        },
        computed: {
            userInfo() {
                return this.$store.getters.userInfo.user || {};
            },
            avatarUrl() {
                return this.userInfo.avatar || 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg';
            }
        },
        methods: {
            onLoginOut() {
                uni.showModal({
                    title: '注销登录?',
                    content: '确定注销登录？',
                    showCancel: true,
                    cancelText: '点错了',
                    success: async res => {
                        if (res.confirm) {
                            try {
                                await loginOut();
                                this.$store.commit('LOGIN_OUT');
                                this.$router.replace({
                                    name: 'login'
                                });
                                this.$tip.success('注销成功！');
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    }
                });
            }
        }
    }

</script>

<style>
    .UCenter-bg {
        /* #ifdef MP-WEIXIN */
        background-image: url('https://static.jeecg.com/upload/test/blue_1595818030310.png');
        /* #endif */
        /* #ifndef MP-WEIXIN */
        background-image: url('/static/blue.png');
        /* #endif */
        background-size: cover;
        height: 400rpx;
        display: flex;
        justify-content: center;
        padding-top: 40rpx;
        overflow: hidden;
        position: relative;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-weight: 300;
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }

    .UCenter-bg text {
        opacity: 0.8;
    }

    .UCenter-bg image {
        width: 200rpx;
        height: 200rpx;
    }

    .UCenter-bg .gif-wave {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 99;
        mix-blend-mode: screen;
        height: 100rpx;
    }

    map,
    .mapBox {
        left: 0;
        z-index: 99;
        mix-blend-mode: screen;
        height: 100rpx;
    }

    map,
    .mapBox {
        width: 750rpx;
        height: 300rpx;
    }

</style>
