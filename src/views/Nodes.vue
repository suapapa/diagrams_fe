<template>
  <input type="text" placeholder="fuzzy search pattern" @keyup="onKeyUp" />
  <div v-if="filtered_nodes !== null">
    <ul id="array-rendering">
      <li v-for="item in filtered_nodes" :key="item.refIndex">
        from {{ item.item.module }} import {{ item.item.node }}
      </li>
    </ul>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import store from "../store.js";

export default {
  data: () => ({
    fuse: null,
    storedState: store.state,
    filtered_nodes: null,
  }),
  mounted() {
    fetch("http://127.0.0.1:8888/nodes")
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