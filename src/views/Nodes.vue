<template>
  <div class="">
  <input type="text" placeholder="fuzzy search pattern" @keyup="onKeyUp" />
  </div>
  <div class="nodes w-50 pa4 center" v-if="filtered_nodes !== null">
    <div class="tl" v-for="item in filtered_nodes" :key="item.refIndex">
      <button class="r" @click="onCopy(item.item.module, item.item.node)">COPY</button>
      from <b>{{ item.item.module }}</b> import <b>{{ item.item.node }}</b>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import store from "../store.js";

export default {
  data: () => ({
    fuse: null,
    filtered_nodes: null,
    storedState: store.state,
  }),
  mounted() {
    fetch("https://homin.dev/dsb-api/nodes")
      .then((res) => res.json())
      .then((data) => {
        console.log("loading nodes...");
        this.fuse = new Fuse(data, { keys: ["module", "node"] });
        this.fuzzySearch(this.storedState.searchPattern);
      });
  },
  methods: {
    onKeyUp(e) {
      this.fuzzySearch(e.target.value);
    },
    onCopy(m, n) {
      console.log(m, n);
      navigator.clipboard.writeText("from " + m + " import " + n);
    },
    fuzzySearch(ptn) {
      console.log("fuzzy serch", ptn);
      this.filtered_nodes = this.fuse.search(ptn);
      store.setSearchPattern(ptn);
    },
  },
};
</script>

<style>
</style>