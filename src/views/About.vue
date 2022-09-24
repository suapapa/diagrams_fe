<template>
  <div class="about">
    <p>
    <b>Diagrams Sandbox</b> is an application which 
    can draw cloud system architecture on web with 
    <b><a href="https://diagrams.mingrammer.com/">Diagrams</a></b>
    script.
    </p>

    <p>
      This Appication consits of thee part which is written in different
      programming languages.
      <!-- <img src="../assets/diagrams-sandbox.png" /> -->
      <img src="https://homin.dev/asset/blog/img/dsb.png" />
      <ul>
        <li> Frontend written in Vue.</li>
        <li> Backend written in Go to provides api server.</li>
        <li> Proxy written in Go to use Diagrams with stdin and stdout.</li>
        <li> Diagrams (main engine) witten in Python (by MinJae Kwon).</li>
      </ul>
    Because of Diagrams script actually a Python script. This app use
    gVisor, an application kernel for containers
    to run it in safe environment.
    </p>

    <p>
    It also provide fuzzy search page of Nodes in Diagrams.
    </p>
  </div>
</template>
