<template>
  <RouterView />
  <!-- <BaseButton class="bg-yellow-500" title="Preview" @click="router.push('/preview')" /> -->
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'
</script>
