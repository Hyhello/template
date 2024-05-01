  <template>
  	<view class="zai-box">
  		<view class="page">
  			<view class="text-center" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
  				<image src="/static/logo.png" mode='aspectFit' class="zai-logo"></image>
  				<view class="zai-title text-shadow ">登 录</view>
  			</view>
  			<view class="box padding-lr-xl login-paddingtop" :style="[{animation: 'show ' + 0.6+ 's 1'}]">
  				<block>
  					<view class="cu-form-group margin-top  shadow-warp">
  						<view class="title"><text class="cuIcon-people margin-right-xs"></text>账号:</view>
  						<input placeholder="请输入账号" name="input" v-model="loginInfo.username" />
  					</view>
  					<view class="cu-form-group margin-top shadow-warp">
  						<view class="title"><text class="cuIcon-lock margin-right-xs"></text>密码:</view>
  						<input class="uni-input" placeholder="请输入密码" :password="!showPassword" v-model="loginInfo.password" />
  						<view class="action text-lg">
  							<text :class="[showPassword ? 'cuIcon-attention' : 'cuIcon-attentionforbid']" @click="changePassword"></text>
  						</view>
  					</view>
  					<view class="text-center margin-top">
  						<button class="cu-btn block bg-blue lg margin-tb-sm lg shadow" :loading="loading" @tap="onLogin">
							<text space="emsp">{{loading ? "登录中...":"登录"}}</text>
  						</button>
  					</view>
  				</block>
  			</view>
  		</view>
  		<!-- 登录加载弹窗 -->
  		<view class="cu-load load-modal" v-if="loading">
  			<view class="cuIcon-emojifill text-orange"></view>
  			<view class="gray-text">登录中...</view>
  		</view>
  	</view>

  </template>

  <script>
  	import { login } from './service';

  	export default {
  		data() {
  			return {
				loading: false,
				loginInfo: {
					username: 'admin',
					password: 'admin123'
				},
  				showPassword: false //是否显示明文
  			};
  		},
  		methods: {
  			async onLogin () {
  				try {
  					if (!this.loginInfo.username) {
  						this.$tip.toast('请填写用户名');
  						return;
  					}
  					if (!this.loginInfo.password) {
  						this.$tip.toast('请填写密码');
  						return;
  					}
  					this.loading = true;
					const res = await login(this.loginInfo);
					this.$store.commit('LOGIN_IN', res);
					await this.$store.dispatch('getUserInfo');
					this.$router.replace({ name: 'layout' });
				} finally {
  					this.loading = false;
  				}
  			},
  			changePassword() {
  				this.showPassword = !this.showPassword;
  			}
  		},
  		beforeDestroy() {
  			if (this.smsCountInterval) {
  				clearInterval(this.smsCountInterval);
  			}
  		},
  	}
  </script>

  <style lang="scss" scoped>
  	.login-paddingtop {
  		padding-top: 100upx;
  	}

  	.zai-box {
  		padding: 0 20upx;
  		padding-top: 100upx;
  		position: relative;
  	}

  	.zai-logo {
  		width: 200upx;
  		height: 150px;
  	}

  	.zai-title {
  		font-size: 58upx;
  		color: #000000;
  		text-align: center;
  	}

  	.input-placeholder,
  	.zai-input {
  		color: #94afce;
  	}

  	.zai-label {
  		padding: 60upx 0;
  		text-align: center;
  		font-size: 30upx;
  		color: #a7b6d0;
  	}
  </style>
