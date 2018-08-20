<template>
  <div class="todo-list">
    <TodoAdd @add="addTodo"/>
        <Todo v-for="(todo, index) in todos"
              :key="index"
              :todo="todo"
              @delete="deleteTodo(index)"/>
  </div>
</template>

<script>
import Todo from '@/components/Todo'
import TodoAdd from '@/components/TodoAdd'

export default {
  name: 'TodoList',
  components: {
    Todo,
    TodoAdd
  },
  data () {
    return {
      todos: [
        // {name: 'Todo 1', completed: false, id: 1},
        // {name: 'Todo 2', completed: false, id: 2}
      ]
    }
  },
  methods: {
    addTodo: function (todo) {
      this.todos.push(todo)
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
