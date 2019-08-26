<template>
    <Layout>
        <div v-for="work in works" :key="work.id">
          <h2>{{ work.title }}</h2>
            <!-- <div :title="work.title" /> -->
            <div v-html="work.content" />
        </div>
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

<style>

</style>