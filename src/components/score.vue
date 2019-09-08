<template>
  <div class='score-'>
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
  data: function() {
    const color = []
    for(let i = 0; i < 3; i += 1) {
      color.push(15 + Math.floor(Math.random() * 200))
    }
    const tileCount = (Math.floor(this.score ** .5) + 2) ** 2
    return {
      colorStyle: {
        background: `rgb(${color.join(', ')})`
      },
      tileCount,
    }
  },
}
</script>

<style scoped>
  .board, .game {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .board {
    height: auto;
    width: 250px;
    position: relative;
    flex-wrap: wrap;
  }

</style>