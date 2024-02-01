<script setup lang="ts">
import MyOfferPage from './pages/MyOfferPage.vue';

const toggleHighlight = () => {
  document.querySelector('body')?.classList.toggle('highlight')
}
</script>

<template>
  <div class="controls">
    <label>
      <input type="checkbox" @change="toggleHighlight">
      Show atomic highlight
    </label>
  </div>

  <my-offer-page></my-offer-page>
</template>

<style lang="scss" scoped>
.controls {
  border: 1px solid #fff;
  border-radius: 10px;
  height: 100%;
  display: block;
  padding: 1rem;
  margin-bottom: 5rem;
}
</style>
