import axios from 'axios'
import {ElMessage} from "element-plus";
import useLoginStore from "../store/useLoginStore.ts";
import router from "../router";

// 创建axios实例
const request = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(req => {
    // 带token
    const {isLogin, token} = useLoginStore()
    if (isLogin) {
        req.headers.Authorization = token
    }
    return req
})

// 响应拦截器
request.interceptors.response.use(resp => resp, err => {
    // 未登录
    if (err.response.status === 401) {
        const loginStore = useLoginStore()
        loginStore.token = ''
        router.push('/login')
    }
    ElMessage.error(err.response.data.msg)
    return Promise.reject(err)
})

export default request