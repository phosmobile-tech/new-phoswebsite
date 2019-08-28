<template>
  <Layout>
    <section class="container">
       <div v-html="$page.productdata.title" />
    <div v-html="$page.productdata.content" />
    </section>
  </Layout>
</template>

<page-query>
query ProductData($path: String!) {
  productdata: productData(path: $path) {
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
           title: this.$page.productdata.title
        }
    }
}
</script>