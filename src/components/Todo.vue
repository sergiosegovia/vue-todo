<template>

  <div class="todo">
    <b-card
            style="max-width: 100%"
            class="mb-2">
        <h2>{{ todo.name }}</h2>

        <span @click="deleteTodo(index)"><font-awesome-icon icon="trash-alt" /></span>
    </b-card>
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

  span {
    float: right;
    color: #17a2b8;
  }

  h2 {
    color: #868686;
    font-size: 1.5rem;
  }

  .card-body {
    padding: .5rem;
  }

  .card {
    border: 1px solid rgb(23, 162, 184);
  }

</style>
