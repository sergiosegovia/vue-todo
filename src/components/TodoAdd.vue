<template>

  <div class="todo-add">
    <h3>Add a new ToDo to your list</h3>
    <form id="todo-add-form">
      <input
        type="text"
        name="todo-add"
        placeholder="Write here the new task"
        v-model="name" />
      <button type="button" name="button" @click="add">Add Todo</button>
    </form>
  </div>

</template>

<script>

export default {
  name: 'TodoAdd',
  data () {
    return {
      name: null,
      completed: false,
      id: null
    }
  },
  methods: {
    add: function () {
      this.$emit('add', { name: this.name, completed: this.completed, id: this.id++ })
      document.getElementById('todo-add-form').reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
