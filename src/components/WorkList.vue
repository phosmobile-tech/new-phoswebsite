<template>
  <div>
    <ul>
        <li>
          <div v-for="work in works" :key="work.id">
            <g-link :to="'/works/'+work.slug"><div :content="work.content">{{work.title}}</div></g-link>
          </div>
        </li>
    </ul>

    <ul>
      <li v-for="edge in $page.datawork.edges" :key="edge.node.id">
          {{ edge.node.title }}
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

<static-query>
query dataWork {
  datawork: allDataWork {
    edges{
      node{
        id
        title
        path
      }
    }
  }
}
</static-query>

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
    },
    props: {
      datawork
    }

}
</script>

<style>

</style> 