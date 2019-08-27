<template>
  <Layout>
    <section class="container">
       <h1><div v-html="$page.datawork.title" /></h1>
    <div class="text"><div v-html="$page.datawork.content" /></div>
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