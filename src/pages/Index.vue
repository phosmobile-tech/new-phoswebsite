<template>
  <Layout>
    <section class="container">
      <h1>SOLUTIONS BY DESIGN</h1>

      <span class="text">We build identities and experiences to <br> elevate and empower organizations.</span>
      <div class="span-text">
        <span class="sub-text">HELPING OUR PARTNERS MOVE FORWARD THROUGH</span>
        <span class="sub-link"><g-link to="">Discovery & Strategy,</g-link><g-link to="">Branding,</g-link> <g-link to="">Interactive,</g-link><br> <g-link to="">Communications,</g-link> <g-link to="">Creative Production and</g-link><br> <g-link to="">Development Solutions</g-link></span>
      </div>
      </section>

    <section class="container">
      <!-- <GenList /> -->
    </section>
      <section>
      <div class="img-container">
        <ul class="work-list">
          <li class="img-list" v-for="work in works" :key="work.id">
            <g-link :to="'/works/'+work.slug"><g-image :src="work.img" class="img"/></g-link>
          </li>
          <!-- <li class="img-list">
            <g-link to="/works/gemstone"><picture><img src="http://gemstoneijmb.com/images/svg/logo.svg" alt="" class="img"></picture> </g-link>
          </li> -->
          
          <!-- <li class="img-list">
            <g-link to="/works/work-one"><img src="/works/swi.jpg" alt="" class="img"></g-link>
          </li> -->
          <!-- <li class="img-list">
            <g-link to="/works">See more works</g-link>
          </li> -->
        </ul>
      </div>
      </section>

      <section class="container">
          <h2>LET’S BUILD SOMETHING GREAT. TOGETHER.</h2>
          <div class="content">
            <p class="text">We are a strategic, creative studio based out of Savannah, Georgia. <br> Our close team of innovative professionals is passionate about partnering <br> with good people and organizations to design exceptional custom solutions. <br> We approach each project and design challenge with process-driven <br> intentionality to inform the identities and experiences we create. <br> We endeavor toward work that drives action, and generates results. <br> Are you looking to have greater impact? We’d love to help.</p>


            <aside>
              <ul class="aside-ul">
                <li><g-link to="" class="aside-a">Our Services</g-link></li>
                <li><g-link to="" class="aside-a">Read Our Story</g-link></li>
                <li><g-link to="" class="aside-a">Contact Us</g-link></li>
              </ul>
            </aside>
          </div>
      </section>

      <section class="container">
        <div>
          <div class="content-right">
            <h2>FROM THE INSIDE OUT.</h2>
            <p class="text">Our team and our culture is fueled by passion: for what we do, for the people <br> we do it for, and for the people we work alongside. Take a glimpse behind the <br> scenes at the heart of our company and the people who make up Focus Lab.</p>
          </div>
            <aside class="cont">
                <ul class="aside-ul-left">
                  <li><g-link to="" class="aside-a">Our Digest</g-link></li>
                  <li><g-link to="" class="aside-a">Our Core Values</g-link></li>
                  <li><g-link to="" class="aside-a">Meet Our Team</g-link></li>
                </ul>
            </aside>
        </div>
      </section>

      <section class="container">
        <div class="img-container">
          <span class="logo">#LOGOS</span>
        <!-- <ul class="work-list">
          <li>
            <g-link to="/works"><img src="../phos-logo.png" alt="" class="img"></g-link>
          </li>
          <li>
            <g-link to="/works"><img src="../phos-logo.png" alt="" class="img"></g-link>
          </li>
          <li>
            <g-link to="/works"><img src="../phos-logo.png" alt="" class="img"></g-link>
          </li>
        </ul> -->
      </div>
      </section>

      <section class="article-container">
        <ul class="article-list">
          <li class="categories">
            <g-link to="" class="category-text"></g-link>
              <div class="article-left">
                <span class="article-top">CULTURE, OUR TEAM</span>
                <h3>OUT OF FOCUS: <br> CASHIERS</h3>
                  <h6>BY KELLIE GROOVER</h6>
              </div>
            
          </li>
          <li class="categories">
            <g-link to="" class="category-text"></g-link>
              <div>
                <h3>BEST PRACTICES <br> FOR LAUNCHING <br> YOUR BRAND</h3>
                  <h6>BY SUMMER TEAL</h6>
              </div>
            
          </li>
        </ul>
      </section>
  
  </Layout>
</template>

<script>
import data from '@/data/data.json'
// import works from '../'
// import GenList from '../components/GenList'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
      return {
        works: data.data.works
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.home-links a {
  margin-right: 1rem;
}

h1 {
  font-family: 'Barlow Condensed';
  font-size: 90px;
  color: #2e3c40;
  margin-top: 12%;
}

h2 {
  color: #ff5c5c;
  font-family: 'Barlow Condensed';
  font-weight: bold;
  font-size: 45px;
  line-height: 0.1;
}

h3 {
  color: #2e3c40;
  font-family: 'Barlow Condensed';
  font-weight: bold;
  font-size: 45px;
}

h6 {
   color: #2e3c40;
  font-family: 'Barlow Condensed';
  font-weight: bold;
  font-size: 18px;
}

.text {
  font-family: 'Montserrat', sans-serif;
  color: #2e3c40;
  line-height: 2;
  font-size: 18px;
  
}
.sub-text {
  font-family: 'Barlow Condensed';
  float: right;
  margin-right: 265px;
  margin-bottom: 15px;
  margin-top: -15px;
  font-size: 20px;
}
.sub-link {
  font-size: 20px;
  float: right;
  margin-right: 235px; 
  
} 

.sub-link a {
    color: #ff5c5c;
}

.span-text {
  margin-top: -50px;
  float: right;
  /* margin-left: 310px;  */
  line-height: 1.5;
}

.img-container {
  margin-top: 15%;
}

.img {
  width: 400px;
}

.work-list {
    display: flex;
    list-style-type: none;
    width: fit-content;
    padding-inline-start: 0;
    padding-inline-end: 0;
}
.img-list {
  margin-right: 20px;
}
.content {
  margin-top: 5%;
}

.aside-ul {
  float: right;
  position: relative;
  list-style-type: none;
  width: 25%;
  margin-top: -220px;
}

.aside-a {
  color: #ff5c5c;
  font-size: 22px;
}

.aside-ul-left {
  list-style-type: none;
  width: 25%;
}

.content-right {
  margin-top: -50px;
  float: right;
}

.video {
  margin-top: 10%;
}

.logo {
  font-size: 50px;
  text-align: center;
}

.categories {
    width: 50%;
    position: relative;
    display: inline-block;
    /* padding: 10px 7px; */
}

.category-text {
  text-decoration: none;
  /* display: block; */
}

.article-list {
  list-style-type: none;
  border-top: 1px solid red;
  /* display: contents; */
}

.article-top {
  font-family: 'Barlow Condensed';
  font-size: 18px;
}

.article-left {
  border-right: 1px solid red;
  padding-top: 0;
}

.article-container {
  margin-top: 15%;
  /* display: block; */
}

/* .article-container {
  display: block;
} */


</style>
