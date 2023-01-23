<template>
  <div class="pa4">
  <PrismEditor
    class="my-editor"
    v-model="code"
    :highlight="highlighter"
    line-numbers
  ></PrismEditor>
  </div>
  <div>
    <button @click="reset">Reset to default template</button>
    <button @click="summit" class="summit">Summit</button>
  </div>
  <img v-if=" img_data !== '' " :src="img_data" />
  <div v-if=" err !== '' " class="error">
    <h2>!! ERROR !!</h2>
    <div v-if="msg !== ''" class="error">
      <h3>
        {{ msg }}
      </h3>
    </div>
    <pre>
      {{ err }}
    </pre>
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

import axios from "axios";
import store from "../store.js";

export default {
  components: { PrismEditor },
  data: () => ({
    code: "",
    defaultCode: "",
    img_data: "",
    err: "",
    msg: "",
    storedState: store.state,
  }),
  mounted() {
    console.log("home mounted");
    this.defaultCode = this.storedState.exampleCode;
    if (this.storedState.code === "") {
      console.log("loading example code...");
      this.code = this.defaultCode;
      store.setCode(this.code);
    } else {
      this.code = this.storedState.code;
    }
    this.getDiagram(this.code);
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.py); // languages.<insert language> to return html with markup
    },
    reset() {
      this.code = this.defaultCode;
    },
    summit() {
      store.setCode(this.code);
      this.getDiagram(this.code);
    },
    getDiagram(code) {
      let hash_val = this.hashCode(code);
      axios
        .post("https://homin.dev/dsb-api/diagram", {
          code: code,
        })
        // .post("https://homin.dev/dsb-api/diagram", code)
        .then((res) => {
          console.log(res);
          // this.err = res.data.err;
          // this.msg = res.data.msg;
          if (res.data.img !== undefined && res.data.img !== "") {
            this.img_data = "data:image/png;base64," + res.data.img;
            this.err = "";
            this.msg = "";
          } else {
            this.img_data = "";
            this.err = res.data.err;
            this.msg = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
  margin: 10px;
  padding: 8px;
  font-size: 14px;
}

button.summit {
  color: whitesmoke;
  background: darkslateblue;
}

.error {
  color: red;
}
</style>
