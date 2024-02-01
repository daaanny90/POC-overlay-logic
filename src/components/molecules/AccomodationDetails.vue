<script setup lang="ts">
import MyTitle from '@/components/atoms/MyTitle.vue';
import AccomodationOverlay from '@/components/molecules/AccomodationOverlay.vue'
import MyButton from '@/components/atoms/MyButton.vue';
import MyParagraph from '@/components/atoms/MyParagraph.vue';
import { useOverlayStore } from '@/stores/Overlay.store';
import { getAccomodationData } from '@/services/accomodation.service';

const store = useOverlayStore();

const toggleOverlay = () => {
  if (!store.isDataInitialized('accomodation')) {
    store.initializeOverlayData(getAccomodationData, 'accomodation');
  }

  store.toggleOverlay('accomodation')
}
</script>

<template>
  <article>
    <my-title>Accomodation Details</my-title>
    <my-paragraph>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
      cupidatat.</my-paragraph>
    <MyButton @click="toggleOverlay">See Accomodation Details</MyButton>
    <accomodation-overlay></accomodation-overlay>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

article {
  text-align: left;
  display: flex;
  flex-direction: column;

}

body.highlight {
  article {
    @include utilities.atomic-highlight('molecule', red);
  }
}
</style>
