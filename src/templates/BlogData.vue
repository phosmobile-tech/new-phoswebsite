<template>
  <Layout>
    <section class="container">
       <div v-html="$page.blogdata.title" />
    <div v-html="$page.blogdata.content" />

    <vue-disqus shortname="phosmobile" identifier="$page.post.title"></vue-disqus>
    </section>
  </Layout>
</template>

<page-query>
query BlogData($path: String!) {
  blogdata: blogData(path: $path) {
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
           title: this.$page.blogdata.title
        }
    }
}
</script>