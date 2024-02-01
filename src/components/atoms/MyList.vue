<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

body.highlight {
  ul {
    @include utilities.atomic-highlight('atom', yellow)
  }
}
</style>
