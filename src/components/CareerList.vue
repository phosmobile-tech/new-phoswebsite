<template>
  <div>
    <ul>
      <li v-for="edge in $page.careerdata.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    metaInfo: {
      title: 'Career List'
    }
}
</script>

<style>

</style> 