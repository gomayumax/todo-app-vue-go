<template>
    <ul>
        <li v-for="item in items"
            :key="item.id">
            {{ item.text }}
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapGetters([
      'items'
    ])
  }
}
</script>

<style scoped>

</style>
