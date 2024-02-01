<script lang="ts" setup>
import MyOverlay from '@/components/atoms/MyOverlay.vue'
import MyButton from '@/components/atoms/MyButton.vue'
import MyList from '@/components/atoms/MyList.vue';
import MySubtitle from '@/components/atoms/MySubtitle.vue';
import { useOverlayStore } from '@/stores/Overlay.store';
import { getTravelData } from '@/services/travel.service';
import { onMounted } from 'vue';

const store = useOverlayStore();

onMounted(() => {
  store.initializeOverlayData(getTravelData, 'travel')
})
</script>

<template>
  <div>
    <my-overlay v-if="store.visibleOverlay === 'travel'">
      <template #header>
        <my-subtitle>{{ store.travelData.title }}</my-subtitle>
      </template>

      <template #body>
        <my-list>
          <li><strong>Hotel name: </strong>{{ store.travelData.hotelName }}</li>
          <li><strong>Price: </strong>{{ store.travelData.price }}</li>
        </my-list>
      </template>

      <template #footer>
        <my-button @click="store.clearOverlay()" centered>
          Close and go back
        </my-button>
      </template>
    </my-overlay>
  </div>
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


