<template>
    <div class="todo-add">
      <h3>Add a new ToDo to your list</h3>
        <input
          type="text"
          name="todo-add"
          placeholder="Write here your new task"
          v-model="name" />
        <b-button variant="info" @click="add">Add ToDo</b-button>
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
      this.$emit('add', { name: this.name, completed: this.completed, id: this._uid })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  input {
    width: 100%;
    border: solid 2px #868687;
    padding: 0.125rem 0.250rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .btn {
    float: right;
  }

  .todo-add {
    margin-bottom: 3rem;
  }

</style>
