export default function ({ store, redirect}) {
    // 已经登录了就不能在访问，跳转到首页
    if(store.state.user) {
        return redirect('/')
    }
}