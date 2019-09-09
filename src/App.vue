<template>
  <div id="app">
    <Game v-bind:score='score' @update-score='updateScore' :key='score' />
    <Score v-bind:score='score' />
  </div>
</template>

<script>
import Game from './components/game.vue'

export default {
  name: 'app',
  components: {
    Game
  },
  methods: {
    updateScore: function(score) {
      console.log(score)
      this.$set(this, 'score', score)
    },
  },
  data: function() {
    return {
      score: 0,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;

}
</style>
