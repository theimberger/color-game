<template>
  <div id="app" class='wrapper'>
    <div class='info' v-if='showInstructions'>
      test your vision!  select the tile that is not the same color as the rest.
      <button v-on:click='hideInstructions'>start</button>
    </div>
    <div v-if='!showInstructions  && !gameOver' class='high'>
      high: {{ high > score ? high : score}}
    </div>
    <Game
      :score='currentHighest'
      :key='score'
      @update-score='updateScore'
      v-if='!showInstructions  && !gameOver'
    />
    <Scoreboard :score='score' :time='timeLeft' v-if='!showInstructions && !gameOver' :incorrect='incorrect' />
    <div v-if='gameOver' class='info'>
      game over 🙁<br>{{ high > score ? '' : 'new high' }}score: {{score}}
      <button v-on:click='reset'>start over</button>
    </div>
  </div>
</template>

<script>
import Game from './components/game.vue'
import Scoreboard from './components/scoreboard.vue'
import { setInterval, clearInterval } from 'timers';

export default {
  name: 'app',
  components: {
    Game,
    Scoreboard,
  },
  methods: {
    updateScore: function(correct) {
      if (correct) {
        this.setTimer()
        this.$set(this, 'incorrect', false)
        if (this.score >= this.currentHighest) {
          this.$set(this, 'currentHighest', this.currentHighest += 1)
        }
        this.$set(this, 'score', this.score += 1)
      } else {
        this.$set(this, 'incorrect', true)
        this.$set(this, 'score', this.score -= 2)
      }
    },
    tick: function() {
      if (this.tickInterval) clearInterval(this.tickInterval)
      this.tickInterval = setInterval(() => {
        const secondsPassed = Math.floor((this.startTime - Date.now()) / 1000)
        this.$set(this, 'timeLeft', 16 + secondsPassed)

        if (this.timeLeft < 0) {
          clearInterval(this.tickInterval)
          this.endGame()
        }
      }, 50)
    },
    setTimer: function() {
      this.$set(this, 'startTime', Date.now())
      this.tick()
    },
    hideInstructions: function() { this.$set(this, 'showInstructions', false) },
    endGame: function() {
      this.$set(this, 'gameOver', true)
      if (this.score > this.high) {
        window.localStorage.setItem('high', this.score)
        this.$set(this, 'high', this.score)
      }
    },
    reset: function() {
      this.$set(this, 'gameOver', false)
      this.$set(this, 'score', 0)
      this.$set(this, 'currentHighest', 0)
      this.$set(this, 'startTime', Date.now())
      this.$set(this, 'timeLeft', 15)
    },
  },
  data: function() {
    const high = typeof window.localStorage.high === 'undefined' ? 0 : window.localStorage.high

    return {
      score: 0,
      currentHighest: 0,
      startTime: Date.now(),
      timeLeft: 15,
      showInstructions: high < 1,
      gameOver: false,
      incorrect: false,
      high,
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
    font-family: 'Major Mono Display', monospace;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .info {
    font-size: 2em;
    width: 80%;
    min-width: 280px;
    text-align: center;
  }

  button {
    margin: 10px auto;
    display: block;
    font-size: 1em;
    padding: 5px 30px;
    border-radius: 10px;
    font-family: 'Major Mono Display', monospace;
  }

  .high {
    width: 300px;
    margin: 0 auto 10px;
    font-size: 1.5em;
  }
</style>
