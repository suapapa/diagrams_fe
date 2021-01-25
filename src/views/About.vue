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
      <ul>
        <li> Frontend written in Vue (Javasciprt) provides web frontend.</li>
        <li> Backend written in Go provides api server.</li>
        <li> Diagrams witten in Python (by mingrammer)</li>
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
