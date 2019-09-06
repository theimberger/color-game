<template>
  <div>
    <Tile v-for='n in 10' v-bind:style='colorStyle' v-bind:key=n />
  </div>
</template>

<script>
import Tile from './tile.vue'

export default {
  name: 'Game',
  components: {
    Tile
  },
  props: {
    score: Number,
  },
  data: () => {
    const color = []
    for(let i = 0; i < 3; i += 1) {
      color.push(15 + Math.floor(Math.random() * 200))
    }
    return {
      colorStyle: {
        background: `rgb(${color.join(', ')})`
      },
    }
  },
}
</script>

<style scoped>

</style>