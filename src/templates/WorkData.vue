<template>
  <Layout>
    <section class="container">
       <h1><div v-html="$page.workdata.title" /></h1>
    <div class="text"><div v-html="$page.workdata.content" /></div>
    </section>
  </Layout>
</template>

<page-query>
query WorkData($path: String!) {
  workdata: workData(path: $path) {
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
           title: this.$page.workdata.title
        }
    }
}
</script>