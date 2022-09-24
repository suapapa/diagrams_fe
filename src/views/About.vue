<template>
  <div class="about">
    <p class="f4 pl4 pr4 tc">
    <b>Diagrams Sandbox</b> is an apppcation which 
    can draw cloud system architecture on web with 
    <b><a href="https://diagrams.mingrammer.com/">Diagrams</a></b>
    script.
    </p>

      <!-- <img src="../assets/diagrams-sandbox.png" /> -->
      <img src="../assets/dsb.png" />
    <div class="w-50 tl center">
      <p class="f4">
        This Appication is consits of four part which is written in different
        programming languages.
      </p>
      <div class="center f5">
      <div class="tl center pl3">
        <p> - Frontend written in Vue.</p>
        <p> - Backend written in Go to provides api server.</p>
        <p> - Proxy written in Go to use Diagrams with stdin and stdout.</p>
        <p> - Diagrams (main engine) witten in Python (by MinJae Kwon).</p>
      </div>
      </div>

      <p class="f4">
      It also provide fuzzy search page of Nodes in Diagrams.
      </p>
    </div>
  </div>
</template>
