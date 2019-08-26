<template>
  <div>
      <Layout>
        <WorkList></WorkList>
        <!-- <DataWork></DataWork> -->
      </Layout>

      
  </div>
</template>

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