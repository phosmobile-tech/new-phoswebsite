<template>
   <div>
      <Layout>

         <CareerList></CareerList>
      </Layout>
  </div>
</template>

<script>
import CareerList from '../components/CareerList'
export default {
   metaInfo: {
    title: 'Career'
  },
  components: {
     CareerList
  }
}
</script>

<style>

</style>