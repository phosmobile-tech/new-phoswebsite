<template>
   <div>
      <Layout>
        <section class="container">
         <CareerList></CareerList>
        </section>
      </Layout>
  </div>
</template>

<page-query>
query careerData {
  careerdata: allCareerData {
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