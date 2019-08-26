<template>
    <Layout>
        <div v-for="work in works" :key="work.id">
            <div :title="work.title" />
            <div v-html="work.content" />
        </div>
    </Layout>
</template>


<script>
import works from '@/data/data.json'

export default {
    data() {
      return {
        works: data.data.works
      }
    }
}
</script>

<style>

</style>