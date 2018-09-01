<template>

  <div :class="{ todo, completed: todo.completed }">
    <b-card
            style="max-width: 100%"
            class="mb-2">
        <h2>{{ todo.name }}</h2>

        <div class="pretty p-switch p-fill" v-if="trashOpened == false">
          <input type="checkbox" v-model="todo.completed" @change="completeTodo(todo)" />
          <div class="state p-success">
              <label></label>
          </div>
        </div>

        <span v-if="confirmDelete" > Are you sure? -
          <button type="button" name="button" @click="okDelete(todo)">OK</button>
          <button type="button" name="button" @click="noDelete">NO</button>
        </span>
        <span @click="deleteTodo()"><font-awesome-icon icon="trash-alt" /></span>

    </b-card>
  </div>

</template>

<script>
import 'pretty-checkbox'

export default {
  name: 'Todo',
  props: ['todo', 'index'],
  data () {
    return {
      confirmDelete: false,
      trashOpened: false
    }
  },
  methods: {
    completeTodo: function (todo) {
      this.$emit('completed', { completed: todo.completed })
    },
    deleteTodo: function () {
      this.confirmDelete = true
      this.trashOpened = true
    },
    okDelete: function (index) {
      this.$emit('delete', index)
      this.confirmDelete = false
      this.trashOpened = false
    },
    noDelete: function () {
      this.confirmDelete = false
      this.trashOpened = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  span {
    float: right;
    color: #17a2b8;
    font-size: 1.125rem;
  }

  h2 {
    color: #868686;
    font-size: 1.5rem;
  }

  .todo {
    box-shadow: 1px 1px rgba(187,187,187, 0.38),
    2px 2px rgba(187,187,187, 0.24),
    3px 3px rgba(187,187,187, 0.14),
    4px 4px rgba(187,187,187, 0.06),
    5px 5px rgba(187,187,187, 0.00);
  }

  .card-body {
    padding: .5rem;
  }

  .card {
    border: none;
  }

  .card-body {
    background-color: #ffeb3b63;
  }

  .completed.card-body {
    background-color: #17b89a5e;
  }

  .todo.completed .card-body {
    background-color: #17b89a5e;
  }

</style>
