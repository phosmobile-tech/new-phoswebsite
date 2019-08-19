<template>
  <div>
    <ul>
        <li v-for="post in $pages.edges.posts" :key="post.id">
            <g-link to="post.node.path">{{ post.title }}</g-link>
        </li>
        <li>
            <g-link to="/pages/blogs/two">two</g-link>
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
    name: 'BlogTemplate'
}
</script>

<style>

</style>