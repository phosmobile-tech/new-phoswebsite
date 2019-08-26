<template>
  <div>
    <ul>
        <li>
          <div v-for="work in works" :key="work.id">
            <g-link :to="work.path">{{work.title}}</g-link>
          </div>
        </li>
    </ul>

    <ul>
      <li v-for="edge in $page.datawork.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>

        <!-- <ul>
        <li v-for="post in $page.posts.edges" :key="post.id">
          <div v-for="work in works" :key="work.id">
            <g-link :to="post.node.path">{{ post.node.title }}</g-link>
          </div>
        </li>
    </ul>
       -->
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