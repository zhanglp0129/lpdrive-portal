import {defineStore} from "pinia";
import { ref, computed } from "vue";

// 登录相关仓库
export default defineStore('login', () => {
    // 存储登录token
    const token = ref('')
    const isLogin = computed(() => token.value.length>0)
    return {token, isLogin}
}, {
    // 持久化相关配置
    persist: {
        pick: ['token'],
    }
})