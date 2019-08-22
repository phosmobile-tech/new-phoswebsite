<template>
    <Layout>
        <div v-html="$page.post.title" />
        <div v-html="$page.post.content" />
    </Layout>
</template>


<script>
export default {
    data() {
      return {
            title: this.$page.post.title
        }
    }
}
</script>

<style>

</style>