<template>
<input type="text" @keyup="fuzzy_search" :placeholder="ptn" />
<div v-if="filtered_nodes !== null">
    <ul id="array-rendering">
        <li v-for="item in filtered_nodes" :key="item.refIndex">
            from {{ item.item.module }} import {{ item.item.node }}
        </li>
    </ul>
</div>
</template>

<script>
import Fuse from 'fuse.js'

export default {
  data: () => ({
      fuse: null,
      ptn: "",
      filtered_nodes: null
  }),
  mounted(){
    fetch('http://172.30.5.213:8888/nodes')
        .then(res => res.json())
        .then(data => {
            this.fuse = new Fuse(data, {keys: ["module", "node"]})
        })
  },
  methods: {
    fuzzy_search(e) {
        this.ptn = e.target.value
        console.log("fuzzy serch", this.ptn)
        this.filtered_nodes = this.fuse.search(this.ptn)
    }
  }
}
</script>

<style>

</style>