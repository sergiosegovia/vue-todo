<template>

  <div :class="{ todo, completed: todo.completed }">
    <b-card style="max-width: 100%" class="mb-2">

      <div class="todo-name">
        <div class="todo-name-editor" v-if="showEditTodoName">
          <input v-model="todo.name" type="text" autofocus autocapitalize>
          <b-button variant="info" @click="closeEditTodoName">OK</b-button>
        </div>
        <h2 @click="editTodoName" v-else class="underline">{{ todo.name }}</h2>
      </div>

      <div class="todo-description">
        <div class="todo-desciption-editor" v-if="showEditTodoDesc">
          <b-form-textarea v-model="todo.description"
                           :rows="3"
                           :max-rows="6"
                           no-resize>
          </b-form-textarea>
          <b-button variant="info" @click="closeEditTodoDesc">OK</b-button>
        </div>
        <div v-if="showTodoDesc" class="todo-description-content">
          <pre v-if="!todo.description" @click="editTodoDesc" class="underline">Add some details here...</pre>
          <pre v-if="todo.description" @click="editTodoDesc" class="underline">{{ todo.description }}</pre>
        </div>
      </div>

      <div class="complete-switch pretty p-switch p-fill" v-if="showComplete">
        <input type="checkbox" v-model="todo.completed" @change="completeTodo(todo)" />
        <div class="state p-success">
          <label></label>
        </div>
      </div>

      <div class="delete-todo" v-if="showTrash">
        <span v-if="showConfirmDelete" > Are you sure? -
          <b-button variant="info" @click="okDelete(todo)">OK</b-button>
          <b-button variant="info" @click="noDelete">NO</b-button>
        </span>
        <span v-else @click="deleteTodo()"><font-awesome-icon icon="trash-alt" /></span>
      </div>

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
      showTrash: true,
      showComplete: true,
      showEditTodoName: false,
      showEditTodoDesc: false,
      showConfirmDelete: false,
      showTodoDesc: true

      // confirmDelete: false,
      // trashOpened: false,
      // enableEditTodoName: false,
      // enableEditTodoDesc: false
    }
  },
  methods: {
    completeTodo: function (todo) {
      this.$emit('completed', { completed: todo.completed })
    },
    deleteTodo: function () {
      this.showConfirmDelete = true
      this.showTrash = true
      this.showComplete = false
    },
    okDelete: function (index) {
      this.$emit('delete', index)
      this.showConfirmDelete = false
      this.showTrash = true
    },
    noDelete: function () {
      this.showConfirmDelete = false
      this.showTrash = true
      this.showComplete = true
    },
    editTodoName: function () {
      this.showEditTodoName = true
      this.showComplete = false
      this.showTrash = false
    },
    editTodoDesc: function () {
      this.showEditTodoDesc = true
      this.showTrash = false
      this.showComplete = false
      this.showTodoDesc = false
    },
    closeEditTodoName: function () {
      this.showEditTodoName = false
      this.showComplete = true
      this.showTrash = true
    },
    closeEditTodoDesc: function () {
      this.showEditTodoDesc = false
      this.showComplete = true
      this.showTrash = true
      this.showTodoDesc = true
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

  .todo-name {
    margin-bottom: 1rem;
  }

  .todo-desciption-editor textarea {
    margin-bottom: .5rem
  }

  .todo-desciption-editor button {
    float: right;
  }

  .todo.completed .card-body {
    background-color: #17b89a5e;
  }

  .delete-todo {
    float: right;
  }

  pre {
    color: #c3c3c3;
  }

</style>
