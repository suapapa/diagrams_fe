<template>
  <h1>Diagrams Sandbox</h1>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/node_search">Nodes</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <div class="footer pt4 pb2">
    Copyright © 2020-Present MinJae Kwon for
    <a href="https://diagrams.mingrammer.com/">Diagrams</a> and 
    <a href="https://homin.dev">Homin Lee</a> for
    Diagrams Sandbox (this web app)
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
