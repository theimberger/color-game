<template>
  <div class='board'>
    <div
      class='tile' v-for='n in tileCount'
      v-bind:style='[(n === correctTile) ? lightColor : colorStyle]'
      v-bind:key=n
      v-on:click='check(n === correctTile)'
    />
  </div>
</template>

<script>

export default {
  name: 'Game',
  props: {
    'score': Number,
  },
  methods: {
    check: function(correct) {
      if (correct) {
        this.$emit('update-score', correct)
      } else {
        this.$emit('update-score', correct)
      }
    },
    setBoard: function() {
      const rowLength = this.score >= 0 ? (Math.floor(this.score ** .5) + 2) : 2

      let factor =  60 - (this.score * 2)
      if (factor < 1) factor = 1
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
          background: `rgb(${lighter.join(', ')})`,
          height: `${tileWidth}px`,
          width: `${tileWidth}px`,
        },
        tileCount,
        correctTile,
      }
    },
  },
  data: function() {
    return this.setBoard()
  },
}
</script>

<style scoped>
  .board {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 300px;
    flex-wrap: wrap;
  }

  .tile {
    display: block;
    margin: 3px;
    border-radius: 10px;
    flex-shrink: 0;
    cursor: pointer;
  }
</style>