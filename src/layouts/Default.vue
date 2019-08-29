<template>
<div>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About Us</g-link>
        <g-link class="nav__link" to="/works">Works</g-link>
        <g-link class="nav__link" to="/careers">Careers</g-link>
        <g-link class="nav__link" to="/products">Products</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/contact">Contact Us</g-link>
      </nav>
    </header>
    <slot/>
    <!-- <footer class="footer">All Rights Reserved | phosmobile.com</footer> -->
    
  </div>

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
                <li> &copy PhosMobile</li>
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
</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap');

/* @media screen and (min-width: 400px) {
  body {
    margin-left: 20px;
    margin-right: 20px; 
    }
}

@media screen and (max-width: 992px) {
  .column {
    width: 50%;
  }
} */

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */


@media only screen and (min-width: 768px) {
  body {
    /* background: blue; */
    }
} 

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0px;
  padding: 0px;
  background: white;
}

.layout {
  max-width: 1000px;
  display: block;
  margin: 0 auto;
}

.header {
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 80px; 
}

.nav {
  margin-left: 17%;
}

.nav__link {
  margin-right: 50px;
  text-decoration: none;
  font-size: 18px;
}

.container {
  margin-top: 15%;
  padding-inline-end: 0px;
  z-index: 10;
}

@media only screen and (min-width: 300px) {
  body {
    /* max-width: 90%; */
    /* padding-left: 50%; */
  } 
  .layout{
    /* display: inline; */
    /* margin: 0; */
    /* padding: 0 10px; */
  }
  h1 {
    /* font-size: ; */
  }
  .nav__link{
    /* font-size: 20px; */
  }
  .header {
    /* margin: 0;
    align-items: center;
  margin-top: 20px;
  height: 80px; 
  padding-inline-start: 80px;
  padding-inline-end: 80px; */
    /* flex-direction: column; */
  }
  .text{
    /* font-size: 20px */
    font-weight: 800
  }
  .nav{
    /* margin-left: 5px;
    flex-direction: column; */
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
