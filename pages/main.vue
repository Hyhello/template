<template>
	<view>
		<home v-if="PageCur === 'home'"></home>
		<work v-if="PageCur === 'work'"></work>
		<msg v-if="PageCur === 'msg'"></msg>
		<mine v-if="PageCur === 'mine'"></mine>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view v-for="item in menuList" :key="item.cur" class="action" :class="PageCur === item.cur ? 'text-blue' : 'text-gray'" @click="NavChange(item.cur)">
				<view :class='item.icon'></view>{{ item.name }}
			</view>
		</view>
	</view>
</template>

<script>
	import msg from '@/pages/msg/msg.vue';
	import home from '@/pages/home/home.vue';
	import work from '@/pages/work/work.vue';
	import mine from '@/pages/mine/mine.vue';

	export default {
		components: {
			home,
			work,
			mine,
			msg
		},
		data() {
            return {
                PageCur: 'home',
				menuList: [
					{
						name: '首页',
						cur: 'home',
						icon: 'cuIcon-homefill'
					},
					{
						name: '工作台',
						cur: 'work',
						icon: 'cuIcon-apps'
					},
					{
						name: '消息',
						cur: 'msg',
						icon: 'cuIcon-mail'
					},
					{
						name: '我的',
						cur: 'mine',
						icon: 'cuIcon-people'
					}
				]
			}
		},
        mounted() {
            const pageCur = this.$store.getters.pageCur;
            if (pageCur) {
                this.PageCur = pageCur;
            }
        },
		methods: {
            NavChange: function (path) {
                this.PageCur = path;
				this.$store.commit('SET_PAGE_CUR', path);
			}
		}
	}
</script>
