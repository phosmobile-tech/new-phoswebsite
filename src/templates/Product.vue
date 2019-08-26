<template>
  <Layout>
    <section class="container">
       <div v-html="$page.product.title" />
    <div v-html="$page.product.content" />
    </section>
  </Layout>
</template>

<page-query>
query Product($path: String!) {
  product: product(path: $path) {
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
           title: this.$page.product.title
        }
    }
}
</script>