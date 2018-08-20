<template>
  <div id="app">
    <header>
      <div class="brand">
        <h1>ToDo APP</h1>
      </div>
      <div class="top-nav">
        <ul>
          <li>Add</li>
        </ul>
      </div>
    </header>

    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoAdd
  },
  methods: {

  }
}
</script>

<style>

</style>
