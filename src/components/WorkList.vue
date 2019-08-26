<template>
  <div>
    <ul>
      <li v-for="edge in $page.datawork.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '@/data/data.json'
import work from '@/data/work.json'
export default {
    metaInfo: {
      title: 'Work List'
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