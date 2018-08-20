<template>

  <div class="todo">
    <h3>{{ todo.name }}</h3>
    <span>Completed: {{ todo.completed }}</span>
    <button type="button"
            name="delete-todo"
            @click="deleteTodo(index)">Delete Todo</button>
  </div>

</template>

<script>
export default {
  name: 'Todo',
  props: ['todo', 'index'],
  data () {
    return {

    }
  },
  methods: {
    deleteTodo: function (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
