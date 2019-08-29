<template>
<div>
  <Layout>
    <section class="main-section">
    <section class="container">
      <h1>SOLUTIONS BY DESIGN</h1>
      <div class="header-content">
      <span class="text">We build identities and experiences to <br> elevate and empower organizations.</span>
      <div class="header-span">
        <span class="header-text">HELPING OUR PARTNERS MOVE FORWARD THROUGH</span> <br>
        <span class="header-link"><g-link to="">Discovery & Strategy,</g-link><g-link to="">Branding,</g-link> <g-link to="">Interactive,</g-link><br> <g-link to="">Communications,</g-link> <g-link to="">Creative Production and</g-link><br> <g-link to="">Development Solutions</g-link></span>
      </div>
      </div>
    </section>

    <section class="container">
    </section>
      <section>
      <div class="img-container">
        <ul class="work-list">
          <li class="img-list" v-for="edge in $page.workdata.edges" :key="edge.node.id">
            <g-link :to="edge.node.path"><g-image :src="edge.node.img" class="img"/><span class="img-title">{{ edge.node.title }}</span></g-link>
          </li>
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
      </div>
      </section>

      <section class="container">
      <nav class="articles">
        <div class="contain">
          <ul>
            <li class="article-list">
              <g-link to=""></g-link>
              <div class="inner-content">
                <p class="categories">CULTURE, OUR TEAM</p>
                <h3>OUT OF FOCUS: CASHIERS</h3>
                <h6>BY KELLIE GROOVER</h6>
              </div>
            </li>

            <li>
              <g-link to=""></g-link>
              <div class="inner-content">
                <p class="categories">CULTURE, OUR TEAM</p>
                <h3>OUT OF FOCUS: CASHIERS</h3>
                <h6>BY KELLIE GROOVER</h6>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </section>
      </section>
  
  </Layout>
  
  </div>
</template>

<page-query>
query workData {
  workdata: allWorkData {
    edges{
      node{
        title,
        img,
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
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
  font-size: 80px;
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
  font-size: 15px;
  
}

.header-content {
  display: inline-flex;
}

.header-text {
  font-family: 'Barlow Condensed';
  font-size: 20px;
}

.header-link {
  font-size: 20px;
} 

.header-link a {
    color: #ff5c5c;
}

.header-span {
   margin-left: 100px; 
   line-height: 1.7;
}

.main-section {
  z-index: 1000;
  position: relative;
}

.img-container {
  margin-top: 15%;
}

.img {
  width: 250px;
  display: inline-block;
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
  padding-inline-start: 0px;
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

.contain {
  max-width: 80%;
  margin: 0 auto;
  border-top: 1px solid red;
}

/* @media screen and (max-width: 600px) {
  nav.articles ul {
    width: 30%;
  }
} */

nav.articles ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.125em;
  /* padding-inline-start: 100px; */
}

nav.articles ul li {
  display: inline-block;
  position: relative;
  padding: 7% 4%;
  cursor: pointer;
  /* display: block; */
}

.article-list {
  border-right: 1px solid red;
}

nav.articles ul li a {
  position: absolute;
  top: 0;
  left: 0;
  /* width: 40%; */
  /* height: 100%; */
}

.inner-content {
  pointer-events: none;
  transition: transform .3s ease;
}

.footer-section {
  background: #ff5c5c;
  color: white;
}

footer {
  position: fixed;
  height: 20em;
  /* left: 0;
  z-index: 0; */
  bottom: 0;
  width: 100%;
  padding-top: 0;
  border: 0 solid white;
  border-top: 0px;
  transition: border .3s ease, padding .3s ease;
}

.footer-spacer{
  /* background: #ff5c5c; */
  position: relative;
  z-index: -1;
  height: 32em;
  /* position: fixed; */
}

footer .footer-content {
  /* position: fixed; */
  z-index: -1;
  /* left: 50%; */
  width: 100%;
  text-align: center;
  /* transform: translateX(-50%); */
  transition: bottom .3s ease;
}
.footer-text{
  color: white;
  line-height: 0;
  margin-bottom: 5em;
  /* position: fixed; */
  /* margin-top: -50px; */
}

.footer-contain {
  text-align: center;
}

.footer-contain ul {
  list-style-type: none;
  display: inline-flex;
  /* padding-inline-start: 0px */
}

.footer-contain ul li {
  margin-right: 15px;
    text-align: center;
}

@media only screen and (min-width: 300px) and (max-width: 600px) {
  h1 {
    /* font-size: ; */
  }
  h2{
    font-size: x-large;
  }
  h3{

  }
  h6{

  }
  .text{
    font-weight: 800
  }
  .header-span {
    margin-left: 0;
  }
  .header-content{
    display: block;
  }
  .nav{
    /* margin-left: 5px;
    flex-direction: column; */
  }
  .aside-ul {
    position: inherit;
  }
  .aside-ul-left{

  }
  li{

  }
  /* nav.articles ul {
    width: 60%;
  } */
}

@media screen and (max-width: 600px) {
  nav.articles ul {
    /* width: 30%; */
  }
}

</style>
