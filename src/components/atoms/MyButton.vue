<script setup lang="ts">
defineProps<{
  centered?: boolean
}>();
</script>
<template>
  <button :class="{ centered: centered }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

button {
  max-width: 250px;
}

body.highlight {
  button {
    @include utilities.atomic-highlight('atom', yellow)
  }
}

.centered {
  margin: 0 auto;
}
</style>
