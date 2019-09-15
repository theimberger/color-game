# Color Game
A simple game in which players select the off-color tiles

## Purpose for developing
Learn the basics of Vue.js, learn about progressive web applications


## Lessons from development
### Vue vs React
#### Props
##### 9/7/2019
Props in React are exceedingly simple.  You just pass them in the JSX, like so ```<MyComponent propName={'example'} />```.  Vue seems to have a number of way to pass props.  The one I found first was simply ```<MyVueComponent v-bind:myProp='propName' />```.

##### 9/8/2019
It also seems that you can drop the ```v-bind``` to just get ```<MyVueComponent :myProp='propName' />```.

#### Events
##### 9/8/2019
Events are really interesting in Vue.  It seems that the way you want to pass information back to the parent component from a child component in Vue is through event listeners.  In comparison to React where you can pass scoped functions to the child component.  For instance, say you have a counter that is passed to a number of children one of which updates it on a button press.  In React you might do something like this:

``` js
// parent component (indented to indicate we're within a class)
  updateCount = (e) => {
    this.setState({count: this.state.count += 1})
  }

  render() {
    return (
      <div>
        <ChildComponent count={count} updateCount={this.countHandler}>
      </div>
    )
  }
//


// child returns something like this
  <button onClick={this.props.updateCount} />
//

```

In Vue, this could be handled via a custom event, like so:
``` js
// parent
<template>
  <div>
    <ChildComponent @increment-count='incrementCount' /> // declaring our event and listening
  </div>
</template>

<script>
  import Child from './child.vue'

  export default {
    name: 'parent',
    components: {
      Child
    },
    methods: {
      incrementCount: function() {
        this.$set(this, 'count', this.count += 1)
      },
    },
    data: function() {
      return {
        count: 0,
      }
    },
  }
</script>
...

// child

<template>
  <div>
    <h1>Current Count: {{count}}</h1>
    <button v-on:click='addToCount' />
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    count: Number,
  },
  methods: {
    addToCount: function() { this.$emit('increment-count') } // firing our event
  },
}
</script>

```

#### Forcing re-renders
##### 9/9/2019
Per the article below, vue sometimes does not rerender components on prop change.  One way to correct this is to use a ```:key``` prop to generate an entirely new component.

### Building a progressive web app



## Resources
[On deploying a Vue application to Github Pages (Medium)](https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd)

[Vue Guide](https://vuejs.org/v2/guide/)

[On forcing re-renders](https://michaelnthiessen.com/force-re-render/)