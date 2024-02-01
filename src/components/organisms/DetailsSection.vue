<script setup lang="ts">
import AccomodationDetails from '@/components/molecules/AccomodationDetails.vue'
import TravelDetails from '@/components/molecules/TravelDetails.vue'
</script>

<template>
  <section>
    <div>
      <accomodation-details></accomodation-details>
    </div>
    <div>
      <travel-details></travel-details>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

section {
  display: flex;
  justify-content: space-between;

  gap: 1rem;

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }



  div {
    width: 50%;

    @media screen and (max-width: 970px) {
      width: 100%;
    }
  }
}

body.highlight {
  section {
    @include utilities.atomic-highlight('organism', green);
  }
}
</style>
