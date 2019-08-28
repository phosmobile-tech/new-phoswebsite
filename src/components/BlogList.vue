<template>
  <div>
    <section class="container">
      <h1>OUR BLOG</h1>
      <div>
        <ul class="work-list">
          <li class="img-list" v-for="edge in $page.blogdata.edges" :key="edge.node.id">
              <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    metaInfo: {
      title: 'Blog List'
    }
}
</script>

<style>

</style> 