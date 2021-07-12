/* 基于axios封装的模块 */

import axios from 'axios'

// 1 按需导出request请求对象
export const request = axios.create({
    baseURL:'https://conduit.productionready.io'
})

// 2 插件导出函数必须作为默认成员
// 通过插件机制获得上下文对象（query，params，req,res, app,store...)
export default ({ store }) => {
// 请求拦截器
    // 任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置token
    request.interceptors.request.use(function(config){
        // 请求前经过这里
        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        // 返回config请求配置对象
        return config
    },function(error){
        // 如果请求还没有发送出去之前失败，进入这里
        return Promise.reject(error)
    })

    // 响应拦截器
}



