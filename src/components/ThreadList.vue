<template>
  <div class="col-full">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <ThreadListItem v-for="thread in threads" :thread="thread" :key="thread.id"/>

    </div>
  </div>
</template>

<script>
import ThreadListItem from "@/components/ThreadListItem";

export default {
  components: {
    ThreadListItem
  },
  props: {
    threads: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>