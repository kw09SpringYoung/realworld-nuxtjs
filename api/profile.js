
import {request} from '@/plugins/request'

// 获取profile 用户信息
export const getProfile = username => {
    return request({
        method: 'GET',
        url: `api/profiles/${username}`
    })
}

// 获取我的文章
export const getArticles = params => {
    return request({
        method: 'GET',
        url: `/api/articles`,
        params
    })
}
