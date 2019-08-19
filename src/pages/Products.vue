<template>
  <div>
      <Layout>

        <ProductList></ProductList>
      </Layout>

      
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
export default {
   metaInfo: {
    title: 'Products'
  },
  components: {
     ProductList
  }
}
</script>

<style>

</style>