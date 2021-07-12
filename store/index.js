// 在服务端渲染期间运行的都是同一个实例，为了防止数据冲突，需要把state定义成一个函数，返回数据对象。
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
    return {
        //  当前登录用户的登录状态
        user:null
    }
}

export const mutations = {
    setUser (state, data) {
        state.user = data
    }
}

export const actions = {
    
    nuxtServerInit ({ commit }, { req }) {
        let user = null 

        // 如果请求头有 Cookie
        if(req.headers.cookie) {
            // 使用cookieparser 把cookie字符串转化为js对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.cookieUser)
            } catch (err) {
                // No valid cookie found
            }
        }
        // 提交 mutations 修改 state 状态
        commit('setUser', user)
    }
}