<template>
  <div>
    <!-- <section class="container">
      
    </section> -->
    <section class="container">
      <h1>RECENT PARTNERSHIP</h1>
        <div>
          <ul class="work-list">
            <li class="img-list" v-for="edge in $page.datawork.edges" :key="edge.node.id">
                <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
            </li>
          </ul>
        </div>
    </section>
  </div>
</template>

<script>
import data from '@/data/data.json'
import work from '@/data/work.json'
export default {
    metaInfo: {
      title: 'Work List'
    }
    // data() {
    //   return {
    //     works: data.data.works
    //   }
    // }
}
</script>

<style>

</style> 