<template>
  <Layout>
      <!-- <div :title="$page.datawork.title" />
    <div v-html="$page.datawork.content" />
    <h2>{{$page.datawork.title}}</h2> -->
    <!-- <div v-if="edge in $page.datawork.edges">
      <h2>{{ edge.node.title }}</h2>
    </div> -->
    <section class="container">
       <div :title="$page.post.title" />
    <div v-html="$page.post.content" />
      <h1>{{$page.post.content}}</h1>
    </section>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    id,
    title,
    content
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
           title: this.$page.post.title
        }
    }
}
</script>