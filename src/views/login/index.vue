<template>
  <div id="Login">
    <van-cell-group>
      <van-field v-model="userParams.phone" required clearable type="number" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="userParams.passwd" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="info" style="" @click="user_login">
      登录
    </van-button>
  </div>
</template>

<script>
import { userLogin } from '@/api/mine'
import { Toast, Dialog } from 'vant'
export default {
    name: 'Login',
    data() {
        return {
            userParams: {
                phone: '13594347817',
                passwd: '123456'
            }
        }
    },
    created() {},
    methods: {
        // 登录
        user_login() {
            if (this.userParams.phone && this.userParams.passwd) {
                userLogin(this.userParams).then(res => {
                    if (res.code === 200) {
                        Dialog.alert({
                            message: '登录' + res.msg
                        }).then(() => {
                            this.$router.push('/')
                            this.$store.commit('modifyTabSelect', 0)
                        })
                    }
                })
            } else {
                Toast('请输入用户名和密码')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.van-button--info {
    position: relative;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    width: 50%;
}
</style>
