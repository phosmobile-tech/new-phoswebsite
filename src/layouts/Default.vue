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
    <footer class="footer">All Rights Reserved | phosmobile.com</footer>
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
  padding-left: 80px;
  line-height: 1.5;
  width: 1000px;
}

.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 80px;
}

.nav__link {
  margin-right: 50px;
  text-decoration: none;
}

.footer {
    margin-top: 70%;
}
</style>
