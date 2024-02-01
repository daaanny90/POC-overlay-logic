<script setup lang="ts">
import DetailsSection from '@/components/organisms/DetailsSection.vue'
import MyTitle from '../components/atoms/MyTitle.vue';
import MyParagraph from '@/components/atoms/MyParagraph.vue';
</script>

<template>
  <main>
    <my-title>Detail Section</my-title>
    <details-section></details-section>
    <br>
    <my-paragraph>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur
      mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
      est
      aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit
      esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
      Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
      ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
      culpa duis.
    </my-paragraph>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

main {
  padding: 1rem;
}

body.highlight {
  main {
    @include utilities.atomic-highlight('page', blue)
  }
}
</style>

