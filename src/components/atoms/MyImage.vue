<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>()
</script>
<template>
  <img :src :alt />
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

body.highlight {
  img {
    @include utilities.atomic-highlight('atom', yellow)
  }
}
</style>
