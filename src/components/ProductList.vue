<template>
  <div>
    <ul>
      <li v-for="edge in $page.productdata.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    metaInfo: {
      title: 'Product List'
    }
}
</script>

<style>

</style> 