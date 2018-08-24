<template>
  <div id="app">
    <header>
      <b-navbar type="dark" variant="info">
        <b-navbar-brand href="#">ToDo APP</b-navbar-brand>
        <ul class="top-nav">
          <li>
            <font-awesome-icon icon="times-circle"
                               @click="showTodoAdd"
                               v-if="show"/>
            <font-awesome-icon icon="plus-circle"
                               @click="showTodoAdd"
                               v-else/>
          </li>
        </ul>
      </b-navbar>
    </header>

    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  components: {
    TodoList,
    TodoAdd
  },
  methods: {
    showTodoAdd: function () {
      this.show = !this.show
    }
  }
}
</script>

<style>
  ul {
    padding: 0px;
    margin: 0px;
  }

  li {
    list-style: none;
  }

  .navbar-brand {
    font-size: 1.5rem;
  }

  .top-nav {
    font-size: 1.5rem;
    color: #fff;
  }

  h3 {
    font-size: 1.25rem;
    color: #868686;
  }

  header {
    margin-bottom: 1rem;
  }

  .btn {
    padding: 0.125rem 0.25rem;
  }
</style>
