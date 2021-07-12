import {request} from '@/plugins/request'

// 首页获取公共文章列表
export const getArticles = params =>{
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// /api/articles/feed
// 获取关注的用户文章列表
export const getFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}

// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

// 展示文章评论
export const getArticleComments = slug => {
    return request({
        method: 'GET',
        url:`/api/articles/${slug}/comments`
    })
}

// 添加文章评论
export const addArticleComment = (slug, data) => {
    console.log(data)
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}

// 删除文章评论
export const deleteArticleComment = (slug,id) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${id}`
    })
}

export const createNewArticle = data => {
return request({
    method: 'POST',
    url: `/api/articles`,
    data
}) 
}
