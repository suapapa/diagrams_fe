<template>
<input type="text" />
<div v-if="nodes !== null">
    <ul id="array-rendering">
        <li v-for="item in nodes" :key="item.node">
            from {{ item.module }} import {{ item.node }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
  data: () => ({
      nodes: null,
      filtered_nodes: null
  }),
  mounted(){
    fetch('http://172.30.5.213:8888/nodes')
        .then(res => res.json())
        .then(data => this.nodes = data)
    }
}
</script>

<style>

</style>