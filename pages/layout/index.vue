<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">conduit</a>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <!-- <a class="nav-link active" href="">Home</a> -->
                        <nuxt-link 
                        to='/' 
                        class="nav-link" 
                        exact
                        >Home</nuxt-link>
                    </li>
                    <template v-if="user">
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">
                            <i class="ion-compose"></i>&nbsp;New Post
                            </a> -->
                            <nuxt-link to='/editor' class="nav-link">
                                <i class="ion-compose"></i>&nbsp;New Post
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                            </a> -->
                            <nuxt-link to='/settings' class="nav-link">
                                <i class="ion-gear-a"></i>&nbsp;Settings
                            </nuxt-link>
                        </li>
                        
                        <li class="nav-item">
                            <nuxt-link :to="{
                                name:'profile',
                                params:{
                                    username: user.username
                                }
                            }"
                             class="nav-link" 
                             ><img class="user-pic" :src="user.image" alt="">{{ user.username }}</nuxt-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">Sign up</a> -->
                            <nuxt-link to='/login' class="nav-link">Sign in</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">Sign up</a> -->
                            <nuxt-link to='/register' class="nav-link">Sign up</nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
        <!-- 顶部导航栏 -->

        <!-- 子路由 -->
        <nuxt-child />
        <!-- 子路由 -->

        <!-- 底部 -->
        <footer>
            <div class="container">
                <nuxt-link to='/' class="logo-font">conduit</nuxt-link>
                <span class="attribution">
                    An interactive learning project from 
                    <nuxt-link to='https://thinkster.io'>Thinkster</nuxt-link>
                    . Code &amp; design licensed under MIT.
                </span>
            </div>
        </footer>
        <!-- 底部 -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'LayoutIndex',
    computed: {
        ...mapState(['user']),
    }
};
</script>