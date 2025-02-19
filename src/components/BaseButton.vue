<template>
  <button class="text-black p-5 rounded-xl cursor-pointer">{{ title }}</button>
</template>

<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>
