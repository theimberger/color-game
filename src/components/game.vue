<template>
  <div class='game'>
    <div class='board'>
      <div class='tile' v-for='n in tileCount' v-bind:style='colorStyle' v-bind:key=n />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Game',
  components: {},
  props: {
    score: Number,
  },
  data: function() {
    const rowLength = (Math.floor(this.score ** .5) + 2)
    const factor = rowLength + 5
    const tileCount = rowLength ** 2

    const color = []
    for(let i = 0; i < 3; i += 1) {
      color.push(15 + Math.floor(Math.random() * 200))
    }
    
    const lighter = color.map(val => val + factor)
    const tileWidth = (300 - (6 * rowLength)) / rowLength

    const correctTile = Math.floor(Math.random() * tileCount) + 1

    return {
      colorStyle: {
        background: `rgb(${color.join(', ')})`,
        height: `${tileWidth}px`,
        width: `${tileWidth}px`,
      },
      lightColor: {
        background: `rgb(${lighter.join(', ')})`
      },
      tileCount,
      correctTile,
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
    width: 300px;
    position: relative;
    flex-wrap: wrap;
  }

  .tile {
    display: block;
    margin: 3px;
    border-radius: 10px;
    flex-shrink: 0;
  }
</style>