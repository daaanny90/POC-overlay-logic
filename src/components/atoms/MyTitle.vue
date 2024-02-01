<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

body.highlight {
  h1 {
    @include utilities.atomic-highlight('atom', yellow)
  }
}
</style>
