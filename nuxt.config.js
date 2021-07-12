/* Nuxt.js配置文件 */

module.exports = {
    router: {
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清除nuxtjs基于pages目录默认生成的路由表规则(默认根据pages下的index是根路由页面)
            routes.splice(0)
            
            //将数组展开成路由对象，通过push方法存入 routes 数组
            routes.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [
                        {
                            path: '',//默认子路由
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/')
                        },
                        {
                            path: '/login',
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/register',
                            name: 'register',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/profile/:username',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/')
                        },
                        {
                            path: '/settings/',
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings/')
                        },
                        {
                            path: '/editor/',
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/')
                        },
                        {
                            path: '/article/:slug',
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/')
                        },
                    ]
                }
            ])
        }
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js',
        '~/plugins/element-ui.js'
    ],
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ]
    // server: {
    //     // host:'localhost', //只能本机访问
    //     host:'0,0,0,0', // 监听所有网卡地址，可以通过外网地址访问
    //     port:3000 //选择自己需要的端口号
    // }
}