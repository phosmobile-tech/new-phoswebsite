<template>
  <div>
    <div>
        <ul>
            <li v-for="post in $pages.posts.path" :key="post.id">
                <g-link to="/post.node.path"> {{ post.node.path }} </g-link>
            </li>
        </ul>
    </div>
      
  </div>
</template>

<script>
export default {
    metaInfo: {
        title: Works
    }
}
</script>

<style>

</style>