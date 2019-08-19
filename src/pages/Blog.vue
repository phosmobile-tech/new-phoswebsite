<template>
   <div>
      <Layout>
         <BlogList></BlogList>

      </Layout>
      
      
  </div>
</template>

<script>
import BlogList from '../components/BlogList'
export default {
   metaInfo: {
    title: 'Blog'
  },
  components: {
     BlogList
  }
}
</script>

<style>

</style>