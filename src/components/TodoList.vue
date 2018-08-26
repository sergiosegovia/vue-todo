<template>
  <div class="todo-list">
      <Todo v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            @delete="deleteTodo(index)"
            @completed="completeTodo(todo, index)"/>

            <div class="intro-list" v-if="todos.length === 0">
              <ul>
                <li>
                  <div class="test">
                    <div class="test-title">
                    </div>
                  </div>
                </li>
                <li>
                  <div class="test">
                    <div class="test-title">
                    </div>
                  </div>
                </li>
                <li>
                  <div class="test">
                    <div class="test-title">
                    </div>
                  </div>
                </li>
                <li>
                  <div class="test">
                    <div class="test-title">
                    </div>
                  </div>
                </li>
                <li>
                  <div class="test">
                    <div class="test-title">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
  props: ['todos'],
  data () {
    return {

    }
  },
  methods: {
    completeTodo: function (todo, index) {

    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
      if (this.todos.length === 0) {
        this.$emit('todoListEmpty', { show: false })
      } else {
        this.$emit('todoListEmpty', { showIntro: false })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
