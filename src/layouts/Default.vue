<template>
<div>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="site-name" to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
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

  <!-- <section class="footer-section">
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
      
      </section> -->
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
  /* width: 100%; */
  /* overflow: scroll; */
  z-index: 300;
}

.site-name{
  /* display: block; */
  /* float: left;
  font-size: 2em;
  padding: 0 20px 0 20px;
  text-decoration: none; */
}

/* nav */

.nav {
  margin-left: 17%;
  /* display: flex; */
}

/* .header .menu-btn {
  display: none;
} */

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

 /* toggle bar menu */

.header .nav {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
  /* margin-left: 240px; */
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: #333 .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .nav {
  /* min-height: 0; */
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media only screen and (max-width: 480px) {
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
  .site-name{
    color: white;
    text-decoration: none;
  }
  .nav__link{
        color: white;
  }
  .header {
    display: block;
    background: #ff5c5c;
    height: fit-content;
    margin-top: 0;
    overflow: hidden;
  }
  .text{
    font-weight: 800
  }
  /* .nav{
    display: grid;

  } */

 

}

/* 48em = 768px */

@media (min-width: 48em) {
  /* .header .nav__link {
    float: left;
  }
  .header .nav__link { */
    /* padding: 20px 30px; */
  /* }
  .header .nav{
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  } */
}


</style>
