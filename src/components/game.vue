<template>
  <div>
    <Tile v-bind:color='color' />
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
    return {
      color: 'hello'
    }
  },
}
</script>

<style scoped>

</style>