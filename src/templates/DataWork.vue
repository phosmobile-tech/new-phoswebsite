<template>
  <Layout>
      <div :title="$page.datawork.title" />
    <div v-html="$page.datawork.content" />
  </Layout>
</template>

<page-query>
query dataWork {
  datawork: allDataWork {
    edges{
      node{
          id,
        title,
        content
      }
    }
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