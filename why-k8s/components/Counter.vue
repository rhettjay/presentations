<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  count: {
    default: 0,
  },
})

const counter = ref(props.count)
</script>

<template>
  <div flex="~" w="min" border="~ main rounded-md">
    <button
      border="r main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter -= 1"
    >
      -
    </button>
    <span m="auto" p="2">{{ counter }}</span>
    <button
      border="l main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter += 1"
    >
      +
    </button>
  </div>
    <footer class="absolute bottom-0 left-0 right-0 p-2">
    {{ $nav.currentPage }} / {{ $nav.total }}
    </footer>
</template>
