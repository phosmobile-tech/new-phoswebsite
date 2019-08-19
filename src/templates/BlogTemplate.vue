<template>
  <div>
    <ul>
        <li v-for="post in $page.posts.edges" :key="post.id">
            <g-link :to="post.node.path">{{ post.node.title }}</g-link>
        </li>
    </ul>
      
  </div>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        path
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
      name: 'BlogTemplate'
    }
}
</script>

<style>

</style>