<script lang="ts" setup>
import MyOverlay from '@/components/atoms/MyOverlay.vue'
import MyButton from '@/components/atoms/MyButton.vue'
import MySubtitle from '@/components/atoms/MySubtitle.vue'
import MyParagraph from '@/components/atoms/MyParagraph.vue'
import MyList from '@/components/atoms/MyList.vue'
import { useOverlayStore } from '@/stores/Overlay.store';
import { getAccomodationData } from '@/services/accomodation.service';

const store = useOverlayStore();
store.initializeOverlayData(getAccomodationData, 'accomodation')
</script>

<template>
  <my-overlay v-if="store.visibleOverlay === 'accomodation'">
    <template #header>
      <my-subtitle>{{ store.accomodationData.title }}</my-subtitle>
    </template>

    <template #body>
      <my-paragraph><strong>Number of places: </strong>{{ store.accomodationData.places }}</my-paragraph>
      <br>
      <my-paragraph><strong>Services:</strong></my-paragraph>
      <my-list>
        <li v-for="service in store.accomodationData.services" :key="service">{{ service }}</li>
      </my-list>
    </template>

    <template #footer>
      <my-button @click="store.clearOverlay()" centered>
        Close and go back
      </my-button>
    </template>
  </my-overlay>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

body.highlight {
  div {
    :deep(.overlay__content) {
      @include utilities.atomic-highlight('molecule', red)
    }
  }
}
</style>
