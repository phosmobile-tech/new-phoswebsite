<template>
  <div>
    <ul>
      <li v-for="edge in $page.product.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
import work from '@/data/product.json'
export default {
    metaInfo: {
      title: 'Product List'
    },
    data() {
      return {
        works: data.data.works
      }
    }

}
</script>

<style>

</style> 