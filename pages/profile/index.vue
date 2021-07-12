<template>
<div class="profile-page">
  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" />
          <h4>{{profile.username}}</h4>
          <p>
            {{profile.bio}}
          </p>
          <button :class="{active:profile.following}" class="btn btn-sm btn-outline-secondary action-btn">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons 
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link 
              exact
              class="nav-link" 
              :class="{ active:tab === 'my_article' }"
              :to="{
                name: 'profile',
                query:{
                  tab:'my_article',
                  mark: 'author'
                }
              }">My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              exact
              class="nav-link" 
              :class="{ active:tab === 'favorited_article' }"
              :to="{
                name: 'profile',
                query:{
                  tab:'favorited_article',
                  mark: 'favorited'
                }
              }"
              >
              Favorited Articles
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div 
        v-for="article in articles"
        :key=article.slug
        class="article-preview"
        >
          <div class="article-meta">
            <a href=""><img :src="article.image" /></a>
            <div class="info">
              <nuxt-link :to="{
                name: 'profile',
                params:{
                  username: article.author.username
                }
              }" class="author">{{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt |date('MMM DD, YYYY')}}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link :to="{
            name: 'article',
            params: {
              slug: article.slug
            }
          }" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

        <!-- <div class="article-preview">
          <div class="article-meta">
            <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div class="info">
              <a href="" class="author">Albert Pai</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 32
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
            <ul class="tag-list">
              <li class="tag-default tag-pill tag-outline">Music</li>
              <li class="tag-default tag-pill tag-outline">Song</li>
            </ul>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getProfile, getArticles, favoriteArticle } from '@/api/profile'
export default {
    middleware: 'authenticated',
    name: 'ProfileIndex',
    watchQuery:['tab'],
    async asyncData ({ params, query }) {
      const { data } = await getProfile(params.username)
      const mark = query.mark || 'author'
      const limit = 5
      const page = Number.parseInt(query.page) || 1

      const { data:articlesDatas } = await getArticles({
          [mark]: params.username,
          limit,
          offset:(page -1)*limit || 0
        })
      const {articles, articlesCount} = articlesDatas
      return {
        profile: data.profile,
        tab: query.tab || 'my_article',
        articles,
        articlesCount
      }
    }
};
</script>

<style >

</style>