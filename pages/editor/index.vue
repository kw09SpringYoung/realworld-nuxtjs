<template>
<div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input
                v-model="article.title"
                 type="text" class="form-control form-control-lg" placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input
                v-model="article.description"
                 type="text" class="form-control" placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea
                v-model="article.body"
                 class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input
                v-model="tag"
                 type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
            </fieldset>
            <button 
            :disabled="submitDisabled"
            @click="createArticle()"
            class="btn btn-lg pull-xs-right btn-primary" type="button">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { createNewArticle } from "@/api/article"
export default {
    // 在路由匹配组件渲染之前会先执行中间件处理 ''||['','',...]
    middleware: 'authenticated',
    name: 'EditorIndex',
    data (){
      return {
        article: {
          title:'',
          description: '',
          body: '',
          tagList: []
        },
        tag:'',
        submitDisabled: false
      }
    },
    methods: {
      async createArticle (){
        this.submitDisabled = true
        this.article.tagList.push(this.tag)
        await createNewArticle({
          article:this.article
        })
        this.submitDisabled = false
      }
    }

};
</script>
