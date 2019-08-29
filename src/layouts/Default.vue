<template>
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
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0px;
  padding: 0px;
  background: white;
  /* box-sizing: border-box; */
}

.layout {
  margin: 0;
  padding: 0;
  /* max-width: 100%; */
  box-sizing: border-box;
}

.header {
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 20px;
  height: 80px; 
  padding-inline-start: 160px;
  padding-inline-end: 160px;
  /* z-index: 11; */
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
  max-width: 1200px;
  padding-inline-start: 160px;
  margin-top: 15%;
  padding-inline-end: 160px;
  z-index: 10;
}

</style>
