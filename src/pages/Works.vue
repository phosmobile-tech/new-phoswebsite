<template>
  <div>
      <Layout>
        <WorkList></WorkList>
        <!-- <DataWork></DataWork> -->
      </Layout>

      
  </div>
</template>

<page-query>
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
</page-query>

<script>
import WorkList from '../components/WorkList'
// import DataWork from '../templates/DataWork'
export default {
   metaInfo: {
    title: 'Works'
  },
  components: {
     WorkList,
    //  DataWork
  }
}
</script>

<style>

</style>