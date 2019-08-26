<template>
  <Layout>
      <!-- <div :title="$page.datawork.title" />
    <div v-html="$page.datawork.content" />
    <h2>{{$page.datawork.title}}</h2> -->
    <!-- <div v-if="edge in $page.datawork.edges">
      <h2>{{ edge.node.title }}</h2>
    </div> -->
    <section class="container">
       <div v-html="$page.datawork.title" />
    <div v-html="$page.datawork.content" />
    </section>
  </Layout>
</template>

<page-query>
query DataWork($path: String!) {
  datawork: dataWork(path: $path) {
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
           title: this.$page.datawork.title
        }
    }
}
</script>