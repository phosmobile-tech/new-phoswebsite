<template>
    <DynamicLayout>
        <div v-html="$page.post.content" />
    </DynamicLayout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        title
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
            title: this.$page.post.title
        }
    }
}
</script>

<style>

</style>