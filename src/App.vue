<template>
  <h1>Diagrams Sandbox</h1>
  <img alt="Diagrams logo" src="./assets/diagrams.png" />
  <div class="reference">
    <ul>
      <li>
        <a href="https://diagrams.mingrammer.com/">Official Diagrams site</a>
      </li>
    </ul>
  </div>
  <PrismEditor
    class="my-editor"
    v-model="code"
    :highlight="highlighter"
    line-numbers
  ></PrismEditor>
  <div>
    <button @click="reset">Reset to default template</button>
    <button @click="summit" class="summit">Summit</button>
  </div>
  <img v-if="img_data !== ''" :src="img_data" />
  <div v-if="err !== ''">
    {{ err }}
  </div>
  <div class="footer">
    Copyright © 2020-Present mingrammer for Diagrams and Homin Lee for Diagrams
    Sandbox
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

import axios from 'axios'

export default {
  name: "App",
  components: { PrismEditor },
  data: () => ({
    code: `from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB

with Diagram("Web Service", show=False):
    ELB("lb") >> EC2("web") >> RDS("userdb")`,
    default_code: `from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB

with Diagram("Web Service", show=False):
    ELB("lb") >> EC2("web") >> RDS("userdb")`,
    img_data: "",
    err: ""
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.py); // languages.<insert language> to return html with markup
    },
    reset() {
      this.code = this.default_code;
    },
    summit() {
      // TODO: fix to actual address
      axios.post('http://localhost:8888/diagram', this.code)
      .then(res => {
        console.log(res);
        this.err = res.data.err;
        if (res.data.img !== "") {
          console.log("here i come")
          this.img_data = "data:image/png;base64,"+res.data.img
        } else {
          this.img_data = ""
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
  },
};
</script>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

/* 전문가의 손길 필요 */
button {
  border: none;
  border-radius: 4px;
  color: #000;
  background: darkgray;
  padding: 5px;
  font-size: 14px;
}

button.summit {
  color: whitesmoke;
  background: darkslateblue;
}
</style>
