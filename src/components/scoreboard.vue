<template>
  <div class='scoreboard'>
    <div :class='{ red: incorrect }'>{{score}}</div>
    <div class='timer'>:{{time >= 10 ? '' : '0'}}{{time}}</div>
  </div>
</template>

<script>
export default {
  name: 'Scoreboard',
  props: {
    score: Number,
    time: Number,
    incorrect: Boolean,
  },
}
</script>

<style scoped>
  .scoreboard, .timer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .scoreboard {
    width: 300px;
    margin: 0 auto;
    font-size: 3em;
  }

  .red {
    color: red;
  }
</style>