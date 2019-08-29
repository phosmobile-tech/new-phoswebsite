<template>
  <div>
      <Layout>
        <section class="container">
          <h1>RECENT PARTNERSHIP</h1>

          <WorkList></WorkList>
        </section>
      </Layout>

      
  </div>
</template>

<page-query>
query workData {
  workdata: allWorkData {
    edges{
      node{
        id,
        title,
        path
      }
    }
  }
}
</page-query>


<script>
import WorkList from '../components/WorkList'
export default {
   metaInfo: {
    title: 'Works'
  },
  components: {
     WorkList
  }
}
</script>

<style>

</style>