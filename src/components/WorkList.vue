<template>
  <div>
    <ul>
        <li>
          <div  v-for="work in works" :key="work.id">
            <g-link :to="'/works/'+work.title">{{work.title}}</g-link>
            </div>
        </li>
    </ul>
      
  </div>
</template>

<script>
import data from '@/data/data.json'
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