<template>
    <div>
        <input type="text" v-model="text"/>
        <button @click="add">add</button>
    </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    add: function () {
      return this.$store.dispatch('add', this.text)
    }
  }
}
</script>

<style scoped>

</style>
