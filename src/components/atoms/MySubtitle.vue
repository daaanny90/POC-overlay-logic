<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

body.highlight {
  h2 {
    @include utilities.atomic-highlight('atom', yellow)
  }
}
</style>
