<template>
  <Layout>
    <section class="container">
       <div v-html="$page.careerdata.title" />
    <div v-html="$page.careerdata.content" />
    </section>
  </Layout>
</template>

<page-query>
query CareerData($path: String!) {
  careerdata: careerData(path: $path) {
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
           title: this.$page.careerdata.title
        }
    }
}
</script>