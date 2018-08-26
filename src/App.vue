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
          <li>
            <!-- <font-awesome-icon icon="bars" /> -->
          </li>
        </ul>
      </b-navbar>
    </header>
    <div class="container">
      <div class="add-panel" v-if="show">
        <TodoAdd @add="addTodo"/>
      </div>
      <div class="intro" v-if="showIntro">
        <h3>You haven't any todo yet. Just use the plus button to add one.</h3>

      </div>
      <TodoList :todos="todos" @todoListEmpty="checkTodoArray"/>
    </div>

  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'pretty-checkbox'

export default {
  name: 'App',
  data () {
    return {
      show: false,
      showIntro: true,
      todos: []
    }
  },
  components: {
    TodoList,
    TodoAdd
  },
  methods: {
    showTodoAdd: function () {
      this.show = !this.show
      if (this.todos.length === 0) {
        this.showIntro = !this.showIntro
      }
    },
    addTodo: function (todo) {
      this.todos.push(todo)
      this.show = !this.show
    },
    checkTodoArray: function () {
      if (this.todos.length === 0) {
        this.show = false
        this.showIntro = true
      } else {
        this.showIntro = false
      }
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

  .top-nav li {
    margin-left: .5rem;
    display: inline-block;
  }

  h3 {
    font-size: 1.25rem;
    color: #868686;
  }

  header {
    margin-bottom: 1rem;
  }

  .card {
    border: none;
  }

  .btn {
    padding: 0.125rem 0.25rem;
  }

  .intro-list {
    margin-top: 1rem;
  }

  .test {
    min-width: 100%;
    min-height: 78px;
    background-color: #80808026;
    border-radius: 0.25rem;
    padding: .5rem;
    margin-bottom: 1rem;
  }

  .test-title {
    max-width: 70%;
    min-height: 1.5rem;
    background-color: #80808030;
  }

  .pretty.p-switch .state:before {
    background-color: #17a2b8;
  }

  .pretty.p-switch .state:before {
    border: 1px solid #17a2b8;
  }

  .pretty.p-switch .state label:after {
    background-color: #fff !important;
  }

  .pretty.p-switch .state label {
    color: #949494;
  }

  .pretty.p-switch.p-fill input:checked~.state.p-success:before {
    background-color: #17b89a5e !important;
  }

  .pretty.p-switch input:checked~.state.p-success:before {
    border-color: #fff !important;
  }

</style>
