<template>
    <Layout>
        <WorkTemplate></WorkTemplate>
    </Layout>
</template>

<script>
import data from '@/data/data.json'

export default {
  name: 'Single Work',
  data() {
    return {
      works: data.data.works
    }
  }
}
</script>