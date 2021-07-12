import Vue from 'vue'
import dayjs from 'dayjs'

// {{表达式 ｜ 过滤器 }}
Vue.filter('date', ( value, format = 'YYYY-MM-DD HH:mm:ss' ) => {
    // 文档： https://day.js.org/docs/en/display/format
    return dayjs(value).format( format )
})