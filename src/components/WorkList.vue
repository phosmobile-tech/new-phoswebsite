<template>
  <div>
        <div>
          <ul class="work-list">
            <li class="img-list" v-for="edge in $page.workdata.edges" :key="edge.node.id">
                <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
    metaInfo: {
      title: 'Work List'
    }
}
</script>

<style>

</style> 