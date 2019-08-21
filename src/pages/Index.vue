<template>
  <Layout>
    <section>
      <h1>SOLUTIONS BY DESIGN</h1>

      <span>We build identities and experiences to <br> elevate and empower organizations.</span>
      <div class="span-text">
        <span class="sub-text">HELPING OUR PARTNERS MOVE FORWARD THROUGH</span>
        <span class="sub-link"><a href="#">Discovery & Strategy,</a><a href="#">Branding,</a> <a href="#">Interactive,</a><br> <a href="#">Communications,</a> <a href="#">Creative Production and</a><br> <a href="#">Development Solutions</a></span>
      </div>
      </section>

      <section>
      <div class="img-container">
        <ul class="work-list">
          <li>
            <a href="#"><img src="../phos-logo.png" alt="" class="img"></a>
          </li>
          <li>
            <a href="#"><img src="../phos-logo.png" alt="" class="img"></a>
          </li>
          <li>
            <a href="#"><img src="../phos-logo.png" alt="" class="img"></a>
          </li>
          <li>
            <a href="#">See more works</a>
          </li>
        </ul>
      </div>
      </section>

      <section class="container">
          <h2>LET’S BUILD SOMETHING GREAT. TOGETHER.</h2>
          <div class="content">
            <p>We are a strategic, creative studio based out of Savannah, Georgia. <br> Our close team of innovative professionals is passionate about partnering <br> with good people and organizations to design exceptional custom solutions. <br> We approach each project and design challenge with process-driven <br> intentionality to inform the identities and experiences we create. <br> We endeavor toward work that drives action, and generates results. <br> Are you looking to have greater impact? We’d love to help.</p>


            <aside>
              <ul class="aside-ul">
                <li><a href="#" class="aside-a">Our Services</a></li>
                <li><a href="#"  class="aside-a">Read Our Story</a></li>
                <li><a href="#" class="aside-a">Contact Us</a></li>
              </ul>
            </aside>
          </div>
      </section>

      <section>
        <div class="video">
          <video width="850" height="450" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section class="container">
        <div>
          <div class="content-right">
            <h2>FROM THE INSIDE OUT.</h2>
            <p>Our team and our culture is fueled by passion: for what we do, for the people <br> we do it for, and for the people we work alongside. Take a glimpse behind the <br> scenes at the heart of our company and the people who make up Focus Lab.</p>
          </div>
            <aside class="cont">
                <ul class="aside-ul-left">
                  <li><a href="#" class="aside-a">Our Digest</a></li>
                  <li><a href="#" class="aside-a">Our Core Values</a></li>
                  <li><a href="#" class="aside-a">Meet Our Team</a></li>
                </ul>
            </aside>
        </div>
      </section>

      <section class="container">
        <div class="img-container">
          <span class="logo">#LOGOS</span>
        <ul class="work-list">
          <li>
            <a href="#"><img src="../phos-logo.png" alt="" class="img"></a>
          </li>
          <li>
            <a href="#"><img src="../phos-logo.png" alt="" class="img"></a>
          </li>
          <li>
            <a href="#"><img src="../phos-logo.png" alt="" class="img"></a>
          </li>
        </ul>
      </div>
      </section>

      <section class="container">
        <hr>
        <ul class="article-list">
          <li class="categories">
            <a href="" class="category-text">
              <div>
                <span class="article-top">CULTURE, OUR TEAM</span>
                <h3>OUT OF FOCUS: <br> CASHIERS</h3>
                  <h6>BY KELLIE GROOVER</h6>
              </div>
            </a>
          </li>
          <li class="categories">
            <a href="" class="category-text">
              <div>
                <h3>BEST PRACTICES <br> FOR LAUNCHING <br> YOUR BRAND</h3>
                  <h6>BY SUMMER TEAL</h6>
              </div>
            </a>
          </li>
        </ul>
      </section>
  
  </Layout>
</template>

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

p {
  font-family: 'Montserrat', sans-serif;
  color: #2e3c40;
  line-height: 2;
  font-size: 15px;
}
.sub-text {
  font-family: 'Barlow Condensed';
  float: right;
  margin-right: 335px;
  margin-bottom: 15px;
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
  margin-left: 310px; 
}

.img-container {
  margin-top: 15%;
}

.img {
  max-width: 300px;
}

.container {
  margin-top: 10%;
}

.work-list {
    display:flex;
    list-style-type: none;
    width: 50%;
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

hr {
  color: #ff5c5c;
}

.categories {
    width: 30%;
}

.category-text {
  text-decoration: none;
  /* display: block; */
}

.article-list {
  list-style-type: none;

  border-right: 1px #ff5c5c;
  padding: 5% 7%;
  display: contents;
}

.article-top {
  font-family: 'Barlow Condensed';
  font-size: 18px;
}


</style>
