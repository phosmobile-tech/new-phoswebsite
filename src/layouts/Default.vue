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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
}

.layout {
  margin: 0;
  padding: 0;
  max-width: 100%;
}

.header {
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 80px; 
  padding-inline-start: 160px;
  padding-inline-end: 100px;
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

/* .footer {
    margin-top: 70%;
} */
</style>
