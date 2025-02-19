<template>
  <OutputComponent />
  <div class="fixed bottom-0">
    <BaseButton class="bg-yellow-500" title="Back to Editor" @click="router.push('/')" />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import OutputComponent from '@/components/OutputComponent.vue'
import router from '@/router'
</script>
