<script lang="ts" setup>
import MyTitle from '@/components/atoms/MyTitle.vue';
import TravelOverlay from '@/components/molecules/TravelOverlay.vue';
import MyButton from '@/components/atoms/MyButton.vue';
import MyImage from '@/components/atoms/MyImage.vue';
import { useOverlayStateStore } from '@/states/Overlay.state';

const state = useOverlayStateStore();
</script>

<template>
  <article>
    <my-title>Travel Details</my-title>
    <my-image src="https://picsum.photos/id/124/200" alt="travel" />
    <MyButton @click="state.toggleOverlay('travel')">See Travel Details</MyButton>
    <travel-overlay v-if="state.visibleOverlay === 'travel'"></travel-overlay>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/style/poc.utilities" as utilities;

article {
  text-align: left;
  display: flex;
  flex-direction: column;

}

body.highlight {
  article {
    @include utilities.atomic-highlight('molecule', red)
  }
}

img {
  width: 250px;
  margin-bottom: 1rem;
}
</style>
