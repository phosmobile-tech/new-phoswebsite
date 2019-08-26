<template>
  <Layout>
    <section class="container">
       <div v-html="$page.datawork.title" />
    <div v-html="$page.datawork.content" />
    </section>
  </Layout>
</template>



<script>
export default {
    metaInfo() {
        return {
           title: this.$page.datawork.title
        }
    }
}
</script>