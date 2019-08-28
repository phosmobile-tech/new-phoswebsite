<template>
  <div>
      <Layout>
        <ProductList></ProductList>
      </Layout>  
  </div>
</template>

<page-query>
query productData {
  productdata: allProductData {
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
import ProductList from '../components/ProductList'
export default {
   metaInfo: {
    title: 'Works'
  },
  components: {
     ProductList
  }
}
</script>

<style>

</style>