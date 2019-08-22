<template>
    <Layout>
        <WorkTemplate></WorkTemplate>
    </Layout>
</template>

<script>
import data from '@/data/data.json'

export default {
  data() {
    return {
      works: data.data.works
    }
  }
}
</script>