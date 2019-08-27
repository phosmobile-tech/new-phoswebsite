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
    </section>
      <section>
      <div class="img-container">
        <ul class="work-list">
          <li class="img-list" v-for="edge in $page.datawork.edges" :key="edge.node.id">
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

      <!-- <section class="article-container">
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
      </section> -->
      <section>
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

      <section class="footer-section">
      <div class="footer-spacer"></div>
        <footer>
          <g-link></g-link>
          <div class="footer-content">
            <h2 class="footer-text">JUST REACH OUT! <span class="footer-span">Let's Chat.</span></h2>
          </div>
          <div class="footer-secondary">
            <div class="footer-contain">
              <ul class="footer-info">
                <li>&copy PhosMobile</li>
                <li>Contact Us</li>
              </ul>
              <ul class="footer-social">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </footer>
      
      </section>
  
  </Layout>
</template>

<page-query>
query dataWork {
  datawork: allDataWork {
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
  // data() {
  //     return {
  //       works: data.data.works
  //     }
  //   }
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

.sub-text {
  font-family: 'Barlow Condensed';
  float: right;
  margin-right: 150px;
  margin-bottom: 15px;
  margin-top: -15px;
  font-size: 20px;
}

.sub-link {
  font-size: 20px;
  float: right;
  margin-right: 120px; 
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

/* .img-title {
  text-decoration: none;
} */

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
  width: 50%;
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
  z-index: 0;
  bottom: 0;
  width: 100%;
  padding-top: 0;
  border: 0 solid white;
  border-top: 0px;
  transition: border .3s ease, padding .3s ease;
}

.footer-spacer{
  position: relative;
  z-index: -1;
  height: 50em;
}

footer .footer-content {
  /* position: fixed; */
  z-index: -1;
  left: 50%;
  width: 100%;
  text-align: center;
  /* transform: translateX(-50%); */
  transition: bottom .3s ease;
}
.footer-text{
  color: white;
  /* margin-top: -50px; */
}

.footer-contain ul {
  list-style-type: none;
  display: inline-flex;
}

.footer-contain ul li {
  margin-right: 15px;
    text-align: center;
}

</style>
