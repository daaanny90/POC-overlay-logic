<template>
  <p>
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

body.highlight {
  p {
    @include utilities.atomic-highlight('atom', yellow)
  }
}
</style>
