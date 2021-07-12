<template>
  <div>
        <form class="card comment-form">
          <div class="card-block">
            <textarea  
            v-model="commentBody"
            class="form-control" 
            placeholder="Write a comment..." 
            rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button 
            @click='addComment(article.slug)'
            class="btn btn-sm btn-primary"
            >
             Post Comment
            </button>
          </div>
        </form>

        <div 
        class="card"
        v-for="comment in comments" 
        :key="comment.id"
        >
          <div class="card-block">
            <p class="card-text">{{comment.body}}</p>
          </div>
          <div class="card-footer">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username:comment.author.username
                }
            }" 
            class="comment-author"
            >
              <img :src="comment.author.image" class="comment-author-img" />
            </nuxt-link>

            &nbsp;

            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username:comment.author.username
                }
            }" 
            class="comment-author"
            >
            {{ comment.author.username }}
            </nuxt-link>

            <span class="date-posted"> {{ comment.createdAt | date("MMM DD, YYYY")}} </span>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i @click="deleteComment(comment.id)" class="ion-trash-a"></i>
            </span>
          </div>
        </div>
  </div>
</template>

<script>
import { getArticleComments, addArticleComment, deleteArticleComment } from '@/api/article'
export default {
    name:'ArticleComments',
    props:{
        article: {
            type: Object,
            required: true
        }
    },
    name: 'ArticleComments',
    async mounted () {
        // const { data } = await getArticleComments(this.article.slug)
        // this.comments = data.comments
        this.getComments()
    },
    data () {
        return {
            comments: [],
            comment:{
                body:''
            },
            commentBody:''
        }
    },
    methods: {
        async getComments (){
            const { data } = await getArticleComments(this.article.slug)
            this.comments = data.comments
        },
        async addComment (slug) {
            const result = {}
            this.comment.body = this.commentBody
            const { data } = await addArticleComment(slug,this.comment)
        },
       async deleteComment (id) {
            await deleteArticleComment(this.article.slug,id)
            this.getComments()

        }
    }
}
</script>

<style>

</style>