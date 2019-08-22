<template>
<Layout>
  <section>
    <div v-for="work in works" :key="work.id">
        <h1 v-html="work.title"></h1>
    </div>
      <aside>
    <h4>{{work.static}}</h4>
          </aside>        
          <div class="content">
            <p>Outreach needed to re-energize an industry-leading sales engagement platform and promote a fun company culture. In a saturated, jargon-filled market, it was our first challenge to give this work-hard/play-hard team a stand-out brand makeover. But the real challenge came in redesigning and developing a fluid website that could communicate how intuitive and rewarding their platform is to use — while capturing everything Outreach offers.</p>
          </div>
      
          <aside>
            <p>SERVICES PROVIDED</p>
            <g-link to="">Branding</g-link>
            <g-link to="">Interactive</g-link>
            <g-link to="">Communications</g-link>
            <g-link to="">Development Soltions</g-link>
          </aside>
        </section>
        <section class="container">
          <p>We helped Outreach tell their story through a bold new identity and a robust online experience.</p>
        </section>
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