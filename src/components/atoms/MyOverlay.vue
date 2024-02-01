<template>
  <div class="overlay">
    <div class="overlay__content">
      <slot name="header"></slot>

      <div class="overlay__body">
        <slot name="body"></slot>
      </div>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/style/poc.utilities' as utilities;

.overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    width: 50vw;
    height: 50vw;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
  }

  &__body {
    text-align: left;
  }
}
</style>


