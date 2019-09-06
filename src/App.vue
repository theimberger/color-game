<template>
  <div id="app">
    <Game v-bind:score='score' />
  </div>
</template>

<script>
import Game from './components/game.vue'

export default {
  name: 'app',
  components: {
    Game
  },
  data: () => {
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
